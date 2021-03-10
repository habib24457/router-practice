import React from 'react';
import './Friend.css';
import {Link} from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const friendStyle = {
        border: '1px solid red',
        width:'350px',
        marginLeft: '450px',
        marginBottom: '20px',

    }
    return (
        <div style={friendStyle}>
           <h2>Name: {name}</h2> 
           <h2>Email: {email}</h2>
            <Link to= {`/friend/${id}`}>   
            <button>Show details of id:{id}</button>
            </Link>
             
        </div>
    );
};

export default Friend;