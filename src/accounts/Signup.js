import React,{useState,useEffect} from 'react'
import {  Form, Input } from 'antd';
import validator from "validator";
import { isMobile } from "react-device-detect";
import GoogleSignin from './GoogleSignin';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginTemp } from '../store/userloginSlice';
const Signup = ()=>{
  const dispatch = useDispatch();
    const navigate = useNavigate();
const[error,setError]=useState('')
    const[state,setState]=useState(null)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmpass,setConfirmPass]=useState('')

    const mobileStyle ={
      padding:'5px'
    }
    const desktopStyle={
      padding:'50px'
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !email || !password || !confirmpass){
            setState(false)
            setError("please fill all details");
        }else if(!name || !validator.isByteLength(name, 3, 20) ){
            setError(!name?"name is emtpy":"name should not be more than 8 character"); 

        }else if(!email || !validator.isEmail(email)){
            setError(!email?"email is emtpy":"email is not validate"); 
        }
        else if(!validator.isEmail(email)){
            setError("email is need to validate");

        }else if(!password || !validator.isStrongPassword(password)){
            setError(!password?"password is emtpy":"this is not the strong password"); 

        }else if(password !== confirmpass){
            setError("Passwords and confirm password doesn't match");
        
        }else{
            setState(true)
            dispatch(loginTemp(true))
            navigate('/Dashboard')
        }

    }

  
    return(
        <>
      
       <div className='row mt-5'>
        <div className='col-lg-2'></div>
        <div className='col-lg-4 ' style={{border:'1px solid #80808029',borderRadius:'5px',boxShadow: '0 0 0 2px #ccc',backgroundColor:'#47A992'}}>
         <div style={{margin:'50% auto'}}>
          <h3 className='text-white' >Welcome Back!</h3>
          <p className='text-white'>To keep connected with us please login <br/>
             with your personal info</p>
          <button className=' bg-white' style={{border:'2px solid white',color:'#47A992',borderRadius:'15px',width:'100px',fontWeight:'bold'}}>Login</button>
        </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 ' style={{border:'1px solid #80808029',borderRadius:'5px',boxShadow: '0 0 0 1px #ccc',backgroundColor:'white'}}>
          <div  style={isMobile ? mobileStyle : desktopStyle}>
            <h3 style={{color:'#47A992'}}>Create Account</h3>
            <h2
                        className="no-span mt-3"
                        style={{  color: "#00000085" }}
                      >
                        <b>(OR)</b>
                      </h2>
            <div  style={{marginTop:'-30px'}}> <GoogleSignin/></div>
           
        
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter your name" className='w-100 mt-4 p-2' style={{border:'1px solid #00000026',borderRadius:'5px'}}/>
          
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email" className='w-100 mt-3 mb-3 p-2'  style={{border:'1px solid #00000026',borderRadius:'5px'}}/>
       {/* <label className='mt-3'>Password</label> */}
            <Form.Item
        name="password"
        
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password  placeholder='enter password' className='p-2'/>
      </Form.Item>
    
      <Form.Item
        name="password"
       
        value={confirmpass} onChange={(e)=>setConfirmPass(e.target.value)}
        
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="enter confirm password" className='p-2'/>
      </Form.Item>
<button onClick={handleSubmit} className="p-2 w-50  text-white" style={{border:'1px solid #47A992',borderRadius:'25px',backgroundColor:'#47A992',fontWeight:'bold'}}>Sign Up</button>
{state===false && <p className='text-danger'>{error}</p>}
{state===true && <p className='text-success'>Registration successful</p>}
        </div>
        </div>
        </div>
        </>
    )
}

export default Signup;