import React from 'react';
import {useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';

const FriendDetail = () => {
    let {friendId} = useParams(); 
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    const [friends,setFriends] = useState({}); 
    
    /*if we get an object after fetching
    const [friends,setFriends] = useState({}); 

    if we get an array after fetching
    const [friends,setFriends] = useState([]);
    */

    useEffect(() => {
        
        fetch(url)
        .then(res => res.json())
        .then(data =>setFriends(data));
    },[])

    const {name,email,id,website} = friends;
    return (
        <div>
            <h3>Friend's Detail of id: {friendId}</h3>
            <p>{name}</p>
            <p>{email}</p>
            <p>{website}</p>

        </div>
    );
};

export default FriendDetail;