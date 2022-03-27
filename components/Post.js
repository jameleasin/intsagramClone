import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import {
    BookmarkIcon, 
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplanIcon } from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { addDoc, collection, onSnapshot, orderBy, serverTimestamp, query, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Moment from "react-moment"


function Post({ id, username, userImg, img, caption }) {
const { data: session } = useSession();
const [comment, setComment] = useState("");
const [comments, setComments] = useState([]);
const [likes, setLikes] = useState([]);
const [hasLiked, setHasLiked] = useState(false);

   return (
      <div className="bg-white my-7 border rounded-sm">
        <div className="flex items-center p-5">
            <img 
            src={userImg} 
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3" 
            alt="profile image" 
            />
            <p className="flex-1 font-bold">{username}</p>
            <DotsHorizontalIcon className="h-5" />
        </div>

        <img src={img} 
        className="object-cover w-full" 
        alt="post image" 
        />
        {session && (
             <div className="flex justify-between px-4 pt-4">
            <div className="flex space-x-4">
               
                <ChatIcon className="btn"/>
                <PaperAirplanIcon className="btn"/>
            </div>
        <BookmarkIcon className="btn" />
        </div>
        )}
       

        <p className="p-5 truncate">
            <span className="font-bold mr-1">{username} </span>
            {caption}
        </p>
           
            {session && (
                 <form className="flex items-center p-4"> 
            <EmojiHappyIcon className="h-7" />
            <input 
            type="text" 
            value={comment}
            onChange={e => setComment(e.target.value)}
            className="border-none flex-1 focus:ring-0 outline-none" 
            placeholder = "Add a comment..."
            />
            <button type="submit" disabled={!comment.trim()} className="font-semiibold text-blue-400">Post</button>
        </form>
         )}
    </div>
  );
}


export default Post

