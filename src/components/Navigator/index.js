import React, { Component } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import {Dropdown, Menu, Icon, Button, Input} from 'antd';

const Search = Input.Search;

const Navi = styled.nav`
    display:flex;
    justify-content: flex-end;
`;

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

class Navigator extends Component {
  render() {
    return (
      <Navi>
        <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
        />
        <Button><Icon type="question-circle"></Icon></Button>
        <Dropdown overlay={menu} placement="bottomRight">
            <Button><Icon type="bell"></Icon></Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomRight">
            <Button><Icon type="global"></Icon></Button>
        </Dropdown>
      </Navi>
    );
  }
}

export default Navigator;
