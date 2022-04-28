import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import "./styles.css"
import { useState, useEffect } from "react"

export default function App() {

let [auth, setAuth] = useState(false)

useEffect(()=>{
  function getCredentials(){
    let token = localStorage.getItem('token')
    if(token){
      setAuth(true)
    }else{
      setAuth(false)
    }
  }
  getCredentials()
},[auth])
  

  
 return auth ? <Dashboard/> :  <Login auth={auth} setAuth={setAuth} /> 

  
}
