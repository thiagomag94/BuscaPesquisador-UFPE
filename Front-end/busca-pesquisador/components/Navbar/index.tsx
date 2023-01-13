import Image from "next/image"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


export const Navbar = () =>{
    const [isClicked, setClicked] = useState<Boolean>(false)
    const handleButtonNav = () =>{
        isClicked === false && setClicked(true)
        isClicked === true && setClicked(false)
    }
    return(
        <nav className="w-full h-fit flex flex-col items-center bg-red-700 text-white   border-b-4 border-amber-500 transition-transform ">
            <header className="w-full flex justify-between items-center h-full p-2">
                <Image src={'/images/propesqi.png'} alt="logo propesqi" width={100} height={50} className="ml-4"/>
                <button className="font-bold text-lg mr-4" onClick={handleButtonNav}><MenuIcon fontSize="large"/></button>
            </header>
            {isClicked === true && 
            <div className="flex items-center w-full bg-amber-500 py-6 ">
                <ul className="w-full flex flex-col justify-center items-center gap-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Buscar Pesquisador</a></li>
                    <li><a href="/">Sobre</a></li>
                </ul>
            </div>}
        </nav>
    )
}