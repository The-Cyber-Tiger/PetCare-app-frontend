import "../styles.css"

const PetRegit = ({regitStatus, setPet, pet}) =>{

    
  
    const handleSubmit = (e) =>{
        e.preventDefault();
      
        regitStatus({state: "pet-regit-2"})
        setPet(pet)
    }

    const handleChange = (e)=>{
        
        setPet({...pet,[e.target.name] : e.target.value})

    }
    
    return(
        <div className="box-card">
            <div className="mascota-regit mdc-card">
                <span className="material-icons"> pets</span>
                <h3>Datos de la Mascota</h3>
                <form onSubmit={handleSubmit}>
                    <div className="pet-line">
                        <div className="input-md">
                            <label className="mdc-label">Nombre de la Mascota</label>
                            <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                            <input className="mdc-text-field__input" type="text" value={pet.nombre} name="nombre" onChange={handleChange} required/>
                            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">pets</i>
                            <span className="mdc-line-ripple"></span>
                        </label>
                        </div>
                        <div className="input-md">
                            <span className="mdc-label">Raza</span>
                            <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                            <input className="mdc-text-field__input" type="text" value={pet.raza} name="raza" onChange={handleChange} required/>
                            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">pets</i>
                            <span className="mdc-line-ripple"></span>
                        </label>
                        </div>
                        <div className="input-md">
                            <span className="mdc-label">Edad</span>
                            <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                            <input className="mdc-text-field__input" type="text" value={pet.edad} name="edad" onChange={handleChange} required/>
                            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">pets</i>
                            <span className="mdc-line-ripple"></span>
                        </label>
                        </div>
                    </div>
                    <div className="pet-grid">
                        <div className="d-flex-column">
                            <div className="d-flex-column">
                                <span>Especie</span>
                                <div className="d-flex">
                                    <div className="mdc-form-field">
                                        <div className="mdc-radio">
                                            <input className="mdc-radio__native-control" type="radio" value="Perro" name="especie" onChange={handleChange} required/>
                                            <div className="mdc-radio__background">
                                            <div className="mdc-radio__outer-circle"></div>
                                            <div className="mdc-radio__inner-circle"></div>
                                            </div>
                                            <div className="mdc-radio__ripple"></div>
                                        </div>
                                        <label for="radio-1">Perro</label>
                                    </div>
                                    <div className="mdc-form-field">
                                        <div className="mdc-radio">
                                            <input className="mdc-radio__native-control" type="radio" value="Gato" name="especie" onChange={handleChange} required/>
                                            <div className="mdc-radio__background">
                                            <div className="mdc-radio__outer-circle"></div>
                                            <div className="mdc-radio__inner-circle"></div>
                                            </div>
                                            <div className="mdc-radio__ripple"></div>
                                        </div>
                                        <label for="radio-1">Gato</label>
                                    </div>
                                    <div className="mdc-form-field">
                                        <div className="mdc-radio">
                                            <input className="mdc-radio__native-control" type="radio" value="Otro" name="especie" onChange={handleChange} required/>
                                            <div className="mdc-radio__background">
                                            <div className="mdc-radio__outer-circle"></div>
                                            <div className="mdc-radio__inner-circle"></div>
                                            </div>
                                            <div className="mdc-radio__ripple"></div>
                                        </div>
                                        <label for="radio-1">Otro</label>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="d-flex-column">
                                <span>Sexo</span>
                                <div className="d-flex">
                                    <div class="mdc-form-field">
                                        <div class="mdc-radio">
                                            <input class="mdc-radio__native-control" type="radio" value="M" name="sexo" onChange={handleChange} required/>
                                            <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                            </div>
                                            <div class="mdc-radio__ripple"></div>
                                        </div>
                                        <label for="radio-1">Macho</label>
                                    </div>
                                    <div class="mdc-form-field">
                                        <div class="mdc-radio">
                                            <input class="mdc-radio__native-control" type="radio"value="H" name="sexo" onChange={handleChange} required/>
                                            <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                            </div>
                                            <div class="mdc-radio__ripple"></div>
                                        </div>
                                        <label for="radio-1">Hembra</label>
                                    </div>
                    
                                    </div>   
                            </div>
                        </div>

                        <div className="input-md">
                        <span className="mdc-label">Descripción</span>
                        <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon">
                        <input className="mdc-text-field__input" type="text" value={pet.descripcion} name="descripcion" onChange={handleChange} required/>
                        <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">pets</i>
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

export default PetRegit;