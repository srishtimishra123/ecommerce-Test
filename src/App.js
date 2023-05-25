 import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Signup from './accounts/Signup';
import Login from './accounts/Login';
import Dashboard from './accounts/Dashboard';
import Checkout from './pages/Checkout';
import CheckoutForm from './pages/CheckoutForm';
import SuccesssPage from './pages/SuccessPage';
import Nav1 from './components/Nav1';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
               <Nav1/>
                                   {/* <Navbar /> */}
                   
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/signup" element={<Signup/>}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/Dashboard" element={<Dashboard/>}></Route>
                        <Route path="/checkout" element={<Checkout/>}></Route>
                        <Route path="/payment" element={<CheckoutForm/>}></Route>
                        <Route path="/success" element={<SuccesssPage/>}></Route>




                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;