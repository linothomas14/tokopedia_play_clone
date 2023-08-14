import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
function Navbar() {
    return (
        <div className='flex pt-5 items-start justify-between min-h-[70px] px-10 mb-5 bg-slate-800'>
            <a href="/" className='text-white text-xl'>Tokopedia Play</a>
            <a href="/search"><MagnifyingGlassIcon className="h-6 w-6 text-white" /></a>

        </div>
    )
}

export default Navbar