import React from 'react';
import './style.css';
import { Timeline , Icon } from 'antd';

class StepsContents extends React.Component {

  render() {
    return (
      <Timeline style={{background:'#FFF', margin: '10px 10px 0 0', padding: 10}}>
        <Timeline.Item>Ligar 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    );
  }
}

export default StepsContents;