import './App.css';
import React, {useState,useEffect, useMemo} from 'react'
import MainEmp from './searchEmployee/components/MainComponent';
import Portfolio from './Portfolio/components/MainComponent';
import Counter from './CounterTimer/CounterTimer';
import MemoComponent from './Memo/MemoComponent';
import EmployeeDetails from './searchEmployee/components/Employee/EmployeeDetails';
import Home from './HomeComponent/HomeComponent';
import { Route } from 'react-router-dom';
import CounterVal from './Counter/Counter';
function App() {
  const [userData,setUserData] =useState([]);
  useEffect(()=>{
    console.log("userdata.....")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((res) => setUserData(res));
  },[])
  return (
   <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/employee" component={MainEmp}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/counter" component={Counter}/>
    <Route path="/memo" component={MemoComponent}/>
    <Route path="/employee/:id" render={(props) => <EmployeeDetails {...props} userData={userData}/>}/>
    <Route path="/CountVal" component={CounterVal}/>
     </>
  );
}

export default App;
