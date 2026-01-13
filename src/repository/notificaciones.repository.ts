// services/servicio-notificaciones.service.ts
import { Injectable } from '@nestjs/common';
import { NotificacionFactory } from '../notifications/notification.factory';

@Injectable()
export class ServicioNotificaciones {
  constructor(private readonly notificacionFactory: NotificacionFactory) {}

  async notificarTurnoCreado(usuarioId: string, tipoPref: 'WHATSAPP') {
    const notificador = this.notificacionFactory.crearNotificacion(tipoPref);
  }

  async notificarRecordatorioTurno(usuarioId: string, tipoPref: 'WHATSAPP') {
    const notificador = this.notificacionFactory.crearNotificacion(tipoPref);
  }

  async notificarTurnoCancelado(usuarioId: string, tipoPref: 'WHATSAPP') {
    const notificador = this.notificacionFactory.crearNotificacion(tipoPref);
  }
}