'use client'

import React, {useState} from 'react';
import {useSession} from "next-auth/react";

const CommentSection = () => {
    const {data: session} = useSession()
    const [comment,setComment]=useState('')

    return (
        <div>
            {session && (
                <form className={'flex items-center p-4 gap-2'}>
                    <img src={session.user.image} alt={'user Image'}
                         className={'w-10 h-10 rounded-full border p-[4px] object-cover'}
                    />
                    <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}
                    placeholder={'Add a comment...'} className={'border-none flex-1 focus:ring-0 outline-none'}
                    />
                    <button className={' text-blue-400 disabled:cursor-not-allowed disabled:text-gray-400'} disabled={!comment.trim()} type={"submit"}>
Post
                    </button>
                </form>
            )}
        </div>
    );
};

export default CommentSection;