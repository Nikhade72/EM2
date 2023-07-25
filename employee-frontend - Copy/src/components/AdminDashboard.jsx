import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AddEmployee from './AddEmployee'
const AdminDashboard = () => {
    const [data,setData]=useState([]);
    const[update,setUpdate]=useState(false);
    const[singleValue,setSingleValue]=useState([]);
  const [userrole, setUserRole] = useState('');
  const fetchDataFromApi= ()=>{
    axios.get("http://localhost:5000/api/employeelist/" ).then(
    (response)=>{
        console.log(response.data)
        setData(response.data)
    }
    )
}
  useEffect(() => {
    const storedUserRole = sessionStorage.getItem('userrole');
    setUserRole(storedUserRole);
    fetchDataFromApi();
  }, []); 
  const deleteBlog =(id)=>{
    console.log('id delete');
    console.log(id);
    axios.delete("http://localhost:5000/api/employeelist/" + id)
    .then((response)=>{
        alert(response.data.message);
        window.location.reload(false);
    })
}

const updateBlog =(val)=>{
    setUpdate(true);
    setSingleValue(val);


}

  if (userrole === 'admin') {
    console.log('admin access');
    let finalJSX=  <div>
    <div className="container mt-5 pt-5">
<div>
<table class="table">
<thead>
<tr>
<th scope="col">ID</th>
<th scope="col">Name</th>
<th scope="col">Position</th>
<th scope="col">Location</th>
<th scope="col">Salary</th>
<th scope="col">Del</th>
<th scope="col">Update</th>
</tr>
</thead>
<tbody>

{data.map((value,index)=>{
        return<tr key={index}>
            <td>{index}</td>
      <td>{value.name}</td>
      <td>{value.position}</td>
      <td>{value.location}</td>
      <td>{value.salary}</td>
      <td><button class="btn btn-danger" onClick={()=>deleteBlog(value._id)}>Delete</button></td>
      <td> <button class="btn btn-success" onClick={()=>updateBlog(value)}>Update</button></td>
      </tr>
      })}
</tbody>
</table>
</div>
</div>
</div>
if (update) finalJSX=<AddEmployee method='put' data={singleValue}/>
return (
    finalJSX
);
    
  } else {
    console.log('9999999');
    return (
        <div>
             <div className="container mt-5 pt-5">
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Location</th>
      <th scope="col">Salary</th>
   
    </tr>
  </thead>
  <tbody>
    
    {data.map((value,index)=>{
                return<tr key={index}>
                    <td>{index}</td>
              <td>{value.name}</td>
              <td>{value.position}</td>
              <td>{value.location}</td>
              <td>{value.salary}</td>
              
              </tr>
              })}
  </tbody>
</table>
</div>
    </div>
        </div>
      );
  }

 
};

export default AdminDashboard;
