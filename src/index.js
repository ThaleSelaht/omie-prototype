import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Funil from './Funil';
import Funil2 from './Funil2';
import Funil3 from './Funil3';
import Fluxo from './Fluxo';
import Relatorio from './Relatorio';
import Lead from './Lead';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';

import { Layout, Menu, Icon, Button, Dropdown, Input, notification, Tag } from 'antd';

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
const openNotification = () => {
    const lead = (
      <a href="/lead">
      <div>
        <div><Icon type={'user'} />Michelangelo</div>
        <Tag color="#CC4F46">Consultoria</Tag>
      </div>
      </a> 
    );
    notification.open({
      message: 'Você tem um novo Lead!',
      description: lead,
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
      duration: 2
    });  
  };
class App extends React.Component {
    constructor(props){
        super(props);
        this.escFunction = this.escFunction.bind(this);
    }
    escFunction(event){
    if(event.keyCode === 27) {
        openNotification();
    }
    }
    componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
    }
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
        <div>
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
                <Link to="/funil/1">
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
                    <span>Relatório</span>
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
                <Route path="/funil/1" exact={true} component={Funil3} />
                <Route path="/funil/2" exact={true} component={Funil} />
                <Route path="/funil/3" exact={true} component={Funil2} />
                <Route path="/fluxo" component={Fluxo} />
                <Route path="/relatorio" component={Relatorio} />
                <Route path="/lead" component={Lead} />                
                </Switch>
            </Content>
            </Layout>
        </Layout>
        </div>
        </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
