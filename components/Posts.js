import React from "react"
import { Post } from "./Post"
import { useEffect, useState } from "react"
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore"
import { db } from '../firebase';

function Posts() {
 const [posts, setPosts] = useState([]);

 useEffect(
     () =>
     onSnapshot(
         query(collection(db, "posts"), orderBY("timestamp", "desc")),
         (snapshot) => {
             setPosts(snapshot.doc);
         }
     ),
     [db]
 );
           
  return (
   <div>
    {posts.map((post) => (
      
       <Post 
            key={post.id} 
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
            /> 
        
    ))};
</div>
    
  );
}

export default Posts;