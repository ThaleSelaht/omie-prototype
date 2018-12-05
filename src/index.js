import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import SideBar from './components/Sidebar';
import * as serviceWorker from './serviceWorker';
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
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
        </Switch>        
        </Col>
        </Row>
        <Row>
        
        </Row>
        
        </div>
    </ Router>   
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
