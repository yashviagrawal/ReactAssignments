import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

class ContactMePage extends Component {
  handleSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Form
          onFinish={this.handleSubmit}
          style={{ width: 400 }}
          layout="vertical"
        >
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
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ContactMePage;
