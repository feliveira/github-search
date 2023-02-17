"use client"

import Link from "next/link"
import { useState } from "react"

export default function SearchBar( )
{
    const [username, setUsername] = useState('')

    return (
        <div className="flex items-center space-x-4">
            <input 
            value={username}
            onChange={e => setUsername( e.target.value )}
            type="text" className="shadow-lg drop-shadow-sm bg-[#343a40] py-1 rounded-lg h-8 indent-4 text-white w-64 md:w-80" />
            <Link href={`/profile/${username}`} className="bg-gray-600 h-8 w-10 flex items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F5F5F5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            </Link>
        </div>
    )
}