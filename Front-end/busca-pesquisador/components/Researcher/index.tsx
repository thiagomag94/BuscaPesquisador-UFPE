import {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BuscaNomeType } from '../../pages/BuscaNome/BuscaNomeType';
import { AnyARecord } from 'dns';


export const Researcher = (props:any) => {
    const [width, setWidth] = useState('w-0 h-0 hidden')
    const [isClicked, setClicked]= useState(true)
    const {nome} = props
    

    

    const handleResult = () => {
        
        isClicked === false && setWidth('hidden')
        isClicked === false && setClicked(true)
        isClicked === true && setWidth('')
        isClicked === true && setClicked(false)
        

    }
    return (
        <div className="bg-neutral-800/30 backdrop-blur-lg backdrop-filter text-white w-full h-fit   py-2 px-6 rounded-top-md mb-2 shadow-lg">
            <header className="flex justify-between items-center text-white p-2 text-lg lg:text-xl ">
                <h1 className=' '>{nome}</h1>
                {isClicked === true && <KeyboardArrowDownIcon fontSize="large" className="text-white cursor-pointer" onClick={handleResult}/>}
                {isClicked === false && <KeyboardArrowUpIcon fontSize="large" className="text-white cursor-pointer" onClick={handleResult}/>}
            </header>
            <ul className={`flex flex-col ${width} gap gap-2  text-slate-400 transition-all ease-in-out duration-75 `}>
                <li className='border border-b-white w-1/6 ml-2'></li>
                <li className="text-sm  p-2"><p className='font-bold text-slate-200'>E-mail institucional: </p>thiago.borges@ufpe.br </li>
                <li className="text-sm  p-2"><p className='font-bold text-slate-200'>Departamento:</p> Departamento de Física - DF</li>
                <li className="text-sm p-2"><p className='font-bold text-slate-200'>Centro: </p> Centro de Ciência Exatas e da Natureza - CCEN </li>
            </ul>
        </div>
    )
}
