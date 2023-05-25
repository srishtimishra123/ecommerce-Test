import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CheckForm from './CheckForm'


const Checkout = ()=>{

    const products = useSelector((state) => state.cart);
    const userDataPayment = useSelector((state) => state.orderUserData);
    const navigate=useNavigate()
    const [totalPrice,setTotalPrice]=useState(0)
     const paymentMethod=(e)=>{
e.preventDefault()
navigate("/payment")
     }
    useEffect(()=>{
        console.log(userDataPayment)
        let price=0
        products.forEach(element => {
            price=price+element.price
        });
        setTotalPrice(price)
    },[])
    return(
        <>
       <div className="container">
  <div className="title">
    
  </div>
  <div className='row'>
  <div className='col-lg-6'>
  <h2>Product Order Form</h2>
  <CheckForm/>
  </div>
  <div className='col-lg-6 mt-5' >
  <h3>Your order</h3>

    <div className="Yorder mt-21" style={{border:'2px solid #47A992',borderRadius:'10px'}}>
    
        <div  className='p-3'>
            <div className='d-flex justify-content-between'>
                <b>Product Name x {products.length}(Qty)</b>
                <p>{totalPrice}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <b>Subtotal</b>
                <p>{totalPrice}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <b>Shipping</b>
                <p>Free shipping</p>
            </div>
           
            </div>
      
    
     
      <div>
       
      </div>
      {Object.entries(userDataPayment.data).length === 0?<button disabled className='m-3' style={{borderRadius:'10px'}}>Proceed to Payment </button>
      :
      <button className='mt-2 w-50 mb-2' style={{border:'1px solid #47A992',borderRadius:'5px',backgroundColor:'#47A992',fontWeight:'bold',color:'white'}}
      type="button"  onClick={paymentMethod}>Proceed for payment</button>}
{/* 
<button className='mt-2 w-50 mb-2' style={{border:'1px solid #47A992',borderRadius:'5px',backgroundColor:'#47A992',fontWeight:'bold',color:'white'}}
      type="button" disabled={Object.entries(userDataPayment.data).length === 0}  onClick={paymentMethod}>Proceed for payment</button> */}
    </div>
    </div>
    </div>
    {/* Yorder */}
 
</div>

        </>
    )
}

export default Checkout