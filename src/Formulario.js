 import React , { Component } from 'react'

class Formulario extends Component {

    constructor (props){
            super(props);

            this.stateInicial = {
                cliente:'',
                descricao:'',
                quantidade:'',
                entrada:'',
                saida:'',
                dimensao:'',
                valor:'',
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
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
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

                <button onClick = {this.submitFormulario} type="button" className = 'waves-effect waves-light light-green accent-3 btn'>Cadastrar</button>
            </form>

        );

    }

}
    export default Formulario;