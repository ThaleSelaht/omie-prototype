import React from 'react';
import './style.css';
import {Card, Input } from 'antd';


class SiderEmaill extends React.Component {

    render() {


        return ( 

         <Card
         className="card"         
         
         >

         <h4>Emaill BCC</h4>

         <label>Deal specific address</label>
         <Input placeholder="cecom+deal559@pipedrivemail.com" />

         <label>Universal address</label>
         <Input placeholder="cecom@pipedrivemail.com" />
        
         
        
      
   
        </Card>

        );
    }
}

export default  SiderEmaill;