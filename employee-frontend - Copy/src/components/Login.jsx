import axios from 'axios';
import React, { useState } from 'react'


import {useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [user,setUser] =useState({});
  const inputHandler=(e)=>{
    setUser({
      ...user,[e.target.name]:e.target.value
    })
    console.log(user)
  }
  const addHandler=()=>{
    console.log('buttonclikced',user);
    axios.post("http://localhost:5000/api/login",user).then((response)=>{
      if(response.data.message==="Login Success"){
        const token = response.data.token;
        const user_id = response.data.data._id;
        const role = response.data.data.role;
        console.log(token);
        console.log(user_id);
        console.log(role);
        sessionStorage.setItem("userToken",token);
        sessionStorage.setItem("userId",user_id);
        sessionStorage.setItem("userrole",role);
        console.log('sessionstored');
        alert(response.data.message);
        if (role==='admin') {
            navigate('/admin')
        } else {
            navigate('/admin')
        }
       
        // Navigate('/viewallposts')
      }
      else{
        console.log('login failed')
      }
    })
  }
  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12"></div>
            <div className="row g-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label htmlFor="">Name</label>
                        <input type="text" className='form-control' name='username' onChange={inputHandler}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label htmlFor="">password</label>
                        <input type="text" className='form-control' name='password' onChange={inputHandler}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <button className="btn btn-success" onClick={addHandler}>Submit</button>
                    </div>
                   
                    <a class="success" href="/register">Register</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
