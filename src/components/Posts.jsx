import React from 'react';
import {app} from '@/firebase'
import {collection, getFirestore, query,getDocs,orderBy} from "firebase/firestore";

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
            Posts
        </div>
    );
};

export default Posts;