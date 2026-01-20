import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { INotificacion } from '../noti-interface/notificacion.interface';
import { rememberTurno } from 'src/functions/rememberTurno';

@Injectable()
export class WhatsAppNotificacion implements INotificacion {
  private readonly logger = new Logger(WhatsAppNotificacion.name);
  
  private readonly apiUrl = `https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_ID}/messages`;

  constructor(private readonly httpService: HttpService) {}

  async enviar(destinatario: string, idTurno: number): Promise<void> {

    //Antes tengo que llamar al getTurnoRepository para obtener los datos del turno
    const mensaje = await rememberTurno(idTurno); //esto estaria mal
    
    const payload = {
      messaging_product: 'whatsapp',
      to: destinatario, // Ej: '549353...'
      type: 'template',
      template: {
        name: 'recordatorio', // Plantilla default de Sandbox
        language: { code: 'en_AR' }
      },
      text: { body: mensaje }
    };

    // Configuración de cabeceras con tu Token
    const headers = {
      Authorization: `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
      'Content-Type': 'application/json',
    };

    try {
      this.logger.log(`📱 Intentando enviar WhatsApp a ${destinatario}...`);
      
      // Enviamos la petición a Meta
      const response = await lastValueFrom(
        this.httpService.post(this.apiUrl, payload, { headers })
      );

      this.logger.log(`✅ WhatsApp enviado con éxito. ID: ${response.data.messages[0].id}`);
      
      // (Opcional) Aquí podrías loguear el contenido real que querías enviar
      this.logger.debug(`Contenido original del mensaje (no enviado en template hello_world): "${mensaje}"`);

    } catch (error) {
      // Manejo de errores robusto para que veas qué pasó si falla
      const errorMsg = error.response?.data?.error?.message || error.message;
      this.logger.error(`❌ Error enviando WhatsApp: ${errorMsg}`, error.stack);
      throw error; // Re-lanzamos para que quien llame sepa que falló
    }
  }
}