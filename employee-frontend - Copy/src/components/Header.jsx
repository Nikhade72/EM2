import React, { useEffect, useState } from 'react'

const Header = () => {
    const [userrole, setUserRole] = useState('');
    useEffect(() => {
        const storedUserRole = sessionStorage.getItem('userrole');
        setUserRole(storedUserRole);
      }, []);
      if (userrole === 'admin') {
        return (
            <div>
              <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Employee App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/addemployee">Create Employees</a>
                <a class="nav-link" href="/admin">View Employees</a>
                <a class="nav-link" href="/">Logout</a>
                
              </div>
            </div>
          </div>
        </nav>
            </div>
          )
      } else {
        return (
            <div>
              <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Employee App</a>
            <a class="nav-link" href="/">Logout</a>
          </div>
        </nav>
            </div>
          )
      }
  
}

export default Header
