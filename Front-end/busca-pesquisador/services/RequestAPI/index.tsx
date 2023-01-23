import axios from "axios";


export const RequestAPI = async(nome:string) => {
     const res =  await axios.get(`http://localhost:3004/professor`, {
          params: {
               nome: nome
          }
     })
    
     return res.data.professor
}