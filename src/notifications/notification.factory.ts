// factories/notificacion.factory.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { INotificacion } from './noti-interface/notificacion.interface';
import { WhatsAppNotificacion } from './strategies/wppNotificacion.service';

@Injectable()
export class NotificacionFactory {
  // Inyectamos todas las implementaciones disponibles
  constructor(
    private readonly whatsapp: WhatsAppNotificacion,
  ) {}

  // Este método devuelve la instancia correcta (INotificacion)
  crearNotificacion(tipo: string): INotificacion {
    switch (tipo) {
      case 'WHATSAPP':
        return this.whatsapp;
      default:
        throw new BadRequestException(`El tipo de notificación ${tipo} no existe`);
    }
  }
}