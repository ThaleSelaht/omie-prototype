import React from 'react';
import './style.css';
import { Tabs, Icon } from 'antd';

const TabPane = Tabs.TabPane;
class TabsCard extends React.Component {
  render() {
    return (     
      <Tabs defaultActiveKey="1" style={{ background: '#FFF', padding: 10 }}>
        <TabPane tab={<span><Icon type="file-text" />Anotações</span>} key="1">
          Cliquei aqui para fazer anotações...
        </TabPane>
        <TabPane tab={<span><Icon type="calendar" />Agende atividade</span>} key="2">
          Tab 2
        </TabPane>
        <TabPane tab={<span><Icon type="mail" />Manda email</span>} key="3">
          Tab 3
        </TabPane>
        <TabPane tab={<span><Icon type="paper-clip" />Arquivos</span>} key="4">
          Tab 4
        </TabPane>
      </Tabs>
      );
    }
}

export default TabsCard;