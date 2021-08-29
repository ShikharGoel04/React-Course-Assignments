import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incrementAction,decrementAction } from '../actions/counterAction';
export default function CounterVal(){
    

    const counter=useSelector((state) => state.counter);
    const {count} =counter;
    const dispatch=useDispatch();

    return(

        <>
        <h1>Count{count}</h1>
        <button onClick={() =>dispatch(incrementAction(count+1)) }>Increment</button>
        <button onClick={() =>dispatch(decrementAction(count-1)) }>Decrement</button>
        </>
    );

}