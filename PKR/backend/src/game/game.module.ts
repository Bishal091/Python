import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { PrismaService } from '../prisma/prisma.service';
import { WebSocketGateway } from '@nestjs/websockets';

@Module({
  providers: [GameService, PrismaService, WebSocketGateway],
  controllers: [GameController],
  exports: [GameService],
})
export class GameModule {} 