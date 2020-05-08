import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
       
    descricao: [ 
    
  { Cliente:'Walker S.A',
    Descricao:'Tonners',
    Quantidade:'50',
    Entrada:'20/03/2020',
    Saida:'25/03/2020',
    Dimensao:'30x50x70',
    Valor:'8.000,00'
  },
  { Cliente:'Lucas S.A',
    Descricao:'Parafusos',
    Quantidade:'14',
    Entrada:'02/03/2020',
    Saida:'10/03/2020',
    Dimensao:'10x30x30',
    Valor:'2.000,00'
  },
  { Cliente:'Buiuvisque S.A',
    Descricao:'Sangue',
    Quantidade:'10',
    Entrada:'05/03/2020',
    Saida:'06/03/2020',
    Dimensao:'20x10x30',
    Valor:'5.000,00'
  }
  ],
  };

    render(){
      return (
      <div className="App">
      <Tabela descricao = { this.state.descricao } />
      </div>
    );
  }
  

} export default App;
