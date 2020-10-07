import React from 'react'
// import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css'

//componentede clase
class TarjetaFruta extends React.Component {

    state ={
      cantidad :0
    }
  
    agregar = () =>{
      this.setState((state,props) => {
        return {
          cantidad: state.cantidad +1
        }
      });
    }
    quitar = () =>{
      this.setState((state,props) => {
        return {
          cantidad: state.cantidad - 1
        }
      });
    }
    limpiar = () =>{
      this.setState((state,props) => {
        return {
          cantidad: 0
        }
      });
    }
    render = () =>{
      const hasItems = this.state.cantidad > 0
      const active = hasItems ? styles['card-active']: ''
      const classes = styles.card  + ' ' + active

      return(
      <div className={classes}>
        <h3>{this.props.name}</h3>
        <div>Cantidad: { this.state.cantidad }</div>
        <button onClick={this.agregar}>+</button>
        <button onClick={this.quitar}>-</button>
        <button onClick={this.limpiar}>Limpiar</button>
        <hr/>
        <p>Precio:{this.props.prize* this.state.cantidad} $</p>
      </div>);
    }
  }

  export default TarjetaFruta