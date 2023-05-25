import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cart from "../image/cart.png"
import { loginTemp } from '../store/userloginSlice';
import { removeAll } from '../store/cartSlice';


const Navbar = () => {
    const items = useSelector((state) => state.cart);
    const login=useSelector((state)=>state.loginTemp);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout =()=>{
        localStorage.clear()
        dispatch(loginTemp(false))
        dispatch(removeAll([]))
        // window.location.reload()
        navigate('/')

    }   
    console.log("loginvalue ",login)
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">Ecommerce</span>
            <div>
                {
                    login?.login?<>
                    <Link to='/Dashboard'  className="navLink"><button style={{border:'1px solid #47A992',borderRadius:'25px',width:'100px',color:'white',backgroundColor:'#47A992',fontWeight:'bold',padding:'5px'}}>Dashboard</button></Link>
                    <button className='mx-2' onClick={logout} style={{border:'1px solid #47A992',borderRadius:'25px',width:'100px',color:'white',backgroundColor:'#47A992',fontWeight:'bold',padding:'5px'}}>Logout</button>

                    </>:<>
                    <Link to='/signup'  className="navLink"><button style={{border:'1px solid #47A992',borderRadius:'25px',width:'100px',color:'white',backgroundColor:'#47A992',fontWeight:'bold',padding:'5px'}}>Signup</button></Link>
                <Link to='/login'  className="navLink"><button style={{border:'2px solid #47A992',borderRadius:'25px',width:'100px',color:'#47A992',backgroundColor:'white',fontWeight:'bold',padding:'5px'}}>Login</button></Link>
                    </>
                }
               
                
                <Link className="navLink" to="/">
                    Product
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount"><span><img src={cart} style={{width:'60px',height:'30px'}}/ ></span>Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;