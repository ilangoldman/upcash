export class Mensagem {
    private _id: Number;
    private _titulo: String;
    private _descricao: String;
    private _data: String;
    private _categoria: String;
    private _lida: boolean;

    public constructor(id, msg) {
        this.id = id;
        this.titulo = msg.titulo;
        this.descricao = msg.descricao;
        this.data = msg.data;
        this.categoria = msg.categoria;
        this.lida = (msg.lida === 'true');
    }

    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }

    public get lida(): boolean {
        return this._lida;
    }
    public set lida(value: boolean) {
        this._lida = value;
    }

    public get categoria(): String {
        return this._categoria;
    }
    public set categoria(value: String) {
        this._categoria = value;
    }

    public get data(): String {
        return this._data;
    }
    public set data(value: String) {
        this._data = value;
    }

    public get descricao(): String {
        return this._descricao;
    }
    public set descricao(value: String) {
        this._descricao = value;
    }

    public get titulo(): String {
        return this._titulo;
    }
    public set titulo(value: String) {
        this._titulo = value;
    }
}
