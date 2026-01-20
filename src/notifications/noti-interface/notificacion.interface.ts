export interface INotificacion {
  enviar(destinatario: string, idTurno: number): Promise<void>;
}