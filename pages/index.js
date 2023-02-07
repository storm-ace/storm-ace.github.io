import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { BsDiscord, BsLinkedin } from 'react-icons/bs'
import { SiFiverr } from 'react-icons/si'
import { MdDarkMode } from 'react-icons/md'
import hooligans from '../public/hooligans.io.png'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Head>
        <title>Wesley Coomans Portfolio</title>
        <meta name="Wesley Coomans Portofolio" content="Wesley Coomans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40' id={darkMode ? 'dark' : ''}>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <div>
              <h1 className='text-2xl'>Developed by Wesley Coomans</h1>
              <h1 className='text-xl text-gray-700'>Stormace</h1>
            </div>
            <ul className='flex items-center gap-5'>
              {/* <li><MdDarkMode className='cursor-pointer text-2xl'
                onClick={() => setDarkMode(!darkMode)} /></li> */}
              <li><BsLinkedin className='cursor-pointer text-2xl' /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='https://www.linkedin.com/in/wesley-coomans-9458a9177/'>Linkin</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Wesley Coomans</h2>
            <h3 className='text-2xl py-2'>Developer and designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Freelancher provinding services for websites apps and games!
              Lets make amazing products together.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://discord.gg/MjMJTfRxnE'><BsDiscord className='cursor-pointer' /></a>
            <a href='https://www.linkedin.com/in/wesley-coomans-9458a9177/'><BsLinkedin className='cursor-pointer' /></a>
            <a href='https://nl.fiverr.com/caderikor'><SiFiverr className='cursor-pointer' /></a>
          </div>
          <div className='flex justify-center'>
            <Image src='/SA_Logo_Circle.png' width={300} height={300} alt='' />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-600'>
              Designing Games AI Gameplay scripts are one of my main sources of work. Recently I started doing web-development front and backend.
              Designing and developing the backend fascinates me and I love to see what people will use it for! I can make entire games or websites from start to finish.
            </p>
            <ul className='text-gray-600 px-3 leading-8'>
              <li>Games</li>
              <li>Networking UDP</li>
              <li>Unity / Unreal Engine</li>
              <li>Chat Application</li>
              <li>E-Commerces</li>
              <li>Admin Panel</li>
            </ul>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-5'>Unity game engine</h3>
            <p className='text-gray-800 mb-5'>
              Make games and apps with a powerful unity engine using C#.
            </p>
            <div className='flex gap-10 justify-center'>
              <Image src="/Unity/U_Logo_Small_Black_RGB_1C.png" width={200} height={100} alt='' />
            </div>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-5'>Unreal engine</h3>
            <p className='text-gray-800 mb-5'>
              Ability to make very detailed realistic looking games with Unreal Engine and power of Nanite using the programming language c++.
            </p>
            <div className='flex gap-10 justify-center'>
              <Image src="/UnrealEngine.png" width={200} height={100} alt='' />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>I began my freelance job at age of 16 and worked for people that wanna make
              <span> roblox </span>
              games.
              From there I started working in
              <span className='text-teal-500'> Unity </span>
              and
              <span className='text-teal-500'> Unreal Engine </span>
              to develop apps and games.
              I also started to get an interest in making websites and backend applications so I learned how to become a
              <span className='text-teal-500'> full stack developer </span>
               and fully any course I could get my hands on.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg-flex-wrap'>
            <iframe width="420" height="420" src="https://www.youtube.com/embed/J33UdiKn0lw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className='basis-1/3 flex-1'>
              <Image className='rounded-lg object-cover shadow-lg' src={hooligans} alt='' />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
