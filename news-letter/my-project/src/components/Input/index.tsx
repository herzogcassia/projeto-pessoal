import React, { useState } from 'react'

export const Input = () => {
    return (
        <div className="pt-[80px] mt-[100px]  bg-purple-500 h-[500px] bg-red-200/20 flex flex-col w-[300px] items-center justify-center">
            <form className='flex flex-col w-[300px] items-center justify-center'>
                <div className=''>
                    <label>
                        Email:
                        <input className='border-2 shadow-sm bg-abacate/40' />
                    </label>
                </div>
                <div>
                    <label>
                        Senha:
                        <input className='border-2 shadow-sm bg-abacate/40' />
                    </label>
                </div> <div>
                    <label>
                        Entrar
                        <input className='border-2 shadow-sm bg-abacate/40' />
                    </label>
                </div>
            </form>
        </div>
    )
}
