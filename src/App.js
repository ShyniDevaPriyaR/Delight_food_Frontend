import './App.css';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Sweets from './pages/Sweets';
import Snacks from './pages/Snacks';
import Pickle from './pages/Pickle';
import Masalas from './pages/Masalas';
import Mukhwas from './pages/Mukhwas';
import Bakery from './pages/Bakery';
import Sharbats from './pages/Sharbats';
import Regionalrice from './pages/Regionalrice';
import Carts from './pages/Carts';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { incrementzoo,decrementzebra} from "./redux/counterslice"
import Upload from './pages/Upload';
import GetProduct from './pages/Getproduct';
import Edit from './pages/Edit';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import Form from './pages/Form';
import Singlepagecrud from './pages/SinglepageCrud';
// import Single from './pages/Single';
function App() {

  const data=useSelector((state) => state.counter)
  const dispatch=useDispatch()
  const inc=() => dispatch(incrementzoo(10))
  // const dec=() => dispatch(decrementzebra())

  console.log(data)
  return (
       <div className="App">
        {/* <h1>zoo - {data.zoo}</h1>
          <button onClick={inc}>inc</button> */}
        {/* <h2>zebra - {data.zebra}</h2> 
          <button onClick={dec}>dec</button>  */}

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
                 <Home />
            </ProtectedRoute>
           } />
          <Route path='/sweets' element={<Sweets/>} />
          <Route path='/snacks' element={<Snacks/>} />
          <Route path='/pickle' element={<Pickle/>} />
          <Route path='/masalas' element={<Masalas/>} />
          <Route path='/mukhwas' element={<Mukhwas/>} />
          <Route path='/rice' element={<Regionalrice/>} />
          <Route path='/bakery' element={<Bakery/>} />
          <Route path='/sharbats' element={<Sharbats/>} />
          <Route path='/carts' element={<Carts/>} />
          <Route path='/upload' element={<Upload/>} />
          <Route path='/getproduct' element={<GetProduct/>} />
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/singlepagecrud' element={<Singlepagecrud/>} />
          {/* <Route path='/single' element={<Single/>} /> */}


        </Routes>
        <Footer />
      </BrowserRouter>








    </div>
  );
}

export default App;
