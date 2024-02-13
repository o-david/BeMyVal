import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Img1 from "./assets/Img1.jpg";
import './App.css'
import Home from './pages/Home';
import Yes from './pages/Yes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element= {<Home />} />
        <Route path='/yes' element= {<Yes />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
