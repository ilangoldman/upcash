export class ContaBancaria {
    private _banco: String;
    private _tipo: String;
    private _agencia: String;
    private _conta: String;

    public constructor(cb) {
        this.banco = cb.banco;
        this.tipo = cb.tipo;
        this.agencia = cb.agencia;
        this.conta = cb.conta;
    }

    public get conta(): String {
        return this._conta;
    }
    public set conta(value: String) {
        this._conta = value;
    }

    public get agencia(): String {
        return this._agencia;
    }
    public set agencia(value: String) {
        this._agencia = value;
    }

    public get tipo(): String {
        return this._tipo;
    }
    public set tipo(value: String) {
        this._tipo = value;
    }

    public get banco(): String {
        return this._banco;
    }
    public set banco(value: String) {
        this._banco = value;
    }

}
