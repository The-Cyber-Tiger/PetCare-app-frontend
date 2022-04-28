import DATA from "../MOCK_DATA.json";

function getPacientes() {
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          const myData= require('../MOCK_DATA.json')
           console.log(myData)
           resolve(DATA)}
       ,Math.random()*1000)
   })
}

export default getPacientes;