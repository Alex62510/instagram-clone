'use client'
import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {HiOutlineHeart, HiHeart} from 'react-icons/hi'
import {collection, getFirestore,onSnapshot} from "firebase/firestore";
import {app} from '@/firebase'

const LikeSection = ({id}) => {
    const {data: session} = useSession()
    const [hasLiked, setHasLiked] = useState(false)
    const [likes, setLikes] = useState([])
    const db = getFirestore(app)

    useEffect(() => {
        onSnapshot(collection(db, 'posts', id, "likes"),
            (snapshot) => {
                setLikes(snapshot.docs)
            }
        )
    }, [db]);

    useEffect(() => {
        if (likes.findIndex((like) => like.id === session?.user?.uid) !== -1) {
            setHasLiked(true);
        } else {
            setHasLiked(false);
        }
    }, [likes]);

    return (
        <div>
            {session && (
                <div className={'flex border-t border-gray-100 px-4 pt-4'}>
                    <div className={'flex items-center'}>
                        {hasLiked?(
                            <HiHeart className={'text-red-500 cursor-pointer text-3xl hover:scale-125 transition-transform duration-300 ease-out'}/>
                        ):(
                            <HiOutlineHeart className={'cursor-pointer text-3xl hover:scale-125 transition-transform duration-300 ease-out'}/>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LikeSection;