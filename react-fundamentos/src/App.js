import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta/'
import ContadorLikes from './componentes/ContadorLikes/'
import Gato from './componentes/Gato/'
import Shoot from './componentes/Shoot/'
import ImputText from './componentes/ImputText/'
import PreventDefault from './componentes/PreventDefault/'
import PersistenciaEventos from './componentes/PersistenciaEventos/'
import EventoPersonalizado from './componentes/EventoPersonalizado/'
import Saludo from './componentes/Saludo/'
import Title from './componentes/Title/'

import './global.css'
import Computacion from './componentes/Fragments/Computacion'
import Ropa from './componentes/Fragments/Ropa'
import PortalModal from './componentes/PortalModal'
import Profile from './componentes/Profile/'


const catData = {
    peleas:300,
    raza:"siames"
  }

const otherCatData = {
    fuerza:500,
    color:"negro"
  }

const App = () => (
    <div>
    
    {/* <TarjetaFruta name='Melon' prize={2.00}/>
    <br></br>
    <ContadorLikes></ContadorLikes>
    <br></br>
    <Gato name = 'Garfield' age = '2 años'{...catData} {...otherCatData}/>
    <br></br>
    <Shoot></Shoot>
    <br></br>
    <ImputText></ImputText>
    <br></br>
    <PreventDefault></PreventDefault>
    <br></br>
    <PersistenciaEventos></PersistenciaEventos>
    <br></br> 
    <EventoPersonalizado></EventoPersonalizado>
    <Saludo saluda={true}></Saludo>
    <Title uiColor='red'>
        Super <em>Ninja</em>
    </Title>
    <ul>
        <Ropa></Ropa>
        <Computacion></Computacion>
    </ul>
    <PortalModal visible = {true}>
        <h1> Hola desde un Portal Modal </h1>
    </PortalModal>
    */}

    <Profile
    name={12121}
    bio='Soy un desarrollador Fullstackmy-email@mail.com'
    email='my-email@mail.com'
    />

    </div>
  )

  export default App