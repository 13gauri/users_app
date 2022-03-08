import './App.css';
import AddUser from './pages/AddUser';
import EditUserForm from './pages/EditUserForm';
import Home from "./pages/Home"; 

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>} />

          <Route path='/add_user' element={<AddUser />} />

          <Route path='/edit_user/:userId' element={<EditUserForm/>} />

          <Route path='*' element={<h1>Page Not Found</h1>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
