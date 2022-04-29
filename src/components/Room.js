import "../styles.css"
import blueheeler from "../img/blueheeler.jpg"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import RoomRegit from "./RoomRegit";
import FreeRoom from "./FreeRoom";
import { updateRoom } from "../API/api-hotel";

const Room = ({room, switcher, setSwitcher}) =>{

    const [register, setRegister] = useState()//1
    const [newRoom, setNewRoom] = useState({})//2
    const [dateValue, setDateValue] = useState([new Date(), new Date()])//2
    const [ booking, setBooking ] = useState({})
    
    const [myDate, setMyDate] = useState(dateValue);
    const locale = 'es-ES'; 
   
    let defaultRoom = {
        numero: room.numero,
        huesped: "",
        raza: "",
        fecha: [],
        indicaciones: "",
        status: true
    }
  
    useEffect(() => {
       setMyDate(dateValue)
    }, [dateValue])

    let showroom = function(){
        if(room.status){
            return free
        }else{return taken}
    }
    
    const handleChange = (e) =>{
       
        setNewRoom({...newRoom,[e.target.name] : e.target.value})
        setBooking({...newRoom, fecha: makeReserva([dateValue]), status: false})
        

    }

    const handleSubmit = async (e) => {
       e.preventDefault()

        try {
            let token = localStorage.getItem('token')
            await updateRoom(token, room._id, booking)
            btnState()
        } catch (error) {
            console.error(error)
        }

        
    //    await createBooking(booking)

    }

    const leaveRoom = async () =>{
        try {
            let token = localStorage.getItem('token')
            await updateRoom(token, room._id, defaultRoom)
            
                btnState()
            

        } catch (error) {
            console.error(error)
        }

    }

    function makeReserva(fecha){

        

        let formatDay = (date) => {
            return (new Intl.DateTimeFormat(
              locale, 
              {
                day: "2-digit",
                year: "numeric", 
                month: "2-digit",
              }).format(date))
            }

            let x = formatDay(fecha[0][0])
            let y = formatDay(fecha[0][1])


            return ([x + " - " + y])
    }
    
    function btnState(){
        setSwitcher(!switcher)
    }
    
    let free = register ? (
        <RoomRegit>
        <div className="d-flex-column">
            <form className="room d-flex-column">
                <h2>Nuevo Huésped</h2>
                <div className="d-flex">
                    <div className="input-room sm-input">
                        <label className="mdc-label"><small>Nombre de la Mascota</small></label>
                        <label className="mdc-text-field mdc-text-field--filled mdc-text-field">
                        <input className="mdc-text-field__input" type="text" value={newRoom.huesped} onChange={handleChange}  name="huesped" required/>
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
                        name="fecha" />
                </div>
                <div className="input-room sm-input">
                    <label className="mdc-label"><small>Indicaciones</small></label>
                    <label className="mdc-text-field mdc-text-field--filled mdc-text-field">
                    <input className="mdc-text-field__input" type="text" onChange={handleChange} name="indicaciones" required/>
                    </label>
                </div>
                <button onClick={handleSubmit} class="mdc-button mdc-button--raised mdc-button--leading">
                    <i class="material-icons mdc-button__icon" aria-hidden="true">room_service</i>
                    <span class="mdc-button__label">Reservar</span>
                </button>
                </form>
                <div className="d-flex">
                <div className="free"></div>
                <p>Room: {room.numero}</p>
            </div> 
        </div>
        </RoomRegit>
    ) :
    (<FreeRoom roomNumber={room.numero} setRegister={setRegister} register={register}/>)

    let taken =  (
        <div className="d-flex-column">
            <div className="room d-flex-column">
            <div className="pet-pic-box d-flex">
                <img alt="pet" src={blueheeler} className="pet-pic-room"/>
                <div className="d-flex-column">
                <div className="d-flex">
                        <span className="material-icons">pets</span>
                        <p>{room.huesped}</p>
                    </div>
                    <div className="d-flex">
                        <p><small>{room.raza}</small></p>
                    </div>
                </div>
                   
            </div>
            
            <div className="d-flex">
                <span className="material-icons">visibility</span>
                <p><small>{room.indicaciones}</small></p>
            </div>
            <div className="d-flex">
                <span className="material-icons">date_range</span>

                <p><small>{room.fecha}</small></p>
            </div>
            <Link to='/hotel' onClick={leaveRoom}>
            <button class="mdc-button mdc-button--raised mdc-button--leading">
            <i class="material-icons mdc-button__icon" aria-hidden="true">checkroom</i>
            <span class="mdc-button__label">Desocupar</span>
        </button>
            </Link>
        
            </div>
            <div className="d-flex">
            <div className="taken"></div>
            <p>Room: {room.numero}</p>
            </div>
            
           
        </div>
        
        )

    return(showroom())
   
}

export default Room;