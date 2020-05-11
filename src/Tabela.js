import React, { Component } from 'react' ;

    const TableHead = () => {
      return (
              <thead className = "card-panel">
              <tr className = " deep-orange lighten-5">
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
        <tr key={index}>
          <td>{linha.cliente}</td>
          <td>{linha.descricao}</td>
          <td>{linha.quantidade}</td>
          <td>{linha.entrada}</td>
          <td>{linha.saida}</td>
          <td>{linha.dimensao}</td>
          <td>{linha.valor}</td>
          <td><button onClick = {() => {props.removeCliente(index)}} className = 'waves-effect  red darken-4 btn'>Remover</button></td>
        </tr>
    )}
    );
    return (
      <tbody>{linhas}</tbody>
    );
}
class Tabela extends Component{
  render(){
    const {descricao, removeCliente} = this.props; 
    return(
      <table className = "centered highlight">
        <TableHead />
        <TableBody descricao = {descricao} removeCliente = {removeCliente} />             
      </table>
    )
  }
}
export default Tabela;