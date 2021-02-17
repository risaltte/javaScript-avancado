class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        // programação defensiva. Retorna uma cópia para que as negociações 
        // não possam ser alteradas 
        return [].concat($this._negociacoes);
    }
}