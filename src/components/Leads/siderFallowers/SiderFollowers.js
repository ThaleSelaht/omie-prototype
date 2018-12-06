import React from 'react';
import './style.css';
import {Card, Icon, Button} from 'antd';


class SiderFallowrs extends React.Component {

    render() {


        return ( 

         <Card title="Fallowers (1)" 
         className="card"
         extra={[<Icon type="plus-square" />]}
         
         
         >

         
         <p><Icon type="user" /> Anny Martins</p>

         <Button className="botao">View all</Button>
         <Button>Stop Following</Button>
      
   
        </Card>

        );
    }
}

export default  SiderFallowrs;