import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Parallax from '../pages/parallax'
import styles from '../styles/Home.module.css'
import { BsMoonStarsFill, BsCodeSlash } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiTwotoneMail } from 'react-icons/ai'
import { SiWolframmathematica, SiNasa, SiIos, SiTwilio, SiReact, SiJavascript, SiYelp, SiGooglemaps, SiCss3, SiTwitter, SiXcode, SiSwift, SiCocoapods, SiGoogletranslate, SiUnsplash, SiWikipedia, SiGooglemessages, SiOpenai } from 'react-icons/si'
import { FaDiscord, FaPython } from 'react-icons/fa'
import { HiNewspaper } from 'react-icons/hi'
import naf from '../public/pfp.png'
import nasa from '../public/NASA_logo.svg'
import next from 'next'
import ds from '../public/ds.png'
import tip from '../public/tip_calc.gif'
import tweet from '../public/tweet.gif'
import sb from '../public/study_bubble.jpg'
import bmo from '../public/bmo.gif'
import gun from '../public/gun.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'



const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);


  return (


    <>


      <div className={darkMode ? 'dark' : ''}>
        <Head>
          <title>Nafeeur Rahman</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

        </Head>



        <main className=' dark:bg-nord-black-3 bg-white px-10 md:px-18 lg:px-35 font-mono bg-repeat heropattern-floatingcogs-nord-gray w-full h-full dark:heropattern-circuitboard-nord-black-1
'>


          <section className='min-h-screen'>




            <nav className="py-10 mb-12 flex justify-between">
              <span className="type-hello lg:text-2xl md:text-xl text-nord-black-3 dark:text-gray-300 text-lg font-mono"></span>
              <ul className='flex items-center'>




                <li>
                  <BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='animate-bounce cursor-pointer text-2xl text-nord-black-3 dark:text-teal-400' />
                </li>

                <li>
                  <button onClick={(e) => {
                    e.preventDefault();
                    window.open('https://drive.google.com/file/d/1HVcJE1SsKEOe4iSMpXvj3Tv0Dv7krM_l/view?usp=sharing', "_blank");
                  }} className="border-blue-700 border-solid border-2 dark:border-0 dark:shadow-blue-500/50 bg-blue-500 hover:bg-blue-600 text-white font-semi-bold py-1 px-3 rounded-lg shadow-lg ml-10 transition duration-300 ease-in-out">
                    Resume
                  </button>
                </li>

              </ul>
            </nav>

            <section >




            </section>
            <div className='justify-center' >


              <Image alt='pfp' src={naf} className="animate-spin animate-once animate-duration-30 hover:animate-spin mx-auto w-60 h-60 rounded-full shadow-lg" title="Profile Pic was generated using DALL-E 2 AI" />

            </div>
            <div className='text-center p-10'>

              <h2 className='text-5xl py-2 font-bold text-tail dark:bg-gradient-to-r
            from-tail via-purp to-tailp dark:bg-clip-text dark:text-transparent 
            animate-text fade-left md:text-6xl'>Nafeeur Rahman</h2>
              <h2 className='2xl:mt-3 animate-fade-right text-gray-800 dark:text-gray-300 text-2xl py-2 md:text-3xl'>CS and Philosophy Student <span className="text-tail dark:bg-gradient-to-r
            from-teal-300 via-purple-400 to-pink-400 dark:bg-clip-text dark:text-transparent animate-text">@</span> CUNY</h2>
              <p className='2xl:mt-5 animate-fade-left text-gray-600 text-md py-5 md:text-xl leading-8 max-w-lg mx-auto dark:text-gray-400'>Aspiring Software Engineer and Tech Policy advocate. Interested in pursuing career in Civic-Tech and Non-Profit.</p>
            </div>


            <div className='cursor-pointer text-6xl text-gray-700 dark:text-gray-500 flex justify-center gap-16 py-3 2xl:mt-15'>
              <AiFillGithub onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/nafeeur', "_blank");
              }} className="z-20 animate-fade-up hover:text-red dark:hover:text-tailp" />
              <AiTwotoneMail onClick={(e) => {
                e.preventDefault();
                window.open('mailto:rnafeeur@gmail.com', "_blank");
              }} className="z-20 animate-fade-up hover:text-green-600 hover:dark:text-teal-400" />
              <AiFillLinkedin onClick={(e) => {
                e.preventDefault();
                window.open('https://linkedin.com/in/nafeeur', "_blank");
              }} className="z-20 animate-fade-up hover:text-blue-500 hover:dark:text-tail" />

            </div>
          </section>


          <section>



            <h3 className='text-3xl py-10 text-center text-purp dark:text-tailp'> Personal Projects</h3>
            <p className='text-gray-600 text-center text-md py-2 md:text-xl dark:text-gray-300 leading-8 max-w-lg mx-auto'>Throughout my College years I had the opportunity to work on various projects using different languages and frameworks. Below are some of the higlighted examples.</p>


            <div data-aos="zoom-in-top" data-aos-delay="50" data-aos-duration="600">

              <div className="dark:bg-tailcard dark:border-solid dark:border-2 dark:border-tail text-center mx-auto rounded-xl shadow-lg bg-white max-w-2xl max-h-2xl min-2w-xl min-h-2xl my-8 mt-10">
                <iframe className='mx-auto w-full aspect-video p-2' src="https://www.youtube.com/embed/nBMbrkYi7sc" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
                <div className="p-6">
                  <h5 className=" text-xl font-bold mb-2 text-red dark:text-tail">Astronot Bot</h5>
                  <p className="text-gray-700 dark:text-gray-200 text-base mb-4">
                    A Discord Bot written in Python. It utilizes NASA and Wolfram’s APIs to respond to various user commands and returns space-related facts, pictures as well as solve
                    computational and mathematical problems. 
                  </p>
                  <p className='text-gray-600 dark:text-purple-400 text-base'>Technologies used:</p>
                  <div className='flex justify-center gap-3 py-5 '>

                    <FaDiscord className='text-discord text-4xl dark:text-teal-400'></FaDiscord>
                    <FaPython className='text-python text-4xl dark:text-teal-400'></FaPython>
                    <SiWolframmathematica className='text-wolf text-4xl dark:text-teal-400'></SiWolframmathematica>
                    <SiNasa className='text-nasa text-4xl dark:text-teal-400'></SiNasa>


                  </div>


                  <button onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/nafeeur/AstronOt-Bot', "_blank");
              }} className="text-sm border-solid border-2 mb-2 dark:border-0 border-blue-700  dark:shadow-blue-500/50 bg-blue-500 hover:bg-blue-600 text-white font-semi-bold py-1 px-3 rounded-lg shadow-lg transition duration-300 ease-in-out">
                    &lt;/&gt; View code
                  </button>
                </div>
              </div>
            </div>



            <div data-aos="zoom-in-left" data-aos-delay="50" data-aos-duration="600">



              <div className="dark:bg-tailcard dark:border-solid dark:border-2 dark:border-tail text-center mx-auto rounded-xl shadow-lg bg-white max-w-2xl max-h-2xl min-w-xl min-h-xl my-8">
                <iframe className='mx-auto p-2 w-full aspect-video' src="https://www.youtube.com/embed/_D6587-r6NA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
                <div className="p-6">
                  <h5 className=" text-xl font-bold mb-2 text-green-600 dark:text-tail">Texiri</h5>
                  <p className="text-gray-700 dark:text-gray-200 text-base mb-4">
                  An "application" based on Twilio API that can provide answers through SMS to various user search inquiries, solve computational problems, translate texts, fetch weather/news and download high quality images. All these can be accomplished just by sending a text to a number and does not require WiFi or Celular Data. 
                  </p>
                  <p className='text-gray-600 dark:text-purple-400 text-base'>Technologies used:</p>
                  <div className='flex justify-center gap-3 py-5 '>


                    <SiTwilio className='text-twilio text-3xl dark:text-teal-400'></SiTwilio>
                    <SiUnsplash className='text-balck text-3xl dark:text-teal-400'></SiUnsplash>
                    <SiGoogletranslate className='text-tran text-3xl dark:text-teal-400'></SiGoogletranslate>

                    <SiWolframmathematica className='text-wolf text-4xl dark:text-teal-400'></SiWolframmathematica>
                    <SiGooglemessages className='text-mes text-4xl dark:text-teal-400'></SiGooglemessages>

                  </div>
                  <button onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/nafeeur/Texiri', "_blank");
              }} className="text-sm border-solid border-2 mb-2 dark:border-0 border-blue-700  dark:shadow-blue-500/50 bg-blue-500 hover:bg-blue-600 text-white font-semi-bold py-1 px-3 rounded-lg shadow-lg transition duration-300 ease-in-out">
                    &lt;/&gt; View code
                  </button>
                </div>
              </div>
            </div>



            <div data-aos="zoom-in-right" data-aos-delay="50" data-aos-duration="600">


              <div className="dark:bg-tailcard dark:border-solid dark:border-2 dark:border-tail text-center mx-auto rounded-xl shadow-lg bg-white max-w-2xl max-h-2xl min-w-xl min-h-xl my-8">

                <iframe className='mx-auto p-2 w-full aspect-video' src="https://www.youtube.com/embed/fA5tc_HBS94" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
                <div className="p-6">
                  <h5 className=" text-xl font-bold mb-2 text-blue-500 dark:text-tail">Newscord Bot</h5>
                  <p className="text-gray-700 dark:text-gray-200 text-base mb-4">
                    A Python based Discord bot that employs News API to provide top news of the day from various categories in addition to a summary of the article using AI. It also uses Wikipedia API to provide breif summary of any Wiki articles.
                  </p>

                  <p className='text-gray-600 dark:text-purple-400 text-base'>Technologies used:</p>
                  <div className='flex justify-center gap-3 py-5 '>

                    <FaDiscord className='text-discord text-4xl dark:text-teal-400'></FaDiscord>
                    <FaPython className='text-python text-4xl dark:text-teal-400'></FaPython>
                    <HiNewspaper className='text-news text-4xl dark:text-teal-400 '></HiNewspaper>
                    <SiWikipedia className='text-black text-4xl dark:text-teal-400'></SiWikipedia>


                  </div>
                  <button onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/nafeeur/Newscord-Bot', "_blank");
              }} className="text-sm border-solid border-2 mb-2 dark:border-0 border-blue-700  dark:shadow-blue-500/50 bg-blue-500 hover:bg-blue-600 text-white font-semi-bold py-1 px-3 rounded-lg shadow-lg transition duration-300 ease-in-out">
                    &lt;/&gt; View code
                  </button>
                </div>
              </div>
            </div>




          </section>

          <section>
            <h3 className='text-3xl py-10 text-center dark:text-tailp text-purp'> Mobile Projects</h3>

            <div data-aos="fade-up" data-aos-duration="600">

              <div className='justify-center lg:flex gap-0'>



                <div className="text-center mx-auto rounded-xl shadow-lg backdrop-blur-sm max-w-sm max-h-sm min-w-sm min-h-sm my-10 ">

                  <Image src={tip} alt="" className='p-2 rounded-3xl h-100 w-100 mx-auto' />

                </div>


                <div className="dark:bg-tailcard dark:border-solid dark:border-2 dark:border-tail text-center mx-auto rounded-xl shadow-lg bg-white max-w-md max-h-md min-w-md min-h-md my-5 ">



                  <div className="p-6">
                    <h5 className=" text-xl font-bold mb-2 text-right text-chirper dark:text-tail">Chirper</h5>
                    <p className="text-gray-700 dark:text-gray-200 text-base mb-4 text-right">
                    A Twitter clone App written in Swift that uses Twitter-API to view, compose, favorite, and retweet tweets. It also utilizes OAuth authentican system to login users with Twitter account.
                    </p>
                    <p className='text-gray-600 dark:text-purple-400 text-base'>Technologies used:</p>
                    <div className='flex justify-center gap-3 py-5 '>

                      <SiTwitter className='text-twitter text-4xl dark:text-teal-400'></SiTwitter>
                      <SiCocoapods className='text-coco text-4xl dark:text-teal-400'></SiCocoapods>
                      <SiXcode className='text-xcode text-4xl dark:text-teal-400'></SiXcode>
                      <SiSwift className='text-swift text-4xl dark:text-teal-400'></SiSwift>


                    </div>
                    <button onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/nafeeur/Chirper', "_blank");
              }} className="text-sm border-solid border-2 mb-2 dark:border-0 border-blue-700  dark:shadow-blue-500/50 bg-blue-500 hover:bg-blue-600 text-white font-semi-bold py-1 px-3 rounded-lg shadow-lg transition duration-300 ease-in-out">
                      &lt;/&gt; View code
                    </button>
                  </div>


                  <div className="p-6">
                    <h5 className=" text-xl font-bold mb-2 text-left text-tip dark:text-tail">TipCalc</h5>
                    <p className="text-gray-700 dark:text-gray-200 text-base mb-4 text-left">
                    A simple tip calculator app written for iOS that users can use to split bills, get individual ammounts and convert it to different currencies. It also has dark mode functionality and an intuitive UI.
                    </p>
                    <p className='text-gray-600 dark:text-purple-400 text-base'>Technologies used:</p>
                    <div className='flex justify-center gap-3 py-5 '>

                    <SiIos className='text-ios text-4xl dark:text-teal-400'></SiIos>
                      <SiCocoapods className='text-coco text-4xl dark:text-teal-400'></SiCocoapods>
                      <SiXcode className='text-xcode text-4xl dark:text-teal-400'></SiXcode>
                      <SiSwift className='text-swift text-4xl dark:text-teal-400'></SiSwift>


                    </div>
                    <button onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/nafeeur/TipCalc', "_blank");
              }} className="text-sm border-solid border-2 mb-2 dark:border-0 border-blue-700  dark:shadow-blue-500/50 bg-blue-500 hover:bg-blue-600 text-white font-semi-bold py-1 px-3 rounded-lg shadow-lg transition duration-300 ease-in-out">
                      &lt;/&gt; View code
                    </button>
                  </div>

                </div>





                <div className="p-2 text-center mx-auto rounded-xl shadow-lg backdrop-blur-sm max-w-sm max-h-xl min-w-sm min-h-xl my-10">

                  <Image src={tweet} alt="" className='rounded-3xl shadow-lg h-90 w-80 mx-auto' />

                </div>

              </div>
            </div>

            <section>


              <h3 className='text-3xl py-10 text-center text-purp dark:text-tailp'> FullStack Project</h3>
              <div data-aos="zoom-in-down" data-aos-delay="50" data-aos-duration="600">

                <div className="dark:bg-tailcard dark:border-solid dark:border-2 dark:border-tail text-center mx-auto rounded-xl shadow-lg bg-white max-w-2xl max-h-2xl min-2w-xl min-h-2xl my-5">
                  <Image src={sb} alt="" className='p-2 rounded-lg' />
                  <div className="p-6">
                    <h5 className=" text-xl font-bold mb-2 text-sb dark:text-tail">Study Bubble</h5>
                    <p className="text-gray-700 dark:text-gray-200 text-base mb-4">
                    A web application built using React which uses the Google Geocoding and Yelp API to search up and recommend users public places within NYC. The application also uses Google Firebase authentication system for user Login and Registration.
                    </p>
                    <p className='text-gray-600 dark:text-purple-400 text-base'>Technologies used:</p>
                    <div className='flex justify-center gap-3 py-5 '>

                      <SiReact className='text-react text-4xl dark:text-teal-400'></SiReact>
                      <SiJavascript className='text-js text-4xl dark:text-teal-400'></SiJavascript>
                      <SiCss3 className='text-css text-4xl dark:text-teal-400'></SiCss3>
                      <SiYelp className='text-yelp text-4xl dark:text-teal-400'></SiYelp>
                      <SiGooglemaps className='text-map text-4xl dark:text-teal-400'></SiGooglemaps>
                      



                    </div>
                    <button onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/nafeeur/studybubble-main', "_blank");
              }} className="text-sm border-solid border-2 mb-2 dark:border-0 border-blue-700  dark:shadow-blue-500/50 bg-blue-500 hover:bg-blue-600 text-white font-semi-bold py-1 px-3 rounded-lg shadow-lg transition duration-300 ease-in-out">
                      &lt;/&gt; View code
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </section>


          <section>


            <h3 className='text-xl py-10 text-center text-gray-800 dark:text-teal-400'>New projects under developement...</h3>

            <div > <Image src={bmo} alt="bmo" width="150" className='mx-auto' /></div>


          </section>


        </main>

      </div>
    </>



  )
}
