export interface Account {
    idCliente: number;
    numeroCuenta: number;
    saldo: number;
    fechaUltimaAct?: string
    estado?: string
}