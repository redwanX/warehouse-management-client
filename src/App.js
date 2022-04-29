import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import Inventroy from './Pages/Inventory/Inventroy';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddItem from './Pages/AddItem/AddItem';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><Inventroy></Inventroy></RequireAuth>}></Route>
        <Route path='/manageInventory' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>
        <Route path='/addItem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
