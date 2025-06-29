import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Hero() {
    return (
        <div className='bg-green-800 p-10 px-28 lg:px-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-20'>
                <div>
                    <h2 className='font-extrabold text-3xl md:text-4xl lg:text-5xl text-white'>
                        Lorem ipsum dolor sit amet
                    </h2>
                    <p className='text-gray-200 pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div className='flex gap-5 mt-8'>
                        <Button>Explore</Button>
                        <Button className='bg-red-500'>Sell</Button>
                    </div>
                </div>
                <div className='flex justify-center items-center -mt-6'>
                    <Image src={'/placeholder.png'} alt='placeholder' width={300} height={400} />
                </div>
            </div>
        </div>
    )
}

export default Hero
