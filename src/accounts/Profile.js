import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber,message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addProfile } from '../store/profileSlice';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);


  const onFinish = (values) => {
    dispatch(addProfile(values))
    console.log(values,"profile",profile);

  };
 
  return (
   
  <div className='col-lg-12 mt-5' >
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} >
  
      <Form.Item
      className="mt-3"
        name={['user', 'name']}
        label="Name"
        
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='enter your name' />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input  placeholder='enter your email'/>
      </Form.Item>
      <Form.Item
          name="PhoneNumber"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
            {
              pattern: new RegExp("^[0-9]*$"),
              message: "Wrong format!",
            },
          ]}
        >
          <Input
            placeholder="Enter Phone Number"
            maxLength={10}
            minLength={10}
        
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
      
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea  placeholder='enter message'/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit" className='w-25' style={{border:'1px solid #47A992',borderRadius:'25px',backgroundColor:'#47A992',fontWeight:'bold',color:'white',float:'left'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Profile;