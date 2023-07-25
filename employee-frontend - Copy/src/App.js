
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import AdminDashboard from './components/AdminDashboard';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" exact element={<Login/>} />
     <Route path="/register" exact element={<Register/>} />
     <Route path="/admin" exact element={<Main child={<AdminDashboard/>}/>} />
     <Route path="/addemployee" exact element= {<Main child={<AddEmployee method="post" data = {{name: "", location: "", position: "", salary: ""}} /> } />} />
  
    
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
