'use client'

import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {
    addDoc,
    collection,
    getFirestore,
    onSnapshot, orderBy, query,
    serverTimestamp
} from "firebase/firestore";
import {app} from "@/firebase";
import Moment from "react-moment";


const CommentSection = ({id}) => {
    const {data: session} = useSession()
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const db = getFirestore(app)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const commentToPost = comment
        setComment('')
        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToPost,
            username: session?.user?.name,
            userImage: session?.user?.image,
            timestamp: serverTimestamp()
        })
    }
    useEffect(() => {
        onSnapshot(
            query(
                collection(db, 'posts', id, 'comments'),
                orderBy('timestamp', 'desc')
            ),
            (snapshot) => {
                setComments(snapshot.docs);
            }
        );
    }, [db]);


    return (
        <div>
            {comments.length > 0 && (
                <div className='mx-10 max-h-24 overflow-y-scroll'>
                    {comments.map((comment, id) => (
                        <div
                            key={id}
                            className='flex items-center space-x-2 mb-2 justify-between'
                        >
                            <img
                                src={comment.data().userImage}
                                alt='userimage'
                                className='h-7 rounded-full object-cover border p-[2px]'
                            />
                            <p className='text-sm flex-1 truncate'>
                                <span className='font-bold text-gray-700'>
                                 {comment.data().username}
                                </span>{' '}
                                {comment.data().comment}
                            </p>
                            <Moment fromNow className='text-xs text-gray-400 pr-2'>
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}
            {session && (
                <form className={'flex items-center p-4 gap-2'} onSubmit={handleSubmit}>
                    <img src={session.user.image} alt={'user Image'}
                         className={'w-10 h-10 rounded-full border p-[4px] object-cover'}
                    />
                    <input type="text" value={comment}
                           onChange={(e) => setComment(e.target.value)}
                           placeholder={'Add a comment...'}
                           className={'border-none flex-1 focus:ring-0 outline-none'}
                    />
                    <button
                        className={' text-blue-400 disabled:cursor-not-allowed disabled:text-gray-400'}
                        disabled={!comment.trim()} type={"submit"}>
                        Post
                    </button>
                </form>
            )}
        </div>
    );
};

export default CommentSection;