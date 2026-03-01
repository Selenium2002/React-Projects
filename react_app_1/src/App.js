import './App.css';
import Employee from './components/Employee';
import Header from './navbar/navbar';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './users/UsersCl';
import UsersFunc from './users/usersFunc';
import AddUser from './users/addUser';

function App() {
  const [role, setRole] = useState('GIS Analyst');
  const [employees, setEmployees] = useState(
    [
      {
        name: 'Ayesha',
        role: 'Web Developer',
        img:
          'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress & cs=tinysrgb& w=1260 & h=750 & dpr=1',
      },
      {
        name: 'John',
        role: 'Front end Developer',
        img:
          'https://images.pexels.com/photos/694438/pexels-photo-694438.jpeg?auto = compress & cs=tinysrgb & w=1260 & h=750 & dpr=1',
      },
      {
        name: 'Caleb',
        role: 'Back end Developer',
        img:
          'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto = compress & cs=tinysrgb & w=1260 & h=750 & dpr=1',
      },
      {
        name: 'Elsa',
        role: 'Engineer',
        img:
          'https://images.pexels.com/photos/3610877/pexels-photo-3610877.jpeg?auto = compress & cs=tinysrgb & w=1260 & h=750 & dpr=1',
      },
    ]);

  const showEmployees = true;

  return (
    <div className="App mw-100 h-auto p-10">
      <h2 className='fs-2 fw-semibold text-decoration-underline text-danger mb-5'>Navbar class component</h2>
      <Header />
      <br /><hr /><br />
      <Users />
      <br /><hr /><br />
      <UsersFunc />
      <br /> <br /> <hr /><br /><br />
      <AddUser/>
      <br /> <br /> <hr />
      <h2 className='text-3xl text-blue-800 my-5 underline'>Emloyee functional component</h2>
      {showEmployees ? (
        <>
          <input type='text' onChange={(e) => {
            setRole(e.target.value);
          }} />
          <div className='flex flex-wrap justify-center'>

            {employees.map((employee, index) => {
              return (
                <Employee
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  key={index}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You won't be able to see these employees</p>
      )}

    </div>
  );
}
export default App;

