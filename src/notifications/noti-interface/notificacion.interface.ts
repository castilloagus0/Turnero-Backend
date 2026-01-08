export interface INotificacion {
  enviar(destinatario: string, asunto: string, mensaje: string): Promise<void>;
}