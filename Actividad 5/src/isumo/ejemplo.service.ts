import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Socket } from 'socket.io';
import { Repository } from 'typeorm';
import { InsumoDTO } from './dto/mensajes.dto.';
import { InsumoEvaluacion } from './entyti/entiti.insumo';


interface User {
    id: string;
    name: string;
    isActive: boolean    
}

interface ConnectedClients {
    [id: string]: {
        socket: Socket;
        user: User;
    }
}

const users: User[] = [
    {id: '1', name: 'Adrian', isActive: true},
    {id: '2', name: 'Zamora', isActive: true},
    {id: '3', name: 'Antonio', isActive: true}
]



@Injectable()
export class EjemploService {
  constructor(
    @InjectRepository(InsumoEvaluacion)
    private readonly insumoEvaluacionRepository: Repository<InsumoEvaluacion>
  ) {}

  private connectedClients: ConnectedClients = {};

  async create(data: InsumoDTO): Promise<InsumoEvaluacion> {
    const newInsumo = this.insumoEvaluacionRepository.create(data);
    return this.insumoEvaluacionRepository.save(newInsumo);
  }

  registerClient(socket: Socket, userId: string) {
    const user = users.find(user => user.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    if (!user.isActive) {
      throw new Error('User is not active');
    }

    this.checkUserConnection(user);

    this.connectedClients[socket.id] = {
      socket: socket,
      user: user
    }
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }

  getUserfullName(socketId: string): string {
    return this.connectedClients[socketId].user.name;
  }

  updateUserStatus(user: User) {
    const client = this.connectedClients[user.id];
    if (client) {
      client.user = user;
    }
  }

  checkUserConnection(user: User) {
    let connectionCount = 0;

    for (const clientId of Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
        connectionCount++;
        if (connectionCount >= 3) {
          throw new Error('User has reached the maximum number of connections (3)');
        }
      }
    }
  }
}