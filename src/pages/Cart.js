import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import cart from '../image/cart.gif'

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div style={{overflowX:'hidden'}}>
            <h3 className='mt-5'>Cart</h3>
            <div className="cartWrapper" >
                {products.map((product) => (
                    <center>
                    <div key={product.id} className="cartCard w-50" style={{border:'2px solid #47A992'}}>
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <div>
                        <button  style={{border:'2px solid #47A992',borderRadius:'5px',color:'#47A992',backgroundColor:'white',fontWeight:'bold',padding:'5px'}}
                            
                            className="w-100"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                        
                        </div>
                    </div>
                    </center>
                ))}
            </div>
          
                
                
                
            
            {products.length!=0? <Link to="/checkout">

<button
    className="w-50" style={{border:'2px solid #47A992',borderRadius:'5px',color:'#47A992',backgroundColor:'white',fontWeight:'bold',padding:'5px'}}
    
>
  Proceed To Checkout
</button></Link>:
<center>
    <div className='col-lg-5' style={{margin:'50px auto'}}>
<h1>No Data in Carts</h1>
<img src={cart} alt="GIF" style={{width:'500px',height:'300px'}}/>
</div>
</center>

            }
           
        </div>
    );
};

export default Cart;