import axios from "axios";


export const RequestAPI = async(listnames:string[]) => {

     const data = {
          professores: listnames
     }

     
    
     const response =  await axios.post(`http://localhost:3004/professor`, data
     )
    console.log(response.data.professores)
     return response.data.professores
}