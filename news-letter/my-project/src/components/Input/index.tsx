import React, { useState } from 'react'

export const Input = () => {
    return (
        <div className="pt-[80px] mt-[100px] h-[500px] flex flex-col w-[400px] items-center justify-center">
            <form className='flex flex-col items-center justify-center w-full'>
                <div className='w-full py-2'>
                    <p className='mx-3 text-sm font-bold text-musgo'>Email:</p>
                    <input className='w-full h-10 shadow-sm bg-taruira' />
                </div>
                <div className='w-full py-2'>
                    <p className='mx-3 text-sm font-bold text-musgo'>Senha:</p>
                    <input className='w-full h-10 shadow-sm bg-taruira' />
                </div>
                <div className='flex items-center justify-center w-full py-8'>
                    <button className='flex flex-row items-center justify-center w-full h-10 p-2 bg-taruira'>
                        <p className='mx-3 text-sm font-bold text-musgo'>Entrar</p>
                    </button>
                </div>
            </form>
        </div>
    )
}
