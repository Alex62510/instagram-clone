'use client'

import {signIn, useSession, signOut} from "next-auth/react";
import React from 'react';

const MiniProfile = () => {
    const {data:session}=useSession()
    return (
        <div className={'flex items-center justify-between mt-14 ml-10 scroll-ml-10'}>
            <img
                className={'w-16 h-16 rounded-full border p-[2px]'}
                src={session?.user?.image || "/logo.jpg"}
                alt={"user-profile-pic or instagram logo" }/>
            <div className={'flex-1 ml-4'}>
                <h2 className={'font-bold text-gray-600'}>{session?.user?.username}</h2>
                <h3 className={'text-sm text-gray-400'}>{"Welcome to Instagram!"}</h3>
            </div>
            {session?
                (<button className={'text-blue-500 text-sm font-semibold'} onClick={signOut}>Sign out</button>):
                (<button className={'text-blue-500 text-sm font-semibold'} onClick={signIn}>Sign in</button>)
            }
        </div>
    );
};

export default MiniProfile;