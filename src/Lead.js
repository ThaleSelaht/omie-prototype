import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SiderPerson from './components/Leads/siderPerson/SiderPerson';
import TabsCard from './components/Leads/contentTask/ContentTask';
import StepsContents from './components/Leads/contentSteps/StepsContents';
import SiderGrafico from './components/Leads/siderGrafico/SiderGrafico';
// import SiderFallowrs from './components/Leads/siderFallowers/SiderFollowers';
import SiderParticipants from './components/Leads/siderParticipants/SiderParticipants';
// import SiderEmaill from './components/Leads/siderEmaill/SiderEmaill';
import SiderDetails from './components/Leads/siderDetails/SiderDetails';
import SiderOrganization from './components/Leads/siderOrganization/SiderOrganization';
import HeaderBar from './components/Leads/headerBar/HeaderBar';


const {
  Sider, Content,
} = Layout;

class Lead extends Component {

  render() {
    return (
      <div className="App">
        <HeaderBar/>
        <Layout  style={{ padding: '10px 0', background: '#e7e7e7' }}>
          <Sider  style={{ padding: '10px 0', margin:'10px', background: '#e7e7e7' }} width={400} >                      
                <SiderDetails/>
                <SiderOrganization/>
                <SiderPerson/>
                <SiderParticipants/>
                <SiderGrafico/>
                {/* <SiderFallowrs/> */}
                {/* <SiderEmaill/> */}
          </Sider>
          <Content>
              <TabsCard/>
              <StepsContents />          
          </Content>
        </Layout>     
      </div>
    );
  }
}

export default Lead;
