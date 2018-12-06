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
      <Row>
        <Col span={24}>
          <ChartContainer />
          <DonutContainer />
          <FunnelContainer/>
        </Col>
      </Row>
    );
  }
}

export default Dashboard;
