import React from 'react'
import appFirebase from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'

const auth = getAuth(appFirebase)

const Home = ({emailUser}) => {
  return (
    <div>
        <h2 className='text-center'>Bienvenido {emailUser} <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesión</button> </h2>
    </div>
  )
}

export default Home