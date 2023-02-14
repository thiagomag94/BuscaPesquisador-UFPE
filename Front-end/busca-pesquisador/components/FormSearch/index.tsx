import { FormSearchType } from "./FormSearchType"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { InputSearch } from "../inputSearch";
import { RequestAPI } from "../../services/RequestAPI";
import { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import { InfoModal } from "../modal";




export const FormSearch = (props:FormSearchType) =>{
    const {label, placeholder, isClicked, setClicked, ListResearcher, setListResearcher, error, setError, isClickedInfo, setClickedInfo, opacity, setOpacity} = props
  
    const [nomes, setNomes] = useState('')
    const [obj, setObj] = useState<any>([])
    
    const handleSubmit = (event:any) =>{
        event.preventDefault
        isClicked === false && setClicked(true)
        isClicked === false && console.log(isClicked)
        isClicked === true && console.log(isClicked)
        isClicked === true && setClicked(false)

        const newListSplited = nomes.split(/\r?\n/)
        
        RequestAPI(newListSplited)
        .then((res)=>{
            console.log("resposta", res)
            setListResearcher(res)

        })
        //newListSplited.map((professor:any) => setListResearcher([...ListResearcher, professor]))
        console.log("Esta é a lista com strings separadas", newListSplited)

        
   
    }

    const HandleClickInfo = () =>{
        isClickedInfo === false && setClickedInfo(true)
        isClickedInfo === false && console.log(isClicked)
        isClickedInfo === true && console.log(isClicked)
        isClickedInfo === true && setClickedInfo(false)
        setOpacity('backdrop-blur-lg backdrop-filter')
    }
        
    return(
        <>
        <form action="" method="POST" className="flex flex-col w-11/12 h-full py-6 px-4 border border-slate-700 bg-transparent backdrop-blur-lg rounded-lg backdrop-filter  lg:w-2/6 xl:p-8 3xl:mt-24"  onSubmit={handleSubmit}>
            <label className="text-white text-2xl mb-4 border-b py-2">{label}</label>
            <div className="flex flex-col justify-around items-center">
                    <InputSearch label={label} placeholder={placeholder} ListResearcher={ListResearcher} setListResearcher={setListResearcher} nomes = {nomes} setNomes = {setNomes}/>
                    <button type ="submit" className="bg-red-500 rounded-lg outline-none py-2 text-white w-2/6 mt-4" >Buscar</button>
            </div>  
            <InfoIcon className="text-white" onClick={HandleClickInfo}/>
        </form>
        
        </>
        
    )
}