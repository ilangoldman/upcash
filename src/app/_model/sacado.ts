import { Endereco } from './endereco';
import { Recebivel } from './recebivel';

export class Sacado {
    private _id: Number;
    private _nome: String;
    private _nomeFantasia: String;
    private _cnpj: String;
    private _email: String;

    private _endereco: Endereco;
    private _recebiveis: Recebivel[];

    public constructor(id, s) {
        this.id = id;
        this.nome = s.nome;
        this.nomeFantasia = s.nome_fantasia;
        this.cnpj = s.cnpj;
        this.email = s.email;
        // this.endereco = new Endereco(s.endereco);
    }

    public get recebiveis(): Recebivel[] {
        return this._recebiveis;
    }
    public set recebiveis(value: Recebivel[]) {
        this._recebiveis = value;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }
    public set endereco(value: Endereco) {
        this._endereco = new Endereco(value);
    }

    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }

    public get cnpj(): String {
        return this._cnpj;
    }
    public set cnpj(value: String) {
        this._cnpj = value;
    }

    public get nomeFantasia(): String {
        return this._nomeFantasia;
    }
    public set nomeFantasia(value: String) {
        this._nomeFantasia = value;
    }

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }

    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }
}
