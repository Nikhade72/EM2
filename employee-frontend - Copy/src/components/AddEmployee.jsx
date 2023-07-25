import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddEmployee = (props) => {
  
    const navigate = useNavigate();
    const[userToken,setUserToken]= useState(sessionStorage.getItem("userToken"));
    const[userId,setUserID]= useState(sessionStorage.getItem("userId"))
    const [employee, setEmployee] = useState(props.data);
    const inputHandler = (e) => {
      const { name, value } = e.target;
      setEmployee({
        ...employee,
        [name]: value,
      });
    };

  const addEmployee = () => {
    let data = {
      userId: userId,
      token: userToken,
      name: employee.name,
      location: employee.location,
      position: employee.position,
      salary: employee.salary
    };
    console.log("Add clicked");
    console.log('userId');
    console.log(userToken);
    // console.log(props.data);
    if(props.method === "post"){
    axios
      .post("http://localhost:5000/api/employeelist", data)
      .then((response) => {
        if (response.data.message === "Created Succesfully") {
          alert(response.data.message);
          navigate("/admin");
        } else {
          alert(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
    if(props.method === "put"){
      console.log('put')
      axios
        .put("http://localhost:5000/api/employeelist/"+employee._id, employee)
        .then((response) => {
          if (response.data.message === "Updated Succesfully") {
            alert(response.data.message);
            navigate("/admin");
          } else {
            alert(response.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
  };
  return (
    <div>
    

      <div className="container">
        <div className="row">
        <div className="col col-12 col-sm-6 col-md-6">
            <br />
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12">
              <label htmlFor="">UserName</label>
                        <input type="text" className='form-control' name="name"  value={employee.name} onChange={inputHandler} placeholder="Name"/>
              </div>
                  
              <div className="col col-12 col-sm-12 col-md-12">
              <input type="text" className='form-control' name="location"  value={employee.location} onChange={inputHandler} placeholder="Location"/>
                
              </div>
              <div className="col col-12 col-sm-12 col-md-12">
              <input type="text" className='form-control' name="position"  value={employee.position} onChange={inputHandler} placeholder="Position"/>
              
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                <input type="number" class="form-control" name="salary" onChange={inputHandler}    value={employee.salary}  placeholder="Salary" />
              
                </div>
              <div className="col col-12 col-sm-12 col-md-12">
                <button className="btn btn-success" onClick={addEmployee}>
                  {" "}
                 Submit
                </button>
              </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee
