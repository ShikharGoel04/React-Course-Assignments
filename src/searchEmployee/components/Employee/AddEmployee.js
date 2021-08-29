import React,{useState} from "react"; 


export default function AddEmployee(){

    const [name,setName]=useState("")
    const [id,setId]=useState(3)
    return(
        <><h1>Enter Details</h1>
       <button onClick={() => setName("shikhar")}>Click</button>
        
        {console.log(name)}
        </>
    )

}