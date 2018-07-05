import { User } from './user';
import { Endereco } from './endereco';
import { Carteira } from './carteira';
import { Recebivel } from './recebivel';
import { Sacado } from './sacado';
import { Mensagem } from './mensagem';

export class Empresa extends User {
    private _id: Number;
    private _razaoSocial: String;
    private _nomeFantasia: String;
    private _cnpj: String;
    private _telefone: String;
    private _fundacao: String;
    private _descricao: String;
    private _motivo: String;
    private _paginaWeb: String;

    // todo getters and setters
    private _endereco: Endereco;
    private _carteira: Carteira;
    private _recebiveis: Recebivel[];
    private _sacados: Sacado[];
    private _mensagens: Mensagem[];

    public constructor() {
        super();
        this.sacados = [];
        this.recebiveis = [];
        this.mensagens = [];
    }

    public create(uid, id, e) {
        const u = {
            uid: uid,
            nome: e.nome,
            sobrenome: e.sobrenome,
            cpf: e.cpf,
            email: e.email
        };
        super.create(u);

        this.id = id;
        this.razaoSocial = e.razao_social;
        this.nomeFantasia = e.nome_fantasia;
        this.cnpj = e.cnpj;
        this.telefone = e.telefone_comercial;
        this.fundacao = e.fundacao;
        this.descricao = e.descricao;
        this.motivo = e.motivo;
        this.paginaWeb = e.pagina_web;
    }

    public get sacados(): Sacado[] {
        return this._sacados;
    }
    public set sacados(value: Sacado[]) {
        this._sacados = value;
    }
    public addSacado(s: Sacado) {
        this.sacados.push(s);
    }

    public get recebiveis(): Recebivel[] {
        return this._recebiveis;
    }
    public set recebiveis(value: Recebivel[]) {
        this._recebiveis = value;
    }
    public addRecebivel(r: Recebivel) {
        this.recebiveis.push(r);
    }

    public get mensagens(): Mensagem[] {
        return this._mensagens;
    }
    public set mensagens(value: Mensagem[]) {
        this._mensagens = value;
    }
    public addMensagem(s: Mensagem) {
        this.mensagens.push(s);
    }

    public get carteira(): Carteira {
        return this._carteira;
    }
    public set carteira(value: Carteira) {
        this._carteira = value;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }
    public set endereco(value: Endereco) {
        this._endereco = value;
    }

    public get paginaWeb(): String {
        return this._paginaWeb;
    }
    public set paginaWeb(value: String) {
        this._paginaWeb = value;
    }

    public get motivo(): String {
        return this._motivo;
    }
    public set motivo(value: String) {
        this._motivo = value;
    }

    public get descricao(): String {
        return this._descricao;
    }
    public set descricao(value: String) {
        this._descricao = value;
    }

    public get fundacao(): String {
        return this._fundacao;
    }
    public set fundacao(value: String) {
        this._fundacao = value;
    }

    public get telefone(): String {
        return this._telefone;
    }
    public set telefone(value: String) {
        this._telefone = value;
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

    public get razaoSocial(): String {
        return this._razaoSocial;
    }
    public set razaoSocial(value: String) {
        this._razaoSocial = value;
    }

    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }


}
