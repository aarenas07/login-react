import React, { useEffect, useState } from 'react'
import appFirebase from '../../credenciales'
import { getAuth, signOut } from 'firebase/auth'
import { Card } from '../Card/Card'
import { Loader } from '../Loader/Loader'
import "../../App.css"

const auth = getAuth(appFirebase)

const Home = ({ emailUser }) => {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [loading])

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data))
  }, [])

  return (
    <div className='homeContainer'>
      {loading ? <Loader /> :

        <div className='container'>
          <h2 className='text-center'>Bienvenido {emailUser} <button className='btn btn-primary' onClick={() => signOut(auth)}>Cerrar sesión</button> </h2>
          <div className='cardsContainer'>
            {
              productos?.map((producto) => (
                <div key="" className='target' >
                  <Card nombre={producto.nombre} precio={producto.precio} imagen={producto.img.imagenUno}></Card>
                </div>
              ))
            }
            
          </div>
        </div>
      }
    </div>
  )
}

export default Home