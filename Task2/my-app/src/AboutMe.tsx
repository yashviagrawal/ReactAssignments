import React, { Component } from 'react';
import { Card } from 'antd';

class AboutMe extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ width: 400 }}>
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate developer who loves to explore new technologies and create
            amazing applications. In my free time, I enjoy coding, reading, and spending time
            outdoors.
          </p>
          <p>
            If you want to learn more about my journey and interests, feel free to connect with me.
          </p>
        </Card>
      </div>
    );
  }
}

export default AboutMe;
