import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Funil from './Funil';
import Fluxo from './Fluxo';
import Relatorio from './Relatorio';
import SideBar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Row, Col } from 'antd';

ReactDOM.render(
    <Router>
        <div>
        <Row>
        <Col span={5}>
            <Route component={SideBar} />        
        </Col>
        <Col span={19}>
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/funil" component={Funil} />
            <Route path="/fluxo" component={Fluxo} />
            <Route path="/relatorio" component={Relatorio} />
        </Switch>        
        </Col>
        </Row>
        <Row>
        
        </Row>
        
        </div>
    </ Router>   
    , document.getElementById('root'));
