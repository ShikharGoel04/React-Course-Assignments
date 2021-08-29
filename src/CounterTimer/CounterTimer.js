import React,{useState,useEffect} from 'react';

export default function Counter(){
const [names,setName]=useState(["ABC","DEF","GHI"]);
const [pos,setPos]=useState(0);
const [count,setCount]=useState(10);
const [flag,setFlag] = useState(true);
useEffect(()=>{
   const timer= 
   setTimeout(
        ()=>{
          if(flag)
          {
            if(count>1)
            {
                setCount(c=> c-1); 
                
            }
            else
            {
                
                setCount(10);
                if(pos===names.length-1)
                {
                    setPos(0);
                
                }
                else
                {
                    setPos(p=> p+1);
                }

                
           
        }
    }
           
        },1000)
       
        return ()=>clearInterval(timer)

},[flag,count])
return (

<>
<h1>Counter Timer</h1>
<p>{count}</p>
<p>{names[pos]}</p>
<button onClick = {() => setFlag(f => false)}>Pause</button> 
<button onClick = {() => setFlag(f => true)}>Resume</button> 
</>)



}