import { FormSearchType } from "./FormSearchType"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { InputSearch } from "../InputSearch";
import { RequestAPI } from "../../services/RequestAPI";
import { useState } from "react";



export const FormSearch = (props:FormSearchType) =>{
    const {label, placeholder, isClicked, setClicked, ListResearcher, setListResearcher, error, setError} = props
  
    const [nomes, setNomes] = useState('')
    const [NamesFound, setNamesFound] = useState([])
    
    const handleSubmit = () =>{
        
        isClicked === false && setClicked(true)
        isClicked === false && console.log(isClicked)
        isClicked === true && console.log(isClicked)
        isClicked === true && setClicked(false)

        const newListSplited = nomes.split(/\r?\n/)
        
        
        //newListSplited.map((professor:any) => setListResearcher([...ListResearcher, professor]))
        console.log("Esta é a lista com strings separadas", newListSplited)
        newListSplited?.map((professor)=>{
            RequestAPI(professor)
        .then((res)=>{
            console.log('request success', res)
            return res
           
        }).then((res)=>{
            
            setListResearcher([...ListResearcher, res])
            console.log('Fim da requisição-------------')
            
        }).catch((err)=>{
                console.log(`Nome ${professor} não encontrado`)
                console.log('Erro', err)
                setError(err)
            }
        )
       
        }
    )
}
        
    return(
        <>
        <form method="post" className="flex flex-col w-11/12 h-full py-6 px-4 border border-white bg-transparent backdrop-blur-lg rounded-lg backdrop-filter  lg:w-2/6" >
            <label className="text-white text-2xl mb-4 border-b-2 py-2">{label}</label>
            <div className="flex flex-col justify-around items-center">
                    <InputSearch label={label} placeholder={placeholder} ListResearcher={ListResearcher} setListResearcher={setListResearcher} nomes = {nomes} setNomes = {setNomes}/>
                    
                    <button type = "button" className="bg-red-500 rounded-lg  py-2 text-white w-2/6 mt-4" onClick={handleSubmit}>Buscar</button>
            </div>
        </form>
        </>
        
    )
}