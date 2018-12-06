import React from 'react';
import './style.css';
import {Card, Icon, Button} from 'antd';


class SiderParticipants extends React.Component {

    render() {


        return ( 

         <Card title="Participants (1)" 
         className="card"
         extra={[<Icon type="plus-square" />]}
         
         
         >

         
         <p><Icon type="user" /> Anny Martins</p>

         <Button className="botao">View all</Button>
        
      
   
        </Card>

        );
    }
}

export default  SiderParticipants;