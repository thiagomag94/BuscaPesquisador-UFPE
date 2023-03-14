import { InputSearchType } from "./InputSearchType"

export const InputSearch = (props:InputSearchType) =>{
    const {label, placeholder, nomes, setNomes} = props

    const handleChange = (event:any) =>{

        const name = event.target.value
        setNomes(name)
        console.log(name)
        
    }

    return(
        <>
           <textarea id="main-input" className = "mt-2 mb-4 w-full h-40 rounded-md p-2 outline-none border-1 ring-1 ring-slate-500 bg-transparent text-white placeholder-red-200 2xl:p-4 2xl:h-64" placeholder={placeholder} onChange={handleChange}></textarea>
        </>
        
    )
}

export default InputSearch