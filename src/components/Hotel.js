import { useEffect, useState } from "react"
import { getAllRooms } from "../API/api-hotel"
import "../styles.css";
import Room from "./Room";

function Hotel(){

    const[rooms, setRooms] = useState([])
    const [ switcher, setSwitcher] = useState(true)

    useEffect(()=>{

        async function getHotelInfo(){

            try {
                let token = localStorage.getItem('token')
                let res = await getAllRooms(token)
                let response = res.data
                setRooms(response)
            } catch (error) {
                console.error(error)
            }
        }
        getHotelInfo()

        return ()=>{
            setRooms([])
        }
    },[switcher])

    return(
        <div className="main-card">
            <h1>Hotel</h1>
            <div className="pets-box">
            
            {rooms.map((room)=>{
                return <Room key={room._id} room={room} switcher={switcher} setSwitcher={setSwitcher} />
            })}
            

            </div>
            
        </div>
            
    )
}

export default Hotel