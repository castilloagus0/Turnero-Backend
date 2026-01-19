import { Controller, Post, Param } from '@nestjs/common';
import { NotificacionFactory } from 'src/notifications/notification.factory';

@Controller('sNotification')
export class SNotificacionesController {
    constructor(private readonly notificacionFactory: NotificacionFactory) {}

    @Post('send/:tipo/:destinatario/:asunto/:mensaje')
    async sendNotification(
        @Param('tipo') tipo: string,
        @Param('destinatario') destinatario: string,
        @Param('asunto') asunto: string,
        @Param('mensaje') mensaje: string,
    ) {
        const notificacion = this.notificacionFactory.crearNotificacion(tipo);
        await notificacion.enviar(destinatario, asunto, mensaje);
    }

}