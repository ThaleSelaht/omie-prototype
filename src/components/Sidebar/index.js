import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button> */}
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
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
            <span>Relatórios</span>
          </Link>
          </Menu.Item>       
        </Menu>
      </div>
    );
  }
}

export default SideBar;
