import React from 'react';
import { Link } from 'react-router-dom';
import './Employee.css';
const Employee = (props) => {
  return (
    <div className="employee">
      <Link to={`/employee/${props.employee.id}`}> 
      <h4>{props.employee.name}</h4></Link>
    </div>
  );
};

export default Employee;