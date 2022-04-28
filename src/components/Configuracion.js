import "../styles.css";
import petcareLogo from "../img/PetCare-logo.jpg"

function Configuracion({perfil, setPerfil}){


    const handleChange = (e)=>{
        setPerfil({...perfil,[e.target.name] : e.target.value})
    }
    const handleSave = ()=>{
        setPerfil(perfil)
        console.log(perfil)
    }

    return(

        <div className="main-card">
        <div className="config-card">
          <div className="login-card">
            <div className="login-box">
              <div className="d-flex">
              <h2>Perfil de Usuario</h2><i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">pets</i>
              </div>
            <p>Edita la información que se muestra en tu perfil</p>
            <div className="input-md">
                              <form>
                                <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                                <input className="mdc-text-field__input" type="text" value={perfil.nombre} name="nombre" onChange={handleChange} required/>
                                <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">account_box</i>
                                </label>
    
                                <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                                <input className="mdc-text-field__input" type="text" value={perfil.telefono} name="telefono" onChange={handleChange} required/>
                                <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">phone</i>
                                </label>

                                <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                                <input className="mdc-text-field__input" type="text" value={perfil.email} name="email" onChange={handleChange} required/>
                                <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">email</i>
                                </label>
                                
                        <button onClick={handleSave} class="mdc-button mdc-button--raised">
                                <span class="mdc-button__label">Guardar</span>
                        </button>
                        </form>

            </div>
            
            <div className="register-box">
            

            </div>
            
            
            </div>
            <div className="description-box">
              <img src={petcareLogo} alt="logo-veterinary"/>
              <div className="description-parrafo">
              <h3>PetCare Dashboard</h3>
              <p>Lleva el registro de tus pacientes, administra el hotel de mascotas y controla tus insumos, para que te concentres en lo que más importa. </p>
              </div>
              
            </div>
          </div>
        </div>
        </div>
       
           
        
    
    )
}

export default Configuracion