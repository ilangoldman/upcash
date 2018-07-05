export class Transferencia {
    private _id;
    private _data;
    private _nome;
    private _status;
    private _valor;

    public constructor(id, t) {
        this.id = id;
        this.data = t.data;
        this.nome = t.nome;
        this.status = t.status;
        this.valor = t.valor;
    }

    public get valor() {
        return this._valor;
    }
    public set valor(value) {
        this._valor = value;
    }

    public get status() {
        return this._status;
    }
    public set status(value) {
        this._status = value;
    }

    public get nome() {
        return this._nome;
    }
    public set nome(value) {
        this._nome = value;
    }

    public get data() {
        return this._data;
    }
    public set data(value) {
        this._data = value;
    }

    public get id() {
        return this._id;
    }
    public set id(value) {
        this._id = value;
    }
}
