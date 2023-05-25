import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  './CheckoutForm.css'

const CheckoutForm = ()=>{
  const userDataPayment = useSelector((state) => state.orderUserData);
  const cart=useSelector((state) => state.cart);
  const navigate=useNavigate()
  const [totalPrice,setTotalPrice]=useState(0)
  const successMethod=(e)=>{
    e.preventDefault()
    navigate("/success")
         }
  useEffect(()=>{

    console.log(userDataPayment)
    let price=0
    cart.forEach(element => {
        price=price+element.price
    });
    setTotalPrice(price)
},[])
    return(
        <>
          <div className="row">
  <div className="col-lg-4" >
      <h3 className='mt-5'>Billing Address</h3>
    <div className="container" style={{border:'2px solid #47A992',borderRadius:'10px'}}>
      <form action="/action_page.php">
        <div className="row">
          <div className="col-50">
          
            {/* <label htmlFor="fname">
              <i className="fa fa-user" /> Full Name
            </label>
           <p>{userDataPayment.data.profile.user.firstname}</p>
            <label htmlFor="email">
              <i className="fa fa-envelope" /> Email
            </label>
            <p>{userDataPayment.data.profile.user.email}</p>
            <label htmlFor="adr">
              <i className="fa fa-address-card-o" /> Address
            </label>
            <p>{userDataPayment.data.profile.Address}</p> */}
            <div  className='p-3'>
            <div className='d-flex justify-content-between'>
                <b>Full Name</b>
                <p>{userDataPayment.data.profile.user.firstname}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <b>Email</b>
                <p>{userDataPayment.data.profile.user.email}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <b> Address</b>
                <p>{userDataPayment.data.profile.Address}</p>
            </div>
           
            </div>
           
           
           
          </div>
         
        </div>
        {/* <label>
          <input type="checkbox" defaultChecked="checked" name="sameadr" />{" "}
          Shipping address same as billing
        </label><br/> */}
        {/* <input
          type="submit"
          defaultValue="Continue to checkout"
          className="btn text-white m-2"
          style={{border:'1px solid #47A992',borderRadius:'25px',backgroundColor:'#47A992',fontWeight:'bold'}}
        /> */}
      </form>
    </div>
  </div>
  <div className="col-lg-4 mt-3" >
            <h3>Payment</h3>
            <label htmlFor="fname">Accepted Cards</label>
            {/* <div className="icon-container">
              <i className="fa fa-cc-visa" style={{ color: "navy" }} />
              <i className="fa fa-cc-amex" style={{ color: "blue" }} />
              <i className="fa fa-cc-mastercard" style={{ color: "red" }} />
              <i className="fa fa-cc-discover" style={{ color: "orange" }} />
            </div> */}
            <div  className='p-3' style={{border:'1px solid #47A992',borderRadius:'25px',backgroundColor:'#47A992',fontWeight:'bold'}}>
            <div className='justify-content-between'>
                <b>Name on Card</b>
                <p><input
              type="text"
              id="cname"
              name="cardname"
              placeholder="John More Doe"
            /></p>
            </div>
            <div className=' justify-content-between'>
                <b>Credit card number</b>
                <p> <input
              type="text"
              id="cname"
              name="cardname"
              placeholder="John More Doe"
            /></p>
            </div>
            <div className='justify-content-between'>
                <b>Exp Month</b>
                <p> <input
              type="text"
              id="expmonth"
              name="expmonth"
              placeholder="September"
            /></p>
            </div>
            <div className='justify-content-between'>
                <b>Exp Year</b>
                <p> <input
                  type="text"
                  id="expyear"
                  name="expyear"
                  placeholder={2018}
                /></p>
            </div>
            <div className='justify-content-between'>
                <b>CVV</b>
                <p>   <input type="text" id="cvv" name="cvv" placeholder={352} /></p>
            </div>
           
            </div>
            {/* <label htmlFor="cname">Name on Card</label>
            <input
              type="text"
              id="cname"
              name="cardname"
              placeholder="John More Doe"
            />
            <label htmlFor="ccnum">Credit card number</label>
            <input
              type="text"
              id="ccnum"
              name="cardnumber"
              placeholder="1111-2222-3333-4444"
            />
            <label htmlFor="expmonth">Exp Month</label>
            <input
              type="text"
              id="expmonth"
              name="expmonth"
              placeholder="September"
            /> */}
            {/* <div className="row">
              <div className="col-50">
                <label htmlFor="expyear">Exp Year</label>
                <input
                  type="text"
                  id="expyear"
                  name="expyear"
                  placeholder={2018}
                />
              </div>
              <div className="col-50">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder={352} />
              </div>
            </div> */}
          </div>
  <div className="col-lg-4 mt-5" >
  <h4>
        Cart{" "}
        <span className="price" style={{ color: "black" }}>
          <i className="fa fa-shopping-cart" /> <b>4</b>
        </span>
      </h4>
      
    <div className="container" style={{border:'2px solid #47A992',borderRadius:'10px'}}>
     
      
      {cart.map(result=><p>
        <a href="#"> {result.title}</a> <span className="price">{result.price}</span>
      </p>) }
      
     
      <hr />
      <p>
        Total{" "}
        <span className="price" style={{ color: "black" }}>
          <b>{totalPrice}</b>
        </span>
      </p>
    </div>
  </div>
  <center>
  <button type="button"   className='w-50 mt-3'
   onClick={successMethod} 
   style={{border:'2px solid #47A992',borderRadius:'25px',color:'#47A992',fontWeight:'bold'}}>Proceed Checkout</button>
   </center>
</div>

        </>
    )
}

export default CheckoutForm