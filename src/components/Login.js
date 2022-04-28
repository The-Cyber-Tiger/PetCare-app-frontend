import "../styles.css"
import {useState, useEffect} from 'react'
import petcareLogo from "../img/PetCare-logo-colors.svg"
import sadPug from "../img/sad-pug.png"

import {getToken} from '../API/api-client'
import MobileAlert from "./MobileAlert"

const Login = ({auth, setAuth}) =>{

  const [ width, setWindowWidth ] = useState(0)
  const [loginMobile, setLoginMobile] = useState(false)

    const [usuario, setUsuario] = useState({
        email: 'demo@dogmail.com',
        password: 'crazydog'
    })

    useEffect(()=>{
      updateDimensions()
      window.addEventListener("resize", updateDimensions)

      return () =>{
          window.removeEventListener("resize", updateDimensions)
      }

  },[])
  const responsive = {
    showMobile: width < 1000
  }

  const updateDimensions=()=>{
      const width = window.innerWidth
      setWindowWidth(width)

  }

    const [showText, setShowText] = useState(false)

    const handleChange = (e)=>{
        
        setUsuario({...usuario,[e.target.name] : e.target.value})

    }
    
    const loginBtn = async(e)=>{
        e.preventDefault()
        
        const login =async()=>{
          try {
                    let res = await getToken(usuario)
                    if(res.token){
                    console.log(res.token)
                    localStorage.setItem('token', res.token)
                    setAuth(true)

                    }else{
                      regitBtn()
                  

                    }

                    
                  } catch (error) {
                    console.error(error)
                    setAuth(false)
                  }
        }

       responsive.showMobile === true ? setLoginMobile(true) : login()
      
        // window.alert('Lo sentimos, en este momento PetCare App esta optimizado solo para visualizarse en pantallas grandes, intenta accesar desde tu PC. || We sorry, at this moment PetCare App is optimized to visualize on large screens only, try to access on your PC. ')
        
    }

    const regitBtn = () =>{

        setShowText(true)

        setTimeout(() => {
            setShowText(false)
        }, 3500);

        
    }

    return (
        <div className="loginregit">
          <div className="login-card">
            <div className="login-box">
              <div className="d-flex">
              <h2>Bienvenido</h2><i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">pets</i>
    
              </div>
            <p>Inicia sesión para acceder al Dashboard</p>
            <div className="input-md">
                              <form>
                                <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                                <input className="mdc-text-field__input" type="text" value={usuario.email} name="email" onChange={handleChange} required/>
                                <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">mail</i>
                                </label>
    
                                <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                                <input className="mdc-text-field__input" type="password" value={usuario.password} name="password" onChange={handleChange} required/>
                                <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">lock</i>
                                </label>
                                
                        <button onClick={loginBtn} class="mdc-button mdc-button--raised">
                                <span class="mdc-button__label">Entrar</span>
                        </button>
                        </form>

            </div>
            
            <div className="register-box">
            <div className="d-flex">
            <small><p>No tienes una cuenta aún?</p></small> <button className="fake-btn" href="#"onClick={regitBtn}> Regístrate</button>  
            </div>
            {showText ? (<small><p id="p-alert">Lo siento, esto es un demo ingresa con las credenciales definidas</p></small>) : null }

            </div>
            
            
            </div>
            <div className="description-box">

              <div className="logo-container">
                <img src={petcareLogo} alt="logo-veterinary"/>
              </div>
              <div className="description-parrafo">
              <h3>PetCare Dashboard</h3>
              <p>Lleva el registro de tus pacientes, administra el hotel de mascotas y controla tus insumos, para que te concentres en lo que más importa. </p>
              </div>
              
            </div>

          </div>

          {loginMobile===true ? <MobileAlert setOk={setLoginMobile}>
            <div className="alertMobile-card">
              <img alt="sad-pug-pic" src={sadPug} />
              <h2>We sorry :C </h2>
              <p>At this moment, <strong>PetCare</strong> app is optimized to large screens only. Please, try it on PC.</p>
              <button onClick={()=>{setLoginMobile(false)}} class="mdc-button mdc-button--raised">
                                <span class="mdc-button__label">Ok Pug</span>
              </button>

              </div>
              </MobileAlert>  
            : null}
        </div>
      )
    
}

export default Login