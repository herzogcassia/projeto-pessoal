import React, { useState } from 'react'

export const Input = () => {
    return (
        <div className="pt-[80px] mt-[100px]  bg-purple-500 h-[500px] flex flex-col w-[300px] items-center justify-center">
            <form className='flex flex-col w-[300px] items-center justify-center'>
                <div className=''>
                    <div className=''>
                        <p>
                            Email:
                        </p>
                        <input className='border-2 shadow-sm bg-abacate/40' />
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            Senha:
                        </p>
                        <input className='border-2 shadow-sm bg-abacate/40' />
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            Entrar
                        </p>
                        <input className='border-2 shadow-sm bg-abacate/40' />
                    </div>
                </div>
            </form>
        </div>
    )
}
