export interface Observer {

    notificar(notificacionID: number, usuarioID: string[]): void;
}