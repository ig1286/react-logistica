import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Form from './Formulario';
import dados from './Mock';
import Header from './Header';
import PopUp from './PopUp';


class App extends Component {
  state = {
       
    descricao: dados
  };

    removeCliente = index =>{
      const { descricao } = this.state;
      
      this.setState (
        {
          descricao: descricao.filter((Cliente, posAtual) =>{
    
                return posAtual !== index;
          }),
        }

      );
      PopUp.exibeMensagem("error", "Removido com SUCESSO!")
    }

    escutadorDeSubmit = cliente => {
      this.setState({ descricao:[...this.state.descricao, cliente]})
      PopUp.exibeMensagem("success", "Cadastro feito com SUCESSO!")
    }

    render(){
      return (
        <Fragment>
          <Header />
          <Tabela descricao={this.state.descricao} removeCliente={this.removeCliente} />
          <Form  escutadorDeSubmit = {this.escutadorDeSubmit}/>
        </Fragment>
    );
  }
  

} 
export default App;
