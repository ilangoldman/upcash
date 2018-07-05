export class Recebivel {
    private _id: Number;
    private _nfe: String;
    private _nfeId: String;
    private _valor: Number;
    private _porcentagem: Number;
    private _status: String;
    private _sacado: String;
    private _data: String;

    public constructor(id, r) {
        this.id = id;
        this.nfe = r.nfe;
        this.nfeId = r.nfeId;
        this.valor = r.valor;
        this.porcentagem = r.porcentagem;
        this.status = r.status;
        this.sacado = r.sacado;
        this.data = r.data;
    }

    public get data(): String {
        return this._data;
    }
    public set data(value: String) {
        this._data = value;
    }

    public get sacado(): String {
        return this._sacado;
    }
    public set sacado(value: String) {
        this._sacado = value;
    }

    public get status(): String {
        return this._status;
    }
    public set status(value: String) {
        this._status = value;
    }

    public get porcentagem(): Number {
        return this._porcentagem;
    }
    public set porcentagem(value: Number) {
        this._porcentagem = value;
    }

    public get valor(): Number {
        return this._valor;
    }
    public set valor(value: Number) {
        this._valor = value;
    }

    public get nfeId(): String {
        return this._nfeId;
    }
    public set nfeId(value: String) {
        this._nfeId = value;
    }

    public get nfe(): String {
        return this._nfe;
    }
    public set nfe(value: String) {
        this._nfe = value;
    }

    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }
}
