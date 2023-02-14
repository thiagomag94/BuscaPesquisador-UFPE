import Head from 'next/head'
import { FormSearch } from '../components/FormSearch'
import { Navbar } from '../components/Navbar'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
  
      <main className={`w-full font-Roboto min-h-screen flex flex-col bg-cover bg-center bg-imagem lg:overflow-x-hidden debug-screens `}>
        <Navbar/>
        <div className='ml-10 lg:w-4/5 lg:flex lg:flex-col lg:ml-64 lg:mt-72 lg:animate-fade'>
          <h1 className= "text-white lg:text-5xl mb-2">SisPesq</h1>
          <p className="text-red-500 lg:text-3xl mb-4 xl:mb-12">SISTEMA DE CONSULTA DE PESQUISADORES DA UFPE</p>
          <p className="text-md text-white">Como você deseja começar?</p>
          <div id="button-container" className='flex mt-4 gap-16 '>
            <Link href={{pathname: 'BuscaNome'}}>
              <button type="button" className="text-white  bg-red-500/70 w-full mr-4 p-4 drop-shadow-lg backdrop-blur-sm rounded-md outline-none lg:hover:bg-red-600">Buscar por nome</button>
            </Link>
            <Link href={{pathname: 'BuscaNome'}}>
              <button type="button" className="text-white  bg-red-500/70 w-full  mr-4 p-4 drop-shadow-lg backdrop-blur-sm rounded-md outline-none  lg:hover:bg-red-600">Lista de pesquisadores</button>
            </Link>
            
          </div>

        </div>
        
       
        
      </main>
    </>
  )
}
