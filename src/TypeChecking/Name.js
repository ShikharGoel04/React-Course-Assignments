import React from 'react';
import  propTypes  from 'prop-types';
export default function Name({name,roll,course,email})
{
    Name.propTypes={
        name:propTypes.string,
        roll:propTypes.number.isRequired,
        course:propTypes.string.isRequired,
    };
    console.log(email)
    Name.defaultProps={
        roll:10,
        name:"shikhar",
        
    }
    const regex= /^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@(mediaagility)+\.[A-Za-z]+$/
    return (<>
    <h1>Name: {name}</h1>
    <h1>Roll: {roll}</h1>
    <h1>Course: {course}</h1>
    <h1>Email: {regex.test(email)?email:new Error("Invalid email")}</h1>
    
    </>)


}