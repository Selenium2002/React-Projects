
import './App.css';
import Employee from './components/Employee'; 

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>

          <Employee name="Ismail"/>
          <Employee name="Mohammed" role="Doctor"/>
          <Employee name="Ahmed" role="Software Engineer" experience="15 years"/>

        </>
      ) : (
        <p>You won't be able to see these employees</p>
      )}

    </div>
  );
}
export default App;

