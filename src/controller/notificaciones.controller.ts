import { Controller, Get } from '@nestjs/common';
import { WhatsAppNotificacion } from 'src/notifications/strategies/wppNotificacion.service';

@Controller('prueba-whatsapp')
export class PruebaController {
  constructor(private readonly whatsapp: WhatsAppNotificacion) {}

  @Get('test')
  async probar() {
    // REEMPLAZA CON TU NÚMERO (Formato: 549 + código área + numero)
    // Ej: Villa María -> 549353.......
    const miNumero = '5493534195762';    
    await this.whatsapp.enviar(miNumero, 'Esto está funcionando 🚀');
    
    return 'Mensaje enviado, revisa tu celular';
  }
}