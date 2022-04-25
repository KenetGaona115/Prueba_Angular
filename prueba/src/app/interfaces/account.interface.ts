export interface Account {
    idCliente: number;
    numeroCuenta: string;
    saldo: number;
    fechaUltimaAct?: string
    estado?: string
}