import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // 👈 Importante
import { WhatsAppNotificacion } from 'src/notifications/strategies/wppNotificacion.service';
import { PruebaController } from 'src/controller/notificaciones.controller';

@Module({
  imports: [HttpModule], 
  providers: [WhatsAppNotificacion],
  exports: [WhatsAppNotificacion],
  controllers: [PruebaController], 
})
export class NotificacionesModule {}