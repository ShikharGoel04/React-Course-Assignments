import {useState, useMemo}from 'react'
import Employee from './Employee';
const MemoComponent = () => {
    const [count, setCount]= useState(0);
    const [name, setName]= useState('Heena')
    
   const memoizedData= useMemo(()=>{
        return <Employee name={name}/>
    }, [name])
    return (
    <>
    <h1>Memoization</h1>
    <p>{count}</p>
    {memoizedData}
    <Employee name="shubhankar" change={'every change'} />
    <button onClick={()=>setCount(count+1)}> Increase</button>
    <button onClick={()=>setName('SHubhanakr2222')}> Change Name</button>
    </>
    )
}

export default MemoComponent