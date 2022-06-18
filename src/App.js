import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Leave from './components/homeComp/LeaveTab';
import Login from './components/homeComp/Login';
import Price from './components/homeComp/Price';
import Register from './components/homeComp/Register';
import Watch from './components/homeComp/Watch';
import Footer from './pages/Footer';

import Home from './pages/Home';
import Netflix from './pages/Netflix';
import './style/app.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='Leave' element={<Leave/>}/>
          <Route path='Watch' element={<Watch/>}/>
          <Route path='Price' element={<Price/>}/>
        </Route>
        <Route path='Login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='Netflix' element={<Netflix/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
