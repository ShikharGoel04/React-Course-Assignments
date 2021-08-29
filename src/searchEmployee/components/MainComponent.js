import React, {useState,useEffect, useMemo} from 'react'
import EmployeeList from './EmployeeList/EmployeeList';
export default function MainEmp({userData}) {


const [search,setSearch] = useState('');
const[showBorder,setShowBorder]=useState(false);

  const [data,setData]=useState([]);
  useMemo(() => {
     setData(search ? userData.filter((item) => item.name.includes(search)) : userData);
  },[search,userData])
  console.log(userData)
  return (
    <>
      <h1 className={showBorder? "employee-header show-border":"employee-header"}>Employee Data</h1>
      <div className="searchArea">
        <input type="search" onChange={(e) => setSearch(e.target.value)} />
      </div>

      {userData.length > 0 ? <EmployeeList data={data} /> : <h1>Loading....</h1>}
    
      <button onClick={()=> setShowBorder(!showBorder)}>Change the Heading Border</button>
    </>
  );
}






