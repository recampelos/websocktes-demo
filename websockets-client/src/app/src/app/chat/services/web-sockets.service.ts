import { effect, Injectable, Signal, signal } from '@angular/core';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';

@Injectable()
export class WebSocketsService {
  connectionStatus = signal<number>(0);
  message = signal<string>('');

  private connection = signal<boolean | null>(null);
  private stopnCLient!: CompatClient;

  constructor() {
    effect(() => {
      if (this.connection() !== null && this.connection()) {
        const socket = new SockJS('http://localhost:9090/app');
        this.stopnCLient = Stomp.over(socket);
        this.stopnCLient.connect();
      } else if (this.connection() !== null && !this.connection()) {
        this.stopnCLient.deactivate();
      }
    });
  }

  connect() {
    this.connection.set(true);
  }

  disconnect() {
    this.connection.set(false);
  }
}
