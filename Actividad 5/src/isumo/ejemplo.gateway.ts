import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { EjemploService } from './ejemplo.service';
import { Server, Socket } from 'socket.io';
import { InsumoDTO } from './dto/mensajes.dto.';

@WebSocketGateway({ cors: true })
export class EjemploGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly ejemploService: EjemploService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      await this.ejemploService.registerClient(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.ejemploService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.ejemploService.removeClient(client.id);
    this.wss.emit('clients-updated', this.ejemploService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  async onMessageFromClient(client: Socket, payload: InsumoDTO): Promise<void> {
    const insumo = await this.ejemploService.create(payload);
    this.wss.emit('message-from-server', {
      fullName: this.ejemploService.getUserfullName(client.id),
      message: insumo,
    });
  }
}
