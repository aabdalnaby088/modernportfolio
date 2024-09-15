import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaHeart, FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='w-full pt-20 pb-10' id='Contacts'>
            <div className='w-full absolute left-0 -bottom-72 min-h-96 '>
                <img src="/footer-grid.svg" alt="footer grid" className='w-full h-full opacity-50'/>
            </div>
            <div className='w-full flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Take the next step <span className='text-purple'>towards</span> a powerful digital presence!
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
            <div className='flex gap-10'>
                <a href="mailto:aabdalnaby073@gmail.com">
                    <MagicButton
                    title='Contact me Now'
                    icon= {<FaLocationArrow/>}
                    position='right'
                    />
                </a>
                <a href="https://drive.google.com/file/d/1EHmvYkNWea8nA756NcUEgaQWRzv1qnZb/view?usp=drive_link">
                    <MagicButton
                    title='Check out my Resume'
                    icon= {<FaLocationArrow/>}
                    position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between w-full items-center'>
                <p className='md:text-base md:font-normal font-light text-sm flex gap-4'>Developed with passion by Ahmed <span className='flex items-center justify-center'> <FaHeart/> </span> </p>
                <div className='flex items-center justify-center md:gap-3 gap-6'>
            {socialMedia.map((acc) => (
                    <a href= {acc.link} key={acc.id} className='w-10 h-10 flex justify-center items-center rounded-full  relative z-10'>
                        <img src={acc.img} alt="acc" width={20} height={20} />
                    </a>
            ))}
                </div>
            </div>
            </div>
        </div>
    )
}
