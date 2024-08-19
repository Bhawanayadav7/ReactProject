import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Home';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Section3 from './Section3';
import Section8 from './Section8';
import Cont from './Cont';
import Const1 from './Const1';
import Log from './Log';
import Service from './Service';
import Shop from './Shop'
function App() {
  return (<div className="">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Section8' element={<Cont />} />
        <Route path='/Section3' element={<Const1 />} />
        <Route path='/LoginSignup' element={<Log />} />
        <Route path='/Section2' element={<Service />} />
        <Route path='/Section5' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
