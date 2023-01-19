import Image from "next/image"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useState } from "react";



export const Navbar = () =>{
    const [isClicked, setClicked] = useState<Boolean>(false)
    const [isVisible, setVisible] = useState<String>('')
    const handleButtonNav = () =>{
        isClicked === false && setClicked(true)
        isClicked === false && setVisible('hidden')

        isClicked === true && setClicked(false)
        isClicked === true && setVisible('')
 
    }

    return(
        <nav className="w-full h-fit flex flex-col items-center bg-transparent text-white transition-all duration-300  hover:ease-in lg:flex-row overflow-hidden">
            <header className="w-full flex justify-between items-center h-full p-2">
                <Image src={'/images/propesqi.png'} alt="logo propesqi" width={100} height={50} className="ml-4"/>
                <button className={`font-bold text-lg mr-4 ${isVisible}`} onClick={handleButtonNav}><MenuIcon fontSize="large"/></button>
            </header>
            {isClicked === true && 
            <div className="flex items-center bg-red-500  text-white shadow-lg w-full lg:w-2/6 lg:absolute lg:right-0 lg:top-0 lg:bg-red-500/70 lg:animate-fade lg:h-fit lg:backdrop-blur-lg ">
                <div className="lg:w-4 lg:border-t-[3.75rem] lg:border-t-red-500/70 lg:border-l-[3.5rem] lg:border-l-transparent  lg:-ml-14  lg:backdrop-blur-sm">
                   
                </div>
                <ul className="w-full flex flex-col justify-center items-center lg:flex-row lg:animate-fade ">
                    <li className="border-b border-red-400 py-4 h-full text-center  w-full cursor-pointer hover:bg-red-400 lg:hover:bg-red-500 lg:border-red-500"><a href="/"><HomeIcon className="mr-2"/>Home</a></li>
                    <li className="border-b border-red-400 py-4 text-center w-full  hover:bg-red-400 lg:hover:bg-red-500 lg:border-red-500"><a href="/"><SearchIcon className="mr-2"/>Buscar</a></li>
                    <li className="border-b border-red-400 py-4 text-center w-full  hover:bg-red-400 lg:hover:bg-red-500 lg:border-red-500" ><a href="/"><ContactPageIcon className="mr-2"/>Sobre</a></li>
                </ul>
                
            </div>}
        </nav>
    )
}