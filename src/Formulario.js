 import React , { Component } from 'react'
 import FormValidator from './FormValidator'
 import PopUp from './PopUp';

class Formulario extends Component {

    constructor (props){
            super(props);

            this.validador = new FormValidator([
                {
                campo:'cliente',
                metodo:'isEmpty',
                validoQuando: false,
                mensagem:'Adicione o nome do Cliente' 
                },
                {
                campo:'descricao',
                metodo:'isEmpty',
                validoQuando: false,
                mensagem:'Adicione a descrição do Produto'     
                },
                {
                campo:'quantidade',
                metodo:'isInt',
                args: [{min:1, max:99999}],
                validoQuando: true,
                mensagem:'Adicione a Quantidade' 
                },
                {
                campo:'entrada',
                metodo:'isInt',
                args: [{min:1, max:99999}],
                validoQuando: true,
                mensagem:'Adicione a Data de Entrada'
                },
                {
                campo:'saida',
                metodo:'isInt',
                args: [{min:1, max:99999}],
                validoQuando: true,
                mensagem:'Adicione a Data de Saída'
                },
                {
                campo:'dimensao',
                metodo:'isInt',
                args: [{min:1, max:99999}],
                validoQuando: true,
                mensagem:'Adicione a Dimensão' 
                },
                {
                campo:'valor',
                metodo:'isInt',
                args: [{min:1, max:99999}],
                validoQuando: true,
                mensagem:'Adicione o Valor' 
                }

            ])

            this.stateInicial = {
                cliente:'',
                descricao:'',
                quantidade:'',
                entrada:'',
                saida:'',
                dimensao:'',
                valor:'',
                validacao: this.validador.valido(),
            }
                this.state = this.stateInicial;

    }
    escutadorDeInput = event => {
        const { name, value } = event.target;
    
        this.setState({
            [name] : value
        });
    }

    submitFormulario = () => {

        const validacao = this.validador.valida(this.state);

        if(validacao.isValid){
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
        }else{
            const {cliente, descricao, quantidade, entrada, saida, valor} = validacao;
            const campos = [cliente, descricao, quantidade, entrada, saida, valor];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
        });
        }
    }


    render () {

        const { cliente, descricao, quantidade, entrada, saida, dimensao, valor} = this.state;

        return ( 

            <form>
                
                <label htmlFor="cliente">Cliente</label>
                <input
                    id="cliente"
                    type="text"
                    name="cliente"
                    value={cliente}
                    onChange={this.escutadorDeInput}
                />

                <label htmlFor="descricao">Descrição</label>
                <input
                    id="descricao"
                    type="text"
                    name="descricao"
                    value={descricao}
                    onChange={this.escutadorDeInput}
                />


                <label htmlFor="quantidade">Quantidade</label>
                <input
                    id="quantidade"
                    type="text"
                    name="quantidade"
                    value= { quantidade }
                    onChange={this.escutadorDeInput}
                />

                <label htmlFor="entrada">Entrada</label>
                <input
                    id="entrada"
                    type="text"
                    name="entrada"
                    value = { entrada }
                    onChange={this.escutadorDeInput}
                />

                <label htmlFor="saida">Saída</label>
                <input
                    id="saida"
                    type="text"
                    name="saida"
                    value={saida}
                    onChange={this.escutadorDeInput}
                />


                <label htmlFor="dimensao">Dimensão</label>
                <input
                    id="dimensao"
                    type="text"
                    name="dimensao"
                    value={dimensao}
                    onChange={this.escutadorDeInput}
                />

                <label htmlFor="valor">Valor</label>
                <input
                    id="valor"
                    type="text"
                    name="valor"
                    value={valor}
                    onChange={this.escutadorDeInput}
                />

                <button onClick = {this.submitFormulario} type="button" className = 'waves-effect waves-light green darken-4 btn'>Cadastrar</button>
            </form>

        );

    }

}
    export default Formulario;