import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginTemp } from '../store/userloginSlice';
import GoogleSignin from './GoogleSignin';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    dispatch(loginTemp(true))
    navigate('/Dashboard')
  };
  return (
    <center>
    <div className='col-lg-3 mt-5' style={{border:'1px solid #80808029',borderRadius:'5px',boxShadow: '0 0 0 2px #ccc'}}>
    <div style={{marginTop:'-20px'}}> <GoogleSignin/></div>

    <h2
                        className="no-span mt-3"
                        style={{  color: "#00000085" }}
                      >
                        <b>(OR)</b>
                      </h2>
    <Form
      name="normal_login"
      className="login-form mt-3 p-2"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="p-1 w-100  text-white" style={{border:'1px solid #47A992',borderRadius:'25px',backgroundColor:'#47A992',fontWeight:'bold'}}>
          Login
        </Button>

        Or <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
    </div>
    </center>
  );
};
export default Login;
