import React, { useEffect, useState } from 'react'
import appFirebase from '../../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Alert, Collapse, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import './Login.css'

const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)
    const [error, setError] = useState(false)
    const [open, setOpen] = useState(false)
    const handleRegister = (e) => {
        e.preventDefault()
        setRegistrando(!registrando)
    }

    const handleAuthentication = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        if (registrando) {
            await createUserWithEmailAndPassword(auth, email, password)
        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                setError(true)
                setOpen(true)
            }
        }

    }

    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
        }, 7000);
    }, [open])


    return (
        <div>
            {error && <Collapse in={open}>
                <Alert
                    variant="filled"
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Tu usuario y/o contraseña son incorrectos
                </Alert>
            </Collapse>}
            {/* <div className='row'>
                <div className="col-md-4">
                    <div className="padre">
                        <div className="form-box">
                            <form className="form" onSubmit={handleAuthentication}>
                                <span className="title">Sign up</span>
                                <span className="subtitle">Create a free account with your email.</span>
                                <div className="form-container">
                                    <input id='email' type="email" className="input" placeholder="Email"></input>
                                    <input id='password' type="password" className="input" placeholder="Password"></input>
                                </div>
                                <button>{registrando ? " Registrate " : "Iniciar sesión"}</button>
                            </form>
                            <div className="form-section">
                                <p>Have an account? <a href="" onClick={handleRegister}>{registrando ? " Iniciar sesion " : "Registrate"}</a> </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={Imagen} alt="" className='image-size' />
                </div>
            </div> */}

            <div className='containerBody'>
                <div className='videoContainer'>
                    <video className='video' playsInline autoPlay loop muted src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"></video>
                </div>
                <div className='loginContainer'>


                    <div className="loginContainerForm">
                        <form className="form" onSubmit={handleAuthentication}>
                            <span className="title">Sign up</span>
                            <span className="subtitle">Create a free account with your email.</span>
                            <div className="form-container">
                                <input id='email' type="email" className="input" placeholder="Email"></input>
                                <input id='password' type="password" className="input" placeholder="Password"></input>
                            </div>
                            <button className='btn_login'>{registrando ? " Registrate " : "Iniciar sesión"}</button>
                        </form>
                        <div className="form-section">
                            <p>Have an account? <a href="" onClick={handleRegister}>{registrando ? " Iniciar sesion " : "Registrate"}</a> </p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login