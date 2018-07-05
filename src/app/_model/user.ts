export class User {
    // firebase uid
    private _uid: String;

    // info sobre usuario (PF)
    private _email: String;
    private _nome: String;
    private _sobrenome: String;
    private _cpf: String;

    public constructor(u?) {
        if (u != null) {
            this.create(u);
        }
    }

    public create(u, uid?, t?) {
        this.uid = u.uid;
        this.nome = u.nome;
        this.sobrenome = u.sobrenome;
        this.cpf = u.cpf;
        this.email = u.email;
    }

    public get uid(): String {
        return this._uid;
    }
    public set uid(value: String) {
        this._uid = value;
    }

    public get cpf(): String {
        return this._cpf;
    }
    public set cpf(value: String) {
        this._cpf = value;
    }

    public get sobrenome(): String {
        return this._sobrenome;
    }
    public set sobrenome(value: String) {
        this._sobrenome = value;
    }

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }

    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }
}
