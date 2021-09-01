import React, {useState,useEffect, useMemo} from 'react'
import EmployeeList from './EmployeeList/EmployeeList';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { searchEmployeeAction } from '../../Redux/actions/employeeActions';
export default function MainEmp({userData}) {
const[showBorder,setShowBorder]=useState(false);
const Data=useSelector((state) => state.userData);
  const {loading,error} =Data;
  const search=useSelector((state) => state.search)
 
  const {searchData}=search;
  
  const dispatch=useDispatch()
  const [data,setData]=useState([]);
  useMemo(() => {
     setData(searchData ? userData.filter((item) => item.name.includes(searchData)) : userData);
  },[searchData,userData])
  
  return (
    <>
    {loading?<h1> Data Loading</h1>:(error)? (<h1>Error Occurred :  {error}</h1>):(
      <>
       <h1 className={showBorder? "employee-header show-border":"employee-header"}>Employee Data</h1>
       <div className="searchArea">
         <input type="search" onChange={(e) => dispatch(searchEmployeeAction(e.target.value))} />
       </div>
 
       {userData.length > 0 ? <EmployeeList data={data} /> : <h1>Loading....</h1>}
       <Link to="/addEmp"><button>Add Employee</button></Link>
       <button onClick={()=> setShowBorder(!showBorder)}>Change the Heading Border</button>
       </>
    )}
     
    </>
  );
}






