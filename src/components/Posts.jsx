import React from 'react';
import {app} from '@/firebase'
import {collection, getFirestore, query,getDocs,orderBy} from "firebase/firestore";
import Post from "@/components/Post";

const Posts = async () => {
    const db = getFirestore(app)
    const q = query(collection(db, 'posts'),
        orderBy('timestamp','desc'))
    const querySnapshot=await getDocs(q)
    const data=[]
    querySnapshot.forEach((doc)=>{
        data.push({id:doc.id,...doc.data()})
    })
    return (
        <div>
            {data.map((post)=>(
                <Post key={post.id} post={post}/>
            ))}
        </div>
    );
};

export default Posts;