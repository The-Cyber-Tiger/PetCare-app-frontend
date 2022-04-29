import "../styles.css";
import { Link } from "react-router-dom"
import {useState,useEffect} from 'react'
import iDate from "./Date";


const Header = ({navSearch}) => {
      
    const [date,setDate] = useState(iDate());
    const [input, setInput] = useState("")

    useEffect(()=>{
       
    let secTimer= setInterval(() => {
            setDate(iDate())
        }, 1000);
        return () => clearInterval(secTimer)
    },[])

    const handleSearch = (e) =>{
        setInput(e)
        navSearch(input)
        
        
    }
    return(
        <div className="header">
            <Link to="/home" className="material-icons">
                home
            </Link>
            <div className="searchbar">

                 <Link to="/pacientes" class="s-btn material-icons">
                 search 

                 </Link>
            
               
                <input value={input} onChange={e=>{handleSearch(e.target.value)}} type="text" className="mdc-text-field  border-r" placeholder="Buscar Mascota UUID"></input>
            </div>

            <div className="date">
                <p>{date}</p>
            </div>
            
        </div>
    )
    
    
}

export default Header;