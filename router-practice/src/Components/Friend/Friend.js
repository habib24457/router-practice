import React from 'react';
import './Friend.css';

const Friend = (props) => {
    const {name,email} = props.friend;
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
        </div>
    );
};

export default Friend;