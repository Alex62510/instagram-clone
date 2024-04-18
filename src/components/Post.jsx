import React from 'react';
import {HiOutlineDotsVertical} from "react-icons/hi";

const Post = ({post}) => {
    return (
        <div className={'my-7 bg-white  border rounded-md'}>
            <div className={'flex items-center p-5 border-b border-gray-100'}>
                <img src={post.profileImage} alt={post.username}
                     className={'h-12 w-12 rounded-full object-cover border p-1 mr-3'}/>
                <p className={'flex-1 font-bold '}>{post.username}</p>
                <HiOutlineDotsVertical className={'h-5 cursor-pointer'}/>
            </div>
            <img src={post.image} alt={post.caption} className={'object-cover w-full'}/>
            <p className={'p-3 truncate'}>
                <span className={'font-bold mr-2'}>{post.username}</span>
                {post.caption}</p>
        </div>
    );
};

export default Post;