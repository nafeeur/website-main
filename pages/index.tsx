import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { BsMoonStarsFill, BsCodeSlash } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiTwotoneMail } from 'react-icons/ai'
import naf from '../public/pfp.png'
import nasa from '../public/NASA_logo.svg'
import next from 'next'
import ds from '../public/ds.png'
import tip from '../public/tip_calc.gif'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nafeeur Rahman</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white px-10 md:px-18 lg:px-35 font-mono bg-repeat w-full h-full heropattern-floatingcogs-nord-gray '>
        <section className='min-h-screen'>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='lg:text-2xl md:text-xl text-nord-black-3 text-lg' >hallo welt...</h1>
            <ul className='flex items-center'>
              <li>
                <BsMoonStarsFill className='animate-bounce cursor-pointer text-2xl text-nord-black-3' />
              </li>
 
              <li>
                <a className="  text-white bg-gradient-to-t from-frost-blue to-frost-light-blue px-4 py-2 rounded-lg ml-8" href='https://drive.google.com/file/d/1HVcJE1SsKEOe4iSMpXvj3Tv0Dv7krM_l/view?usp=sharing'>Resume</a>
              </li>

            </ul>
          </nav>
  <div className='justify-center' >

<Image alt='pfp'  src={naf} className="hover:animate-spin mx-auto w-60 h-60 rounded-full shadow-lg " title="Profile Pic was generated using DALL-E 2 AI"/>

</div>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 font-bold bg-gradient-to-r bg-clip-text  text-transparent 
            from-teal-500 via-purple-500 to-pink-500
            animate-text md:text-6xl'>Nafeeur Rahman</h2>
            <h2 className='text-gray-800 text-2xl py-2 md:text-3xl'>CS and Philosophy Student <span className="text-purp">@</span> CUNY</h2>
            <p className='text-gray-600 text-md py-5 md:text-xl leading-8 max-w-lg mx-auto'>Aspiring Software Engineer and Tech Policy advocate. Interested in pursuing career in Civic-Tech and Non-Profit.</p>
          </div>


          <div className='cursor-pointer text-6xl text-nord-black-2 flex justify-center gap-16 py-3'>
            <AiFillGithub className="hover:text-github"  />
            <AiTwotoneMail className="hover:text-email" />
            <AiFillLinkedin className="hover:text-linkedin"  />
           
          </div>
        </section>


        <section>
          <h3 className='text-3xl py-10 text-center '> Personal Projects</h3>
          <p className='text-gray-600 text-center text-md py-5 md:text-xl leading-8 max-w-lg mx-auto'>Throughout the years I had the opportunity to work on various projects different technologies frameworks and technologues. Here are examples.</p>
        
      

  <div className= "text-center mx-auto rounded-xl shadow-lg backdrop-blur-sm max-w-2xl max-h-2xl min-2w-xl min-h-2xl my-10">
  <iframe className='mx-auto w-full aspect-video' src="https://www.youtube.com/embed/nBMbrkYi7sc" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
    <div className="p-6">
      <h5 className=" text-xl font-bold mb-2 text-github">Astronot Bot</h5>
      <p className="text-gray-700 text-base mb-4">
      Utilizes several of NASA's and Wolfram’s APIs to responds to number of commands to return space-related facts, pictures, solves various
computational and mathematical problems in Discord Chat.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">&lt;/&gt; CODE</button>
    </div>
  </div>

 
  <div className= "text-center mx-auto rounded-xl shadow-lg backdrop-blur-sm max-w-2xl max-h-2xl min-2w-xl min-h-2xl my-10">
  <iframe className='mx-auto p-2 w-full aspect-video' src="https://www.youtube.com/embed/_D6587-r6NA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
    <div className="p-6">
      <h5 className=" text-xl font-bold mb-2 text-email">Texiri</h5>
      <p className="text-gray-700 text-base mb-4">
      Utilizes Twilio-API to respond to various user queries, solve computational problems, translate texts and provide users with latest news all
through text messages.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">&lt;/&gt; CODE</button>
    </div>
  </div>

 
  <div className= "text-center mx-auto rounded-xl shadow-lg backdrop-blur-sm max-w-2xl max-h-2xl min-2w-xl min-h-2xl my-10">

  <iframe className='mx-auto p-2 w-full aspect-video' src="https://www.youtube.com/embed/fA5tc_HBS94" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
    <div className="p-6">
      <h5 className=" text-xl font-bold mb-2 text-linkedin">Newscord Bot</h5>
      <p className="text-gray-700 text-base mb-4">
      A discord bot that employs News API to provide top news of the day from various categories in addition to a summary of the article using NLP and AI.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> &lt;/&gt; CODE </button>
    </div>
  </div>




        </section>
        
        <section>
        <h3 className='text-3xl py-10 text-center'> More Projects</h3>
        
<div className='mx-auto my-10 backdrop-blur-sm shadow-lg rounded-xl px-10 py-10 max-h-sm max-w-sm text-center'>
  <p>ferf</p>
  <div><Image  src={tip} alt="" className='rounded-3xl shadow-lg h-90 w-50'/></div>
  <p className="text-gray-700 text-base mt-10">
      A discord bot that employs News API to provide top news of the day from various categories in addition to a summary of the article using NLP and AI.
      </p>
      <button type="button" className="mt-10 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> &lt;/&gt; CODE </button>
  </div>
          
        </section>
     
       
      </main>
    </>
  )
}
