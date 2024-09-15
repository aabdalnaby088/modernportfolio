import { projects } from '@/data';
import React from 'react';
    import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from 'react-icons/fa6';
import Link from 'next/link';
export default function RecentProjects() {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                Here is my {' '}
                <span className="text-purple">
                    Recent Projects
                </span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 w-full">
    {projects.map((project) => (
        <div key={project.id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            <PinContainer title={project.link} href={project.link}>
                <Link href={project.link}>
                    <div className='relative flex items-center justify-center sm:w-[400px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                            <img src="/bg.png" alt="Background" loading="lazy" />
                        </div>
                        <img src={project.img} alt={project.title} className='z-10 absolute bottom-10 ' loading="lazy" />
                    </div>
                </Link>
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-2'>{project.title}</h1>
                <p className='lg:text-xl font-light text-sm line-clamp-5 mt-4'>{project.des}</p>
                <div className='flex items-center justify-between mt-7 mb-3'>
                    <div className='flex items-center'>
                        {project.iconLists.map((icon, index) => (
                            <div key={index} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                style={{
                                    transform: `translateX(-${5 * index * 2}px)`
                                }}
                            >
                                <img src={icon} alt={`Icon ${index}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center'>
                        <p>Checkout live site</p>
                        <FaLocationArrow className='ms-3' color='#CBACF9' />
                    </div>
                </div>
            </PinContainer>
        </div>
    ))}
</div>
        </div>
    );
}