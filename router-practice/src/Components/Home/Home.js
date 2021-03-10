import React from 'react';
import {useState,useEffect} from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    
 const [friends,setFriends] = useState([]); //if we get an array after fetching
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data));
  },[])

    return (
        <div>
            <h1>{friends.length}</h1>
             {
             friends.map(friend => <Friend friend={friend} ></Friend>)
             } 
        </div>
    );
};

export default Home;