class NegociacaoController {

    constructor() {
        
        // selecionar elementos DOM
        // método bind mantem o método querySelector associado ao document
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');        
    }

    adiciona(event) {

        //cancela o comportamento default do evento (submissão do formulário)
        event.preventDefault(); 
        
        // ..spread operator
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
        console.log(negociacao);
      
    }
}