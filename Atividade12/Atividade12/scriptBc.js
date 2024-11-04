class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    // Getters e Setters
    get nomeCorrentista() {
        return this._nomeCorrentista;
    }
    set nomeCorrentista(nome) {
        this._nomeCorrentista = nome;
    }

    get banco() {
        return this._banco;
    }
    set banco(banco) {
        this._banco = banco;
    }

    get numeroConta() {
        return this._numeroConta;
    }
    set numeroConta(numero) {
        this._numeroConta = numero;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
}

// Classe Corrente com Saldo Especial
class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    // Getter e Setter para Saldo Especial
    get saldoEspecial() {
        return this._saldoEspecial;
    }
    set saldoEspecial(saldoEspecial) {
        this._saldoEspecial = saldoEspecial;
    }

    // Método para mostrar dados da conta corrente
    mostrarDados() {
        return `Conta Corrente:
        Nome do Correntista: ${this.nomeCorrentista}
        Banco: ${this.banco}
        Número da Conta: ${this.numeroConta}
        Saldo: ${this.saldo}
        Saldo Especial: ${this.saldoEspecial}`;
    }
}

// Classe Poupanca com Juros e Data de Vencimento
class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    // Getters e Setters para Juros e Data de Vencimento
    get juros() {
        return this._juros;
    }
    set juros(juros) {
        this._juros = juros;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }
    set dataVencimento(data) {
        this._dataVencimento = data;
    }

    // Método para mostrar dados da conta poupança
    mostrarDados() {
        return `Conta Poupança:
        Nome do Correntista: ${this.nomeCorrentista}
        Banco: ${this.banco}
        Número da Conta: ${this.numeroConta}
        Saldo: ${this.saldo}
        Juros: ${this.juros}
        Data de Vencimento: ${this.dataVencimento}`;
    }
}

// Criando objetos das classes Corrente e Poupanca e exibindo os dados
const contaCorrente = new Corrente("Alice", "Banco A", "12345-6", 1500, 500);
const contaPoupanca = new Poupanca("Bob", "Banco B", "98765-4", 3000, 0.05, "2024-12-31");

console.log(contaCorrente.mostrarDados());
console.log(contaPoupanca.mostrarDados());
