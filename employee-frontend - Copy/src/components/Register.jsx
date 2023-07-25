import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom';

const Register = () => {
    const[inputs,setInputs]=useState({});
    const navigate = useNavigate()
    const inputHandler =(e)=>{
        console.log('working onchange');
        setInputs({
            ...inputs,[e.target.name]:e.target.value
        })
        console.log(inputs)
    }
  const submitHandler =()=>{
    console.log('button clicked',inputs)
    const dataToSend = {
        ...inputs,
        role: 'user', // Replace 'user' with the desired userrole value
      };
    axios.post("http://localhost:5000/api/user",dataToSend)
    .then((response)=>{
        console.log('response')
        if(response.data.message==="Registered Succesfully"){
            alert(response.data.message);
            navigate('/')
            
        }
    })
    .catch(err=>console.log(err))
  }

  return (
    <div>
     
               
      <div class="container mb-5 mt-4 ">
  <div class="row ">
    <div class="col-lg-12">
      <div class="card border-secondary"  >
        <div class="card-header" >Register</div>
          <div class="card-body p-5 bg-gradient-blue-card-1" >
          <div className="row g-3">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="">UserName</label>
                        <input type="text" className='form-control' name="username" onChange={inputHandler} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="">Email Id</label>
                        <input type="text" className='form-control' name="email" onChange={inputHandler} />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label htmlFor="">Address</label>
                        <input type="text" className='form-control' name="address" onChange={inputHandler} />
                    </div>
                </div>
                </div>
                <div className="row"> 
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="">phone</label>
                        <input type="text" className='form-control' name="phone" onChange={inputHandler} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="">Password</label>
                        <input type="text" className='form-control' name="password" onChange={inputHandler} />
                    </div>
                </div>
              <button  className="btn btn-success"  onClick={submitHandler}>Submit</button>
           
           </div>
          </div>
        </div>
    </div>

</div>
  )
}

export default Register
