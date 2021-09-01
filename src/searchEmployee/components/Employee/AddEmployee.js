import React,{useState} from "react"; 
import { Input } from 'react-input-component';
import {useDispatch } from 'react-redux';
import { addDataAction } from "../../../Redux/actions/employeeActions";
export default function AddEmployee(){

    const [name,setName] =useState("")
    const [UserName,setUsername] =useState("")
    const [email,setEmail] =useState("")
    const dispatch=useDispatch();
    const [employee,setEmployee]=useState({"id":"","name":"","username":"","email":""})
    const [id,setId]=useState(3)
    return(
        <>
        <h1>Enter Details</h1>
        <p>Enter Name<Input type="text" id="name" onChange={event => setName(event.target.value)}></Input></p>
        <p>Enter Username<Input type="text" id="username" onChange={event => setUsername(event.target.value)}></Input></p>
       <button onClick={() => {setEmployee({"id":"10","name":name,"username":UserName})}
       

    }>
       Submit</button>
       
       <button onClick={() => dispatch(addDataAction({"name":name,"username":UserName}))}>add</button>
        
        {console.log(employee)}
        </>
    )

}