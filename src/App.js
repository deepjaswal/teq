import logo from './logo.svg';
import './App.css';
import Ai from './pages/ai/Ai';
import Aipromt from './pages/Aipromt/Aipromt';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <Routes>
    <Route path='' element={<Ai/>}></Route>
    <Route path='/prmonts' element={<Aipromt/>}></Route>
   </Routes>
    
    
   </>
  );
}

export default App;
