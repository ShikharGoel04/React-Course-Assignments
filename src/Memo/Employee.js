import React from 'react';
import '../searchEmployee/components/Employee/Employee.css'
const Employee = ({ name,change }) => {
  return (
    <div className="employee">
      <h4>{name}</h4>
      <h4>{change}</h4>
      {console.log("hi")}
    </div>
  );
};

export default Employee;