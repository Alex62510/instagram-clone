import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Header = () => {
    return (
        <div className={'shadow-sm border-b sticky top-0 bg-white z-30 p-3'}>
            <div className={'flex justify-between items-center max-w-6xl mx-auto'}>
                <Link href={'/'} className={'lg:hidden '}>
                    <Image src={'/logo.jpg'} width={40} height={40}
                           alt={'/logo'}/>
                </Link>
                <Link href={'/'} className={'hidden lg:inline-flex'}>
                    <Image src={'/name.png'} width={96} height={96}
                           alt={'/name'}/>
                </Link>
                <input type="text" placeholder={'Search'}
                       className={'bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]'}
                />
               <button className={'text-sm font-semibold text-blue-500'}>Log in</button>
            </div>
        </div>
    );
};

export default Header;