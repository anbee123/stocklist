import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';

import './App.css';
import StockPrices from './pages/StockPrices';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes> 
        <Route path ='/' element={<Home />} />
        <Route path ='/about' element={<About />} />
        <Route path ='/stocks' element={<Stock />} />
        <Route path='/stocks/:symbol' element={<StockPrices />} />
      
      </Routes>

    </div>
  );
}

export default App;
