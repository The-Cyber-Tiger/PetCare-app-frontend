import "../styles.css";

const UserRegit = ({regitStatus,setOwner,owner}) =>{

  

    

    const handleSubmit = (e) =>{
       
        e.preventDefault();
        setOwner(owner)
       regitStatus({state: "pet-regit-done"})
        
    }

    const handleChange = (e)=>{
        
        setOwner({...owner,[e.target.name] : e.target.value})

    }

    return(
        <div className="box-card">
            <div className="mascota-regit mdc-card">
                <span className="material-icons">person</span>
                <h3>Datos del Propietario</h3>

                <form onSubmit={handleSubmit}>
                    <div className="pet-line">
                        <div className="input-md">
                            <label className="mdc-label">Nombre</label>
                            <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                            <input className="mdc-text-field__input" type="text" value={owner.nombre} name="nombre" onChange={handleChange} required/>
                            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">account_circle</i>
                            <span className="mdc-line-ripple"></span>
                        </label>
                        </div>
                        <div className="input-md">
                            <span className="mdc-label">Domicilio</span>
                            <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                            <input className="mdc-text-field__input" type="text" value={owner.domicilio} name="domicilio" onChange={handleChange} required/>
                            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">home</i>
                            <span className="mdc-line-ripple"></span>
                        </label>
                        </div>
                        <div className="input-md">
                            <span className="mdc-label">Teléfono</span>
                            <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                            <input className="mdc-text-field__input" type="text" value={owner.telefono} name="telefono" onChange={handleChange} required/>
                            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">phone</i>
                            <span className="mdc-line-ripple"></span>
                        </label>
                        </div>
                        <div className="input-md">
                            <span className="mdc-label">E-mail</span>
                            <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                            <input className="mdc-text-field__input" type="text" value={owner.email} name="email" onChange={handleChange} required/>
                            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">email</i>
                            <span className="mdc-line-ripple"></span>
                        </label>
                        </div>
                    </div>
                    <div className="btn-container">
                    <button type="submit" class="mdc-button mdc-button--raised">
                            <span class="mdc-button__label">Siguiente</span>
                    </button>
                    </div>
                </form>

            </div>
        </div>
    )
    
}

export default UserRegit;