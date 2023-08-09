import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { FormInstance } from 'antd/lib/form';

class ContactMePage extends Component {
  formRef = React.createRef<FormInstance>(); // Ref to access form methods

  handleSubmit = async (values: any) => {
    try {
      const response = await axios.post('http://localhost:3001/submitContact', values);

      if (response.status === 200) {
        message.success('Contact data saved successfully');
        // Reset the form after successful submission
        this.formRef.current?.resetFields();
      } else {
        message.error('Failed to save contact data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Form ref={this.formRef} onFinish={this.handleSubmit} style={{ width: 400 }}>
            <h2>Contact Me</h2>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ContactMePage;
