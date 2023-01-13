import { FormSearchType } from "./FormSearchType"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { InputSearch } from "../InputSearch";
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
        <form action=" " method="get" className="absolute flex flex-col w-11/12 h-fit py-10 px-4 top-80 bg-amber-500 " >
            <label className="text-white mb-4">{label}</label>
            <div className="flex flex-col justify-around items-center">
                    <InputSearch label={label} placeholder={placeholder}/>
                    {inputArrays.map(input=><InputSearch label={label} placeholder={placeholder}/>)}
                    <AddCircleIcon className="ml-4 text-white cursor-pointer" onClick={handleAddInput}></AddCircleIcon>
            </div>
        </form>
        </>
        
    )
}