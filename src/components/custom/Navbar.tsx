import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <div className='container px-2 md:mx-auto pt-2'>
            <div className='bg-white w-full flex justify-between rounded-md p-2'>
                {/* <h1 className='text-2xl font-bold'>LOGO</h1> */}
                <Image
                    src="/icon/AI-GYM (3).png"
                    width={150}
                    height={80}
                    alt=''
                />
                <div className='text-sm text-end'>
                    <p>
                        Name: <span>Unknow</span>
                    </p>
                    <p>
                        Age:<span>N/A</span>
                    </p>
                    <p>
                        Weight:<span>N/A</span>
                    </p>
                    <p>
                        Height:<span>N/A</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
