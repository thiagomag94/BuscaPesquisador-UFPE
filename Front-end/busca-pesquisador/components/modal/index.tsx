import { helpModalType } from "./helpModalType"
import CloseIcon from '@mui/icons-material/Close';




export const HelpModal = (props:helpModalType) => {

    const {opacityBlur, setOpacityBlur, isClickedInfo, setClickedInfo} = props

    const handleCloseInfo = () => {
        setOpacityBlur('')
        setClickedInfo(false)
    }

    return(
        <main className= { `text-stone-800  ${opacityBlur}  flex flex-col w-full min-h-screen justify-center absolute z-50 animate-fade `}>
            <CloseIcon fontSize="medium" className="text-white flex flex-col justify-center absolute top-12 right-12 cursor-pointer" onClick={handleCloseInfo}/>
            <div className="w-3/6 flex flex-col self-center p-6 drop-shadow-xl 2xl:w-2/6">

                
                <ul className="2xl:pt-5 2xl:pb-16  3xl:py-24 leading-none">
                    <h1 className="text-white  font-bold text-center text-2xl mb-10 ">Precisa de Ajuda?</h1>
                    <h4 className="text-slate-100  font-semibold text-center mb-10 ">Algumas instruções que podem ser úteis ao colar os dados:</h4>
                    <li className="bg-neutral-700 rounded-lg text-white p-6 mb-4">Inserir nome completo do Pesquisador</li>
                    
                    <li className="bg-neutral-700 rounded-lg text-white p-6 mb-4">Verificar se há áspas, vírgula ou qualquer outro sinal de pontuação</li>
                    <li className="bg-neutral-700 rounded-lg text-white  p-6 mb-4">Em caso de lista de nomes, inserir um nome abaixo do outro</li>
                </ul>
            </div>
        </main>
    )





}