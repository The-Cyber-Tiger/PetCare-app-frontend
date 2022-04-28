import "../styles.css";
import blueheeler from "../img/blueheeler.jpg"
import petroompic from "../img/petroom.jpg"
import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import RoomRegit from "./RoomRegit";

const Room = ({room, setRoom}) =>{

    const [register, setRegister] = useState(false)//1
    const [newRoom, setNewRoom] = useState(room)//2
    const [dateValue, setDateValue] = useState([new Date(), new Date()])//2

    const [switcher, setSwitch] = useState({state: true})
    const [myDate, setMyDate] = useState(dateValue);
    let roomID = room.roomID;
    const locale = 'fr-CA'; 

    useEffect(() => {
       setRegister(false)
    }, [switcher])

    useEffect(() => {
       setMyDate(dateValue)
    }, [dateValue])

   
    let showroom = function(){
        if(room.roomstate === true){
            return free
        }else{return taken}
    }
    
    const toggleSw = () =>{

        setSwitch({state: !switcher.state})
        setRegister(!register)
        setRoom({...room, roomstate: !room.roomstate})
        
    }

    const handleChange = (e) =>{
        console.log(e.target)

        console.log(newRoom)
        
        setNewRoom({...newRoom,[e.target.name] : e.target.value})
        setRoom({...newRoom, reserva: [dateValue]})

    }

    const handleSubmit = (e) => {
        e.preventDefault();


        toggleSw()

        console.log(newRoom)
        
    }

    function toggleClass(){
        let on= "mdc-switch--selected";
        let off = "mdc-switch--unselected";
    
        if(switcher.state){
    
            return on
        }else{return off}
    }

    function makeReserva(){

        let formatDay = (date) => {
            return (new Intl.DateTimeFormat(
              locale, 
              {
                year: "numeric", 
                month: "2-digit", 
                day: "2-digit"
              }).format(date))
            }

            let x = formatDay(myDate[0])
            let y = formatDay(myDate[1])

            return (x + " - " + y)
    }
    
//    console.log(room.reserva[0][0].toLocaleDateString()+" - ", room.reserva[0][1])
    
    let free = register ? (
        <RoomRegit>
        <div className="d-flex-column">
            <form onSubmit={handleSubmit} className="room d-flex-column">
                <h2>Nuevo Huésped</h2>
                <div className="d-flex">
                    <div className="input-room sm-input">
                        <label className="mdc-label"><small>Nombre de la Mascota</small></label>
                        <label className="mdc-text-field mdc-text-field--filled mdc-text-field">
                        <input className="mdc-text-field__input" type="text" value={newRoom.petname} onChange={handleChange}  name="petname" required/>
                        </label>
                    </div>
                    <div className="input-room sm-input">
                        <label className="mdc-label"><small>Raza</small></label>
                        <label className="mdc-text-field mdc-text-field--filled mdc-text-field">
                        <input className="mdc-text-field__input" type="text" value={newRoom.raza} onChange={handleChange} name="raza" required/>
                        </label>
                    </div>
                    
                </div>
                <div>
                <label className="mdc-label"><small>Fechas de reservación</small></label>
                    <Calendar
                        onChange={setDateValue}
                        value={dateValue}
                        selectRange={true}
                        activeStartDate={new Date()}
                        name="reserva" />
                </div>
                <div className="input-room sm-input">
                    <label className="mdc-label"><small>Indicaciones</small></label>
                    <label className="mdc-text-field mdc-text-field--filled mdc-text-field">
                    <input className="mdc-text-field__input" type="text" onChange={handleChange} name="indicaciones" required/>
                    </label>
                </div>
                <button type="submit" id="selected-switch" className={toggleClass()+" mdc-switch"}>
                <div className="mdc-switch__track"></div>
                <div className="mdc-switch__handle-track">
                    <div className="mdc-switch__handle">
                    <div className="mdc-switch__shadow">
                        <div className="mdc-elevation-overlay"></div>
                    </div>
                    <div className="mdc-switch__ripple"></div>
                    <div className="mdc-switch__icons">
                        <svg className="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
                        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
                        </svg>
                        <svg className="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
                        <path d="M20 13H4v-2h16v2z" />
                        </svg>
                    </div>
                    </div>
                </div>
                </button>
                <label for="selected-switch">Reservado/Disponible</label>
                </form>
                <div className="d-flex">
                <div className="free"></div>
                <p>Room: {roomID}</p>
            </div> 
        </div>
        </RoomRegit>
    ) :
    (<div className="d-flex-column">
        <div className="room d-flex-column">
            <div className="pet-pic-box">
                <img alt="pet" src={petroompic} className="pet-pic-room"/>

            </div>
        
        <button onClick={()=>{setRegister(!register)}} class="mdc-button mdc-button--raised mdc-button--leading">
            <span class="mdc-button__ripple"></span>
            <i class="material-icons mdc-button__icon" aria-hidden="true">pets</i>
            <span class="mdc-button__label">Nuevo Huésped</span>
        </button>

        </div>
        <div className="d-flex">
        <div className="free"></div>
        <p>Room: {roomID}</p>
    </div>
    
    
   
    </div>)

    let taken =  (
        <div className="d-flex-column">
            <div className="room d-flex-column">
            <div className="pet-pic-box">
                <img alt="pet" src={blueheeler} className="pet-pic-room"/>
            </div>
            <div className="d-flex">
                <span className="material-icons">pets</span>
                <p>{room.petname}</p>
            </div>
            <div className="d-flex">
                <p><small>{room.raza}</small></p>
            </div>
            <div className="d-flex">
                <span className="material-icons">visibility</span>
                <p><small>{room.indicaciones}</small></p>
            </div>
            <div className="d-flex">
                <span className="material-icons">date_range</span>

                <p><small>{makeReserva()}</small></p>
            </div>
            <button id="selected-switch" className={toggleClass()+" mdc-switch"} type="button" role="switch" aria-checked="true" onClick={toggleSw}>
            <div className="mdc-switch__track"></div>
            <div className="mdc-switch__handle-track">
                <div className="mdc-switch__handle">
                <div className="mdc-switch__shadow">
                    <div className="mdc-elevation-overlay"></div>
                </div>
                <div className="mdc-switch__ripple"></div>
                <div className="mdc-switch__icons">
                    <svg className="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
                    <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
                    </svg>
                    <svg className="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
                    <path d="M20 13H4v-2h16v2z" />
                    </svg>
                </div>
                </div>
            </div>
            </button>
            <label for="selected-switch">Reservado/Disponible</label>
            </div>
            <div className="d-flex">
            <div className="taken"></div>
            <p>Room: {roomID}</p>
            </div>
            
           
        </div>
        
        )

    return(showroom())
   
}

export default Room;