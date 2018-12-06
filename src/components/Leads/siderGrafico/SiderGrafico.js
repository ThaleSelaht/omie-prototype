import React from 'react';
import './style.css';
import {Card, Progress,Row,Col} from 'antd';

class SiderGrafico extends React.Component {

    render() {


        return ( 

         <Card title="OVERVIEW" 
         className="textSider"
         type="inner"  
         >

         <div>

             <Row>
                <Col span={12}><h4>Deal age</h4></Col>
                <Col span={4} offset={8}>78 days</Col>
                <Progress showInfo={false} percent={100} status="exception" />
                <Progress showInfo={false} percent={30}/>
             </Row>

             <Row>
             <Col span={12}>Avg time to Won</Col>
             <Col span={4} offset={8}>16 days</Col>
          </Row>

          <Row>
             <Col span={12}>Inactive (days)</Col>
            <Col span={4} offset={8}>0</Col>
         </Row>

         <Row>
             <Col span={12}>Created</Col>
             <Col span={4} offset={8}>17/09/2018</Col>
        </Row>

        <h4>Top activities</h4>
        <Progress percent={60} successPercent={33} showInfo={false} />

        <Row type="flex" justify="space-between">
         <Col span={8}>Deadline</Col>
         <Col span={4}>9	</Col>
         <Col span={4}>60%</Col>
      </Row>

      <Row type="flex" justify="space-between">
        <Col span={8}>Call</Col>
        <Col span={4}>5	</Col>
        <Col span={4}>33%</Col>
    </Row>


    <Row type="flex" justify="space-between">
        <Col span={8}>Meeting</Col>
        <Col span={4}>1</Col>
        <Col span={4}>7%</Col>
    </Row>


    <h4>Most active users</h4>
    <Progress percent={100} showInfo={false}/>
    <Row type="flex" justify="space-between">
        <Col span={8}>Anny Martins</Col>
        <Col span={4}>15</Col>
        <Col span={4}>100%</Col>
    </Row>

    
  
      
                     
         </div>
        

       
         
         </Card>
   

        );
    }
}

export default  SiderGrafico;