"use client"

import React from 'react'
import {usePathname, useSearchParams, useRouter } from "next/navigation";
import { pagination } from '../services/student';

const Pagination = ({pagination}: {pagination: pagination}) => {

    const totalPages = pagination.pageCount;
    const currPage = pagination.page
    const pathName = usePathname();
    const searchParams = useSearchParams()
    const {replace} = useRouter()

    const control1 = currPage > 5 ? currPage - 5 : 1;
    const control2 = currPage > 5 ? currPage - 4 : 2;
    const control3 = currPage > 5 ? currPage - 3 : 3;
    const control4 = currPage > 5 ? currPage - 2 : 4;
    const control5 = currPage > 5 ? currPage - 1 : 5;
    const control6 = currPage > 5 ? currPage : 6;
    const nextPage = currPage == totalPages ? null : currPage+1;
    const prePage = currPage == 1 ? null : currPage-1;

    const createUrl = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString())
        replace(`${pathName}?${params.toString()}`)
    }

    return (
        <ul className='flex flex-row justify-center items-center student-pagination absolute bottom-2'>
            {prePage && (
                <>
                    <div className='cursor-pointer' onClick={() => createUrl(1)}>
                        <li className={`control-box control-first-last`}  
                        >  
                        &lt;&lt;
                        </li>
                    </div>
                    <div className='cursor-pointer' onClick={() => createUrl(prePage)}>
                        <li className={'control-box control-next-pre'}>&lt;</li>
                    </div>
                </>
            )}
            {totalPages >= control1 && (
                <div className='cursor-pointer' onClick={() => createUrl(control1)}>
                    <li className={`control-box control-number ${currPage === control1 ? 'active' : ''}`}>{control1}</li>
                </div>
            )}
            {totalPages >= control2 && (
                <div className='cursor-pointer' onClick={() => createUrl(control2)}>
                    <li className={`control-box control-number ${currPage === control2 ? 'active' : ''}`}>{control2}</li>
                </div>
            )}
            {totalPages >= control3 && (
                <div className='cursor-pointer' onClick={() => createUrl(control3)}>
                    <li className={`control-box control-number ${currPage === control3 ? 'active' : ''}`}>{control3}</li>
                </div>
            )}
            {totalPages >= control4 && (
                <div className='cursor-pointer' onClick={() => createUrl(control4)}>
                    <li className={`control-box control-number ${currPage === control4 ? 'active' : ''}`}>{control4}</li>
                </div>
            )}
            {totalPages >= control5 && (
                <div className='cursor-pointer' onClick={() => createUrl(control5)}>
                    <li className={`control-box control-number ${currPage === control5 ? 'active' : ''}`}>{control5}</li>
                </div>
            )}
            {totalPages >= control6 && (
                <div className='cursor-pointer' onClick={() => createUrl(control6)}>
                    <li className={`control-box control-number ${currPage === control6 ? 'active' : ''}`}>{control6}</li>
                </div>
            )}
            {totalPages > control6 && (
                <>
                    {totalPages >= control6+1 && (
                        <div className='cursor-pointer' onClick={() => createUrl(control6+1)}>
                            <li className={`control-box control-number`}>.</li>
                        </div>
                    )}
                    {totalPages >= control6+2 && (
                        <div className='cursor-pointer' onClick={() => createUrl(control6+2)}>
                            <li className={`control-box control-number`}>.</li>
                        </div>
                    )}
                </>
            )}
            {nextPage && (
                <>
                    <div className='cursor-pointer' onClick={() => createUrl(nextPage)}>
                        <li className='control-box control-next-pre'>&gt;</li>
                    </div>
                    <div className='cursor-pointer' onClick={() => createUrl(totalPages)}>
                        <li className='control-box control-first-last'>&gt;&gt;</li>
                    </div>
                </>
            )}
        </ul>
    )
}

export default Pagination