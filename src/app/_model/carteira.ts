import { ContaBancaria } from './conta-bancaria';

export class Carteira {
    private _contaBancaria: ContaBancaria;

    private _id: String;
    private _balanco: Number;
    private _disponivel: Number;
    private _ultimaRetirada: String;
    private _autoRetirada: boolean;

    public constructor(iugu) {
        const cb = {
            banco: iugu.bank,
            tipo: iugu.account_type,
            agencia: iugu.bank_ag,
            conta: iugu.bank_cc
        };
        this.contaBancaria = new ContaBancaria(cb);
        this.id = iugu.id;
        this.balanco = iugu.balance;
        this.disponivel = iugu.balance_available_for_withdraw;
        this.ultimaRetirada = iugu.last_withdraw;
        this.autoRetirada = iugu.auto_withdraw;
    }

    public get autoRetirada(): boolean {
        return this._autoRetirada;
    }
    public set autoRetirada(value: boolean) {
        this._autoRetirada = value;
    }

    public get ultimaRetirada(): String {
        return this._ultimaRetirada;
    }
    public set ultimaRetirada(value: String) {
        this._ultimaRetirada = value;
    }

    public get disponivel(): Number {
        return this._disponivel;
    }
    public set disponivel(value: Number) {
        this._disponivel = value;
    }

    public get balanco(): Number {
        return this._balanco;
    }
    public set balanco(value: Number) {
        this._balanco = value;
    }

    public get contaBancaria(): ContaBancaria {
        return this._contaBancaria;
    }
    public set contaBancaria(value: ContaBancaria) {
        this._contaBancaria = value;
    }

    public get id(): String {
        return this._id;
    }
    public set id(value: String) {
        this._id = value;
    }
}
