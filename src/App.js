import logo from './logo.svg';
import './App.css';
import AddUser from './component/AddUser';
import Navbar from './component/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AllUser from './component/AllUser';
import AyushiSaini from './component/AyushiSaini';



function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
    <Route path='/' element={<AddUser/>}/> 
    <Route path='/all' element={ <AllUser/>}/> 
    <Route path='/add' element={  <AyushiSaini/>}/> 
     </Routes>
    
  </BrowserRouter>

   
  
 
    
  );
}

export default App;
