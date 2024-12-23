'use client'

import React, {useState} from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const SearchComponent = () => {
    const [text, setText] = useState<string>('')
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    function handleSearch(e: any,term: string) {
        console.log("searching...", term);
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        if (term) {
        params.set('query', term);
        } else {
        params.delete('query');
        }
        setText('')
        replace(`${pathname}?${params.toString()}`);

    }

    return (
        <div className='p-5'>
             <form onSubmit={(e) => handleSearch(e, text)}action="">
                <input type="text"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    defaultValue={searchParams.get('query')?.toString()} 
                    name="search" 
                    className='p-2 border border-gray-300 rounded-md' 
                    id="search" 
                    placeholder='Enter Aadhar Number' 
                /> 
                <button className='p-2 text-white bg-blue-500 hover:bg-blue-300 active:scale-75 transition-all rounded-md' type="submit">Search</button>
             </form>
        </div>
    )
}

export default SearchComponent
