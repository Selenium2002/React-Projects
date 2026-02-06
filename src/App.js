
import './App.css';
import Employee from './components/Employee'; 
import Navbar from './navbar/navbar';
import { useState } from 'react';

function App() {
  const [role, setRole]=useState('GIS Analyst');
  const showEmployees = true;
  return (
    <div className="App">
      <h2 style={{color: "blue", textDecoration: "underline"}}>Emloyee functional component</h2>
      {showEmployees ? (
        <>
          <input type='text' onChange={(e)=> {
            console.log(e.target.value);
            setRole(e.target.value);  
          }}/>

          <Employee name="Ahmed" role="Software Engineer" experience="15 years"/>
          <Employee name="Mohammed" role={role}/>
          <Employee name="Ismail"/>

        </>
      ) : (
        <p>You won't be able to see these employees</p>
      )}
      <br /> <br /> <hr /> <hr />
      <h2 style={{color: "red", textDecoration: "underline"}}>Navbar class component</h2>
      <Navbar/>
    </div>
  );
}
export default App;

