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
import { useSelector,useDispatch } from 'react-redux';
import { getDataAction } from './Redux/actions/employeeActions';
import AddEmployee from './searchEmployee/components/Employee/AddEmployee';
import Practise from './Ref/createRef';
import RefPractise from './Ref/useRef';
import RefApplication from './Ref/RefApplication';
import TypeChecking from './TypeChecking/Main';
import ErrorBoundary from './ErrorBoundary';
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(getDataAction())
  },[])
  const Data=useSelector((state) => state.userData);

  const {userData} =Data;
  const addEmployee=useSelector((state) => state.addEmployee)
  const {newUserData} = addEmployee
  // userData?userData.push(newUserData):'';
  console.log("userData",userData);
  console.log("newUserData",newUserData);
  // userData.push(newUserData)
  
  return (
   
   <>
   <ErrorBoundary>
    <Route exact path="/" component={Home}/>
    <Route exact path="/employee" render={() => <MainEmp userData={userData}/>}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/counter" component={Counter}/>
    <Route path="/memo" component={MemoComponent}/>
    <Route path="/employee/:id" render={(props) => <EmployeeDetails {...props} userData={userData}/>}/>
    <Route path="/CountVal" component={CounterVal}/>
    <Route path="/addEmp" component={AddEmployee}/>
    <Route path="/practise" component={Practise}/>
    <Route path="/Refpractise" component={RefPractise}/>
    <Route path="/RefApp" component={RefApplication}/>
    <Route path="/typeCheck" component={TypeChecking}/>
    </ErrorBoundary>
     </>
  );
}

export default App;
