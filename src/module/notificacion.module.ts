import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // 👈 Importante
import { WhatsAppNotificacion } from 'src/notifications/strategies/wppNotificacion.service';
import { NotificacionFactory } from 'src/notifications/notification.factory';
import { SNotificacionesController} from 'src/controller/servicesNotificaciones.contoller';

@Module({
  imports: [HttpModule], 
  providers: [WhatsAppNotificacion, NotificacionFactory],
  exports: [WhatsAppNotificacion, NotificacionFactory],
  controllers: [SNotificacionesController], 
})
export class NotificacionesModule {}