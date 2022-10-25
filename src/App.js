import logo from './logo.svg';
import mainLogo from'./figmaLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='topSection'>
        <div className='myHeader'>
          <img width="300" src={mainLogo}></img>
        </div>

        <div className='myDivider'>
          <hr></hr>
        </div>

        <div className='myBody'>
          <p>Leading international tax advisory, specialized in CPG companies with global scale. Past clients include <a href="https://k2snow.com/">K2</a> and <a href="https://www.newellbrands.com/">Newell Brands</a>.</p>
        </div>
      </div>
      <div className='bottomSection'>
        <div className='myFooter'>
          <p>dysatoda@gmail.com</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
