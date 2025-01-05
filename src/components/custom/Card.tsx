import React from 'react'
import { Button } from '../ui/button'

export default function Card() {
    return (
        <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[var(--neutralPc)] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
            <div className='w-full h-[200px] bg-blue-400 rounded'>

            </div>
            <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
                Nome Esercizio
            </p>

            <p className="blueberry font-semibold text-gray-600 text-xs">
                Breve descrizione
            </p>

            <div className="ordernow flex flex-row justify-between items-center w-full">
                <p
                    className="ordernow-text text-xs text-[#abd373] font-semibold group-hover:text-gray-800"
                >
                    3 serie da 15min
                </p>
                <Button
                    className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[var(--accentPc)] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
                >
                    Dettagli
                </Button>
            </div>

        </div>
    )
}
