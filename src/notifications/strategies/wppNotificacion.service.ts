import { Injectable, Logger } from '@nestjs/common';
import { INotificacion } from '../noti-interface/notificacion.interface';

@Injectable()
export class WhatsAppNotificacion implements INotificacion {
  private readonly logger = new Logger(WhatsAppNotificacion.name);

  async enviar(destinatario: string, mensaje: string): Promise<void> {
    this.logger.log(`📱 Enviando WhatsApp a ${destinatario}: ${mensaje}`);
  }
}