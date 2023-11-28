  
//Importando los modulos de firebase
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Login from '../src/components/Login'
import Home from '../src/components/Home'
//Vamos a obtener la autenticacion desde la configuracion de firebase
const auth = getAuth(appFirebase)

import './App.css'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase){
      setUser(userFirebase)
    }
    else {
      setUser(null)
    }
  })

  return (
    <div>
      { user ? <Home emailUser={user.email}/> : <Login/> }
    </div>
  )
}

export default App
