import React, { useEffect, useState } from 'react'
import * as faker from '@faker-js/faker';
import Story from './Story'
import { useSession } from "next-auth/react"


function Stories() {
    const [suggestions, setSuggestions] = useState([])
      const { data: session } = useSession();
    useEffect(() => {
        const { faker } = require('@faker-js/faker');
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        setSuggestions(suggestions)
        //console.log(suggestions)
    }, []);
  return (
    <div className="flex mr-5 space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
       
       {session && (
         <Story img ={session.user.image}
         username={session.user.username} />
       )}
       
        {suggestions.map((profile) => (
            <Story 
            key={profile.id} 
            img={profile.avatar}
            username={profile.username}
            />
     ))}
    </div>
  )
}

export default Stories