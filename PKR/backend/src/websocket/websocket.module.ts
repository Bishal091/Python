import { Module } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';
import { WebSocketService } from './websocket.service';
import { GameModule } from '../game/game.module';

@Module({
  imports: [GameModule],
  providers: [WebSocketGateway, WebSocketService],
  exports: [WebSocketService],
})
export class WebSocketModule {} 