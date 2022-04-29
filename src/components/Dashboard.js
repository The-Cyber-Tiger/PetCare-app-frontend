import "../styles.css"
import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Header from "./Header"
import Sidebar from './Sidebar'
import Body from "./Body"

const Dashboard = () =>{
    const [navSearch, setnavSearch] = useState("")
    let [perfil, setPerfil] = useState({
      nombre: "Rodrigo Gibran",
      telefono: "456-789-1011",
      email: "rodrigo.gibran.dev@gmail.com"
  })

  useEffect(()=>{

  },[perfil])

    return (
        <div className="dashboard">
          <Router>
            <Switch>
            
              <Route path="/">
              <Redirect to="/home" />
              <div className="sidebar">
                <Sidebar perfil={perfil}/>
              </div>
              <div className="main">
                <div className="header">
                  <Header navSearch={setnavSearch}/>
                </div>
                <div className="body">
                  <Body perfil={perfil} setPerfil={setPerfil} inputValue={navSearch}/>
                </div>
              </div>
              </Route>
            
            </Switch>
          </Router>
        </div>
      )

}

export default Dashboard