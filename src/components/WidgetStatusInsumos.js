import "../styles.css";
import imgOk from '../img/check-green.png'
import imgAlert from '../img/alert-red.png'
import { getAllInsumos } from "../API/api-insumos"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const WidgetStatusInsumos = () =>{

    //Este Widget revisa que el status de todos los insumos se encuentre Ok, sino cambia a Rojo

    let [ insumos, setInsumos] = useState([])

    useEffect(()=>{

        const getData = async () =>{
            try {
                let token = localStorage.getItem('token')
                let res = await getAllInsumos(token)
                let response = res.data
                setInsumos(response[0])
                 

            } catch (error) {
                console.error(error)
            }

        }
        getData()
        
    },[])

   let extractStatusData = ()=>{
    let extracted = []
    let statusInsumos = []

    for (let i in insumos){
        if(typeof(insumos[i])=== 'object'){
            extracted.push(insumos[i][0])
        }
    }
    
     extracted.forEach(element => {
         statusInsumos.push(element.status)
     })
   
     return statusInsumos
   } 

   let statusAnalyzer = () =>{
   let statux = extractStatusData()
   
   function checker(i){
       return i === true
   }

   return statux.every(checker)

   }
   
    let status = statusAnalyzer()

    const alert = () => {
        return(
        <div className="h-pet">
            <Link to="/insumos">
                <img src={imgAlert} alt="alert"/>
                </Link>
                <p>Revisa el control de insumos</p>
            
        </div>
        )
    }
    const ok = () => {
        return(
        <div className="h-pet">
            <Link to="/insumos">
                <img src={imgOk} alt="ok"/>
            </Link>
                <p>El control de insumos se encuentra ok</p>
            
        </div>
        )
    }

    return (
        <div className="h-insumos">
                <h2>Insumos</h2>
                    <div className="h-box">
                        { status ? ok() : alert() }
                    </div>
                       
        </div>
    )
}

export default WidgetStatusInsumos