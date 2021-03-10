import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import Friend from './Components/Friend/Friend';


function App() {
  const [friends,setFriends] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data));
  },[])

  return (
    <div className="App">
      <h1>{friends.length}</h1>
      {
        friends.map(friend => <Friend friend={friend} ></Friend>)
      }
    </div>
  );
}

export default App;
