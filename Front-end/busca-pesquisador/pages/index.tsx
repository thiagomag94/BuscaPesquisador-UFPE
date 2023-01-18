import Head from 'next/head'
import { FormSearch } from '../components/FormSearch'
import { Navbar } from '../components/Navbar'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`w-full min-h-screen flex flex-col bg-cover bg-center bg-imagem  `}>
        <Navbar/>
        <div className='lg:w-4/5 flex flex-col ml-64 mt-64'>
          <h1 className= "text-white text-5xl mb-4">SisPesq</h1>
          <p className="text-amber-500 text-3xl mb-4">SISTEMA DE CONSULTA RÁPIDA POR PESQUISADORES DA UFPE</p>
          <p className="text-md text-white">Como você deseja começar?</p>
          <div id="button-container" className='flex mt-4 '>
            <button type="button" className="text-white bg-amber-500/70 w-1/6 mr-4 py-4 shadow-lg backdrop-blur-sm">Buscar por nome</button>
            <button type="button" className="text-white bg-amber-500/70 w-1/6 py-4 shadow-lg backdrop-blur-sm">Lista de pesquisadores</button>
          </div>

        </div>
        
       
        
      </main>
    </>
  )
}
