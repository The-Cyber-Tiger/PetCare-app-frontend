import "../styles.css"
import { useEffect, useState } from "react"
import { getAllRooms } from "../API/api-hotel"
import WidgetRoom from "./WidgetRoom"


const WidgetHotel = () =>{

    // Este widget obtiene el estado y muestra la informacion de los dormitorios del Hotel.
    
    const[rooms, setRooms] = useState([])

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
    },[])

    return (
        <div className="h-hotel">
            <h2>Hotel</h2>
                <div className="h-box">
                    {rooms.map((room)=>{
                        return(  <WidgetRoom key={room._id} nombre={room.huesped} numero={room.numero} status={room.status} />)
                    })}
                </div>
        </div>
    )
}

export default WidgetHotel