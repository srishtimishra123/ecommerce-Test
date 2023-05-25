import { Button, Form, Input, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { addProfileFinal } from '../store/finalUserDataSlice';
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


const CheckForm = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
   
  dispatch(addProfileFinal(values))
    console.log(values);
  };

  return <>
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
    className='mt-5'
  >
    <Form.Item
      name={['user', 'firstname']}
      label="First Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'lastname']}
      label="Last Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={[ 'Company name']}
      label="Company Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={[ 'Address']}
      label="Address"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
          name="Zipcode"
          label="Zipcode"
          rules={[
            {
              required: true,
              message: "Please input your zipcode!",
            },
            {
              pattern: new RegExp("^[0-9]*$"),
              message: "Wrong format!",
            },
          ]}
        >
          <Input
         
            maxLength={6}
            minLength={6}
        
            style={{
              width: "100%",
            }}
          />
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
         
            maxLength={10}
            minLength={10}
        
            style={{
              width: "100%",
            }}
          />
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
      <Input />
    </Form.Item>
  
    
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit" className='w-25' style={{border:'1px solid #47A992',borderRadius:'5px',backgroundColor:'#47A992',fontWeight:'bold',color:'white'}}>
        Submit
      </Button>
    </Form.Item>
  </Form>
  </>
}



export default CheckForm;