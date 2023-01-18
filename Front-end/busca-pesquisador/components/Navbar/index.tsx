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
        <nav className="w-full h-fit flex flex-col items-center bg-transparent text-white transition-all duration-300 shadow-md hover:ease-in lg:flex-row">
            <header className="w-full flex justify-between items-center h-full p-2">
                <Image src={'/images/propesqi.png'} alt="logo propesqi" width={100} height={50} className="ml-4"/>
                <button className="font-bold text-lg mr-4" onClick={handleButtonNav}><MenuIcon fontSize="large"/></button>
            </header>
            {isClicked === true && 
            <div className="flex items-center w-full bg-red-500 shadow-lg lg:bg-transparent w-2/6 lg:absolute lg:right-40">
                <ul className="w-full flex flex-col justify-center items-center lg:flex-row ">
                    <li className="border-b border-red-400 py-2 h-full text-center w-full cursor-pointer hover:bg-red-400 lg:hover:bg-amber-500/70 lg:border-amber-500"><a href="/">Home</a></li>
                    <li className="border-b border-red-400 py-2 text-center w-full  hover:bg-red-400 lg:hover:bg-amber-500/70 lg:border-amber-500"><a href="/">Buscar Pesquisador</a></li>
                    <li className="border-b border-red-400 py-2 text-center w-full  hover:bg-red-400 lg:hover:bg-amber-500/70 lg:border-amber-500" ><a href="/">Sobre</a></li>
                </ul>
            </div>}
        </nav>
    )
}