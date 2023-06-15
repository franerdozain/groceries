import logo from './logo1.png';
import './App.css';
import GroceriesList from './GroceriesList';

function App() {
  return (
    <div>
      <header className="navbar navbar-light bg-success">
        <div className="container">
          <img src={logo} className="rounded float-start img-fluid logo-header" alt="logo" />
          <p className="text-white fs-1 text-center fw-bold ">KWIK-E-MART</p>
        </div>
      </header>
      <div className="App ">
       <GroceriesList />
      </div>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
