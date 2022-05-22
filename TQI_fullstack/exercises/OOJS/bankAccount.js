class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return this.saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        return this._saldo;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return console.log(`Saque negado, saldo insuficiente. Saldo atual: ${this._saldo}`);
        }
        this.saldo -= valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação negada.';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

const minhaConta = new ContaCorrente(1, 1, true);
const contaUni = new ContaUniversitaria(2, 100);