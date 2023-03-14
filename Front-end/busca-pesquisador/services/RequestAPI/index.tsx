import axios from "axios";


export const RequestAPI = async(listnames:string[]) => {

     const data = {
          professores: listnames
     }

     
    
     const response =  await axios.post(`https://backend-sistema-dc1x4tgvs-thiagomag94.vercel.app/professor`, data
     )
    
     return response.data.professores
}