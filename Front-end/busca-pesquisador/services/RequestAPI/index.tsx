import axios from "axios";


export const RequestAPI = async(nomes:string[]) => {
    nomes.map(nome=>{const res = await axios.get(`http://localhost:3004/professor?nome=${nome}`)} )
   
    
}