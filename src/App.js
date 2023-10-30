import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Help from './Help';
import Foot from './Foot';
import Card from './Card';
import Sign from './Sign';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  
  return (
    <>
<BrowserRouter>
<Routes>
 
    <Route path='/' element={<Home/>}/>
    <Route path='/Sign' element={<Sign/>}/>
    <Route path='/Help' element={<Help/>}/>
    
  
</Routes>
</BrowserRouter>

    </>
  );
}

export default App;
