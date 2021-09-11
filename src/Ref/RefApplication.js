import React,{useState,useEffect,useRef} from 'react'
export default function RefApplication()
{
    const [item,setItem] =useState('');
    const addRef=useRef();
    const listRef=useRef();
    useEffect(() => {
        if(addRef.current.value)
        listRef.current.innerHTML=listRef.current.innerHTML+'<li>'+addRef.current.value + '</li>'
        },[item])
    
    const AddItem =(item) => {
        setItem(item)
    }
    return (<>

        <p>Add Item<input type="text" ref={addRef} onBlur={(e)=> AddItem(e.target.value)}></input></p>
        <ol ref={listRef}>
            </ol>
    
    
    </>)
}