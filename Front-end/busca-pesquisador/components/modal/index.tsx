import { infoModalType } from "./InfoModalType"
import CloseIcon from '@mui/icons-material/Close';




export const InfoModal = (props:infoModalType) => {

    const {opacityBlur, setOpacityBlur, isClickedInfo, setClickedInfo} = props

    const handleCloseInfo = () => {
        setOpacityBlur('')
        setClickedInfo(false)
    }

    return(
        <main className= { `text-stone-800  ${opacityBlur}  flex flex-col w-full min-h-screen justify-center absolute z-50 animate-fade `}>
            <CloseIcon fontSize="medium" className="text-white flex flex-col justify-center absolute top-12 right-12 cursor-pointer" onClick={handleCloseInfo}/>
            <div className="bg-red-100 rounded-lg w-3/6 flex flex-col self-center p-6 drop-shadow-xl 2xl:w-2/6">

                
                <ul className=" p-24 bg-red-100 2xl:py-24 leading-none">
                    <h1 className="text-red-600  font-bold self-center mb-6 ">Informações</h1>
                    <li className="bg-red-200 rounded-lg  p-4 mb-4">Inserir nome completo</li>
                    
                    <li className="bg-red-200 rounded-lg  p-4 mb-4">Verificar se há áspas, vírgula ou qualquer outro sinal de pontuação</li>
                    <li className="bg-red-200 rounded-lg  p-4 mb-4">Em caso de lista de nomes (mais de um), inserir um nome abaixo do outro</li>
                </ul>
            </div>
        </main>
    )





}