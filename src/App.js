import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Form from './Formulario';
import dados from './Mock';
import Header from './Header';
import './App.css'

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

    }

    escutadorDeSubmit = cliente => {
     console.log(cliente)
      this.setState({ descricao:[...this.state.descricao, cliente]})
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
  

} export default App;
