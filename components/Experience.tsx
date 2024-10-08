import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

export default function Experience() {
    return (
        <div className='py-20' id="Experience">
            <h1 className= "heading">
                My 
                <span className='text-purple ms-3'>
                    Experience
                </span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 gird-cols-1 gap-10">
                {workExperience.map((el) => (
                    <Button key={el.id} borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src= {el.thumbnail} alt= {el.thumbnail} className='lg:w-32 md:w-20 w-16' />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {el.title}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {el.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>

        </div>
    )
}
