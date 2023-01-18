import { InputSearchType } from "./InputSearchType"

export const InputSearch = (props:InputSearchType) =>{
    const {label, placeholder} = props

    return(
        <>
            <input type="search" id="main-input" className = "mt-2 mb-4 w-full rounded-md p-2 outline-none border-1 ring-1 ring-white bg-amber-600 text-white placeholder-red-200" placeholder={placeholder}></input>
        </>
        
    )
}