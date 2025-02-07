import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WebSocketsService } from '../services/web-sockets.service';

@Component({
  selector: 'app-web-sockets-chat',
  imports: [],
  providers: [WebSocketsService],
  templateUrl: './web-sockets-chat.component.html',
  styleUrl: './web-sockets-chat.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebSocketsChatComponent {}
