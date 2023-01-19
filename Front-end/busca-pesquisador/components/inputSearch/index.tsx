import { InputSearchType } from "./InputSearchType"

export const InputSearch = (props:InputSearchType) =>{
    const {label, placeholder} = props

    return(
        <>
           <textarea id="main-input" className = "mt-2 mb-4 w-full h-40 rounded-md p-2 outline-none border-1 ring-1 ring-white bg-transparent text-white placeholder-red-200" placeholder={placeholder}></textarea>
        </>
        
    )
}