import React from 'react';
import Employee from '../Employee/Employee';
import './EmployeeList.css';
const EmployeeList = ({ data }) => {
  return (
    <div className="employee-list">
      {data.length >0 ? (data.map((item, index) => (
        <Employee employee={item} key={index} />
      ))):<h1>No Data Found...</h1>}
    </div>
  );
};

export default EmployeeList;