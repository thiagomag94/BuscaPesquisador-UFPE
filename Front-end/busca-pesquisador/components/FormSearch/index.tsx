import { FormSearchType } from "./FormSearchType"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { InputSearch } from "../InputSearch";


export const FormSearch = (props:FormSearchType) =>{
    const {label, placeholder, submit} = props
  

  
    const handleSubmit = () =>{

    }
    return(
        <>
        <form  className="flex flex-col w-11/12 h-full py-6 px-4 border border-white bg-transparent backdrop-blur-md rounded-lg backdrop-filter  lg:w-2/6" >
            <label className="text-white text-2xl mb-4 border-b-2 py-2">{label}</label>
            <div className="flex flex-col justify-around items-center">
                    <InputSearch label={label} placeholder={placeholder}/>
                    
                    <button type="button" className="bg-red-500 rounded-lg  py-2 text-white w-2/6 mt-4" onClick={submit}>Buscar</button>
            </div>
        </form>
        </>
        
    )
}