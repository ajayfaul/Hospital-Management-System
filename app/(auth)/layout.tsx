import Image from 'next/image'
import React from 'react'

const Authlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-green-400'>
            <div className='w-1/2 h-full flex items-center justify-center'>
                {children}
            </div>
            <div className='hidden lg:flex w-1/2 h-full relative'>
                <Image
                    src="https://images.unsplash.com/photo-1666214277657-e60f05c40b04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1000}
                    height={1000}
                    alt='Doctors'
                    className='w-full h-full object-cover' />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex flex-col px-12 pt-20'>
                    <h1 className='text-6xl font-bold mb-6 text-green-400'>Stackie HMS</h1>
                    <p className='text-2xl text-white'>Best service for your healthcare</p>
                </div>
            </div>
        </div>
    )
}

export default Authlayout