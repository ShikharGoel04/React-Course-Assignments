import React,{useRef,useEffect} from 'react';
export default function RefPractise(){

const myRef=useRef();
const [counter,setCounter] =React.useState(0)
useEffect(()=>{
    myRef.current="Hello"
},[])

React.useEffect(() => {
    console.log(counter,myRef.current)

},[counter])

return (<>
<h1>counter {counter} </h1>
<button onClick={()=>setCounter(count => count +1)}> Increase</button>

</>)


} 