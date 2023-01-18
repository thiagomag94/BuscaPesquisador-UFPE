import { FormSearchType } from "./FormSearchType"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { InputSearch } from "../inputSearch";
import { useEffect, useState } from "react";

export const FormSearch = (props:FormSearchType) =>{
    const {label, placeholder} = props
    const [numberInput, setnumberInput] = useState<number>(1)
    const [inputArrays, SetInputArrays] = useState<number[]>([])

    useEffect(()=>{
        console.log(numberInput)
        console.log(inputArrays)
    }, [])
    const handleAddInput = () => {
       
       try{
        setnumberInput(prevNumber => prevNumber+1)
        
       }
       catch(err){
        
            console.log(err)
        
       } finally{
            console.log("num clicks",numberInput)
            console.log("array", inputArrays)

            SetInputArrays([...inputArrays, numberInput])
       }
       

    }

    return(
        <>
        <form action=" " method="get" className="flex flex-col w-11/12 h-fit py-6 px-4 bg-amber-500/70 backdrop-blur-sm  lg:w-2/6" >
            <label className="text-white mb-4 border-b-2 py-2">{label}</label>
            <div className="flex flex-col justify-around items-center">
                    <InputSearch label={label} placeholder={placeholder}/>
                    {inputArrays.map(input=><InputSearch label={label} placeholder={placeholder}/>)}
                    <p className="text-white font-normal ">Adicionar novo pesquisador</p>
                    <AddCircleIcon fontSize="large" className="ml-4 text-white cursor-pointer mt-2 " onClick={handleAddInput}></AddCircleIcon>
                    <button className="bg-red-500 rounded-lg  py-2 text-white w-2/6 mt-4">Buscar</button>
            </div>
        </form>
        </>
        
    )
}