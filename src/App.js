import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import { Timeline, Icon } from 'antd';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          <Link to="/sobre">Ir para a página sobre \o/</Link>
        </p>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type="phone" style={{ fontSize: '16px' }} />} color="green">Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

export default App;
