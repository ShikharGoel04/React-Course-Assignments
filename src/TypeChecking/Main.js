import React,{useState} from 'react'
import Name from './Name'

export default function TypeChecking(){
const [email,setEmail] =useState('')

return (<>
<h1>Email Validation</h1>
Enter Email : <input type="text" name="email" onBlur={(e) => {setEmail(e.target.value) }}></input>
{email?<Name name={"shikhar"} roll={undefined} course={"react"} email={email}/>:''}
</>)
}