import React from 'react'

 const EmployeeDetails = ({userData, match}) => {
     let a;
     console.log("Shubhankar", userData, match.params.id)
        a= userData.filter((item)=> item.id===Number(match.params.id))
        
    return (
        <div>
            <h1>Employee Details </h1>
            <p>Id: {a[0].id}</p>
            <p>Name: {a[0].name}</p>
            <p>street: {a[0].address.street}</p>
            <p>suite: {a[0].address.suite}</p>
            <p>city: {a[0].address.city}</p>
            <p>zipcode: {a[0].address.zipcode}</p>
        </div>
    )
}
export default EmployeeDetails
