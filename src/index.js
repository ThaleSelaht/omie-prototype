import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Funil from './Funil';
import Fluxo from './Fluxo';
// import Relatorio from './Relatorio';
import Lead from './Lead';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';

import { Layout, Menu, Icon, Button, Dropdown, Input } from 'antd';

const { Header, Sider, Content } = Layout;
const Search = Input.Search;

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
      </Menu.Item>
    </Menu>
);
class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
        <Router>
        <Layout>
            <Route>
            <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={{ minHeight: '100vh' }}
            >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                <Link to="/">
                    <Icon type="bar-chart" />
                    <span>Dashboard</span>          
                </Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Link to="/funil">
                    <Icon type="filter" />
                    <span>Funil</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="3">
                <Link to="/fluxo">
                    <Icon type="cluster" />
                    <span>Fluxo</span>
                </Link>
                </Menu.Item>   
                <Menu.Item key="4">
                <Link to="/relatorio">
                    <Icon type="file-pdf" />
                    <span>Lead</span>
                </Link>
                </Menu.Item>
            </Menu>
            </Sider>
            </Route>
            <Layout>
            <Route>
            <Header style={{ background: '#fff', padding: 0, display:'flex', justifyContent: 'space-between' }}>
                <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                />
                <div>
                <Search
                    placeholder="Faça a sua busca..."
                    onSearch={value => console.log(value)}
                    style={{ width: 200, height: 32 }}
                    />
                <Button><Icon type="question-circle"></Icon></Button>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Button><Icon type="bell"></Icon></Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Button style={{ marginRight:20 }}><Icon type="global"></Icon></Button>
                </Dropdown>
                </div>
            </Header>
            </Route>
            <Content style={{
                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
            }}
            >
                <Switch>
                    <Route path="/" exact={true} component={Dashboard} />
                    <Route path="/funil" component={Funil} />
                    <Route path="/fluxo" component={Fluxo} />
                    <Route path="/relatorio" component={Lead} />
                    <Route path="/lead" component={Lead} />
                </Switch>
            </Content>
            </Layout>
        </Layout>
        </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
