class NegociacaoController {

    constructor() {
        
        // selecionar elementos DOM
        // método bind mantem o método querySelector associado ao document
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');   
        this._listaNegociacoes = new ListaNegociacoes();     
    }

    adiciona(event) {

        //cancela o comportamento default do evento (submissão do formulário)
        event.preventDefault();  
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1,
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}