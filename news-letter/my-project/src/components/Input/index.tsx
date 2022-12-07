import React, { useState } from 'react'

export const Input = () => {
    // const [input, setInput] = useState(false)
    // const [get]

    return (
        <>
            <form>
                <label>
                    Nome:
                <input className='bg-red-500 border-2 border-black' />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}
