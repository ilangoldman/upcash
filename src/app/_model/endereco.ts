export class Endereco {
    private _cep: number;
    private _tipo: String;
    private _logradouro: String;
    private _numero: number;
    private _complemento: String;
    private _bairro: String;
    private _cidade: String;
    private _estado: String;


    public constructor(e) {
        this.cep = e.cep;
        this.tipo = e.tipo;
        this.logradouro = e.logradouro;
        this.numero = e.numero;
        this.complemento = e.complemento;
        this.bairro = e.bairro;
        this.cidade = e.cidade;
        this.estado = e.estado;
    }

    public get cep(): number {
        return this._cep;
    }
    public set cep(value: number) {
        this._cep = value;
    }

    public get tipo(): String {
        return this._tipo;
    }
    public set tipo(value: String) {
        this._tipo = value;
    }

    public get logradouro(): String {
        return this._logradouro;
    }
    public set logradouro(value: String) {
        this._logradouro = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

    public get complemento(): String {
        return this._complemento;
    }
    public set complemento(value: String) {
        this._complemento = value;
    }

    public get bairro(): String {
        return this._bairro;
    }
    public set bairro(value: String) {
        this._bairro = value;
    }

    public get cidade(): String {
        return this._cidade;
    }
    public set cidade(value: String) {
        this._cidade = value;
    }

    public get estado(): String {
        return this._estado;
    }
    public set estado(value: String) {
        this._estado = value;
    }

}
