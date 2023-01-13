import { InputSearchType } from "./InputSearchType"

export const InputSearch = (props:InputSearchType) =>{
    const {label, placeholder} = props

    return(
        <>
            <input type="search" id="main-input" className = "mb-2 w-full rounded-md p-2 outline-none ring-2" placeholder={placeholder}></input>
        </>
        
    )
}