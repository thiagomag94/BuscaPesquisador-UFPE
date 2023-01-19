import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Researcher = () => {
    return (
        <div className="bg-neutral-800/30 backdrop-blur-xs backdrop-filter text-white w-full py-2 px-2 rounded-top-md  drop-shadow-lg">
            <li className="flex justify-between text-white text-xl shadow-lg border border-white p-2">Thiago Borges Miranda <KeyboardArrowDownIcon fontSize="large" className="text-white cursor-pointer"/></li>
            <ul className="flex flex-col gap gap-2 border border-white hidden">
                <li className="text-sm  p-2">E-mail institucional: thiago.borges@ufpe.br </li>
                <li className="text-sm  p-2">Departamento: Departamento de Física - DF</li>
                <li className="text-sm p-2">Centro: Centro de Ciência Exatas e da Natureza - CCEN </li>
            </ul>
        </div>
    )
}
