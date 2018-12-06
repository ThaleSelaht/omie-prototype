import React from 'react';
import 'antd/dist/antd.css';
import '@progress/kendo-theme-default/dist/all.css';
import { Row, Col } from 'antd';
import ChartContainer from './components/ChartContainer';
import DonutContainer from './components/DonutContainer';
import FunnelContainer from './components/FunnelContainer';

class Dashboard extends React.Component {
  render() {
    return (
      <div>        
      <Row>
        <Col span={24}>
          <ChartContainer />
        </Col>        
      </Row>
      <Row>
        <Col span={12}>
        <DonutContainer />
        </Col>
        <Col span={12}>
        <FunnelContainer/>
        </Col>
      </Row>
      </div>
    );
  }
}

export default Dashboard;
