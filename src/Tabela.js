import React, { Component } from 'react' ;

    const TableHead = () => {
      return (
              <thead>
              <tr>
                <th>Cliente</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Entrada</th>
                <th>Saída</th>
                <th>Dimensões</th>
                <th>Valor</th>
              </tr>
            </thead>

      );

    }

    const TableBody = props => {
      const linhas = props.descricao.map((linha,index) => {
        return (
            <tr>
              <td>{linha.Cliente}</td>
              <td>{linha.Descricao}</td>
              <td>{linha.Quantidade}</td>
              <td>{linha.Entrada}</td>
              <td>{linha.Saida}</td>
              <td>{linha.Dimensao}</td>
              <td>{linha.Valor}</td>
              <td><button>Cadastrar</button></td>
            </tr>
        )}
        );
        return (
          <tbody>
            {linhas}
          </tbody>
        );

    }
      
    class Tabela extends Component{
        render(){

            const {descricao} = this.props; 

            return(
                <table>
                  <TableHead />
                  <TableBody descricao = {descricao}/>             
                  
              </table>
            )

        }
    }

    export default Tabela;