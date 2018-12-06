import React from 'react';
import './style.css';
import {Card, Icon, Avatar} from 'antd';

class SiderPerson extends React.Component {

    render() {


        return ( 

         <Card title="Person" 
         className="textSider"
         type="inner"
         extra={[<Icon type="edit" />,<Icon type="colum-height" />,<Icon type="setting" />]}
         
         
         >
        <div className="corpoCard">
         <Avatar size="large" icon="user"/>
         <h3>Gama</h3>
        </div>

       

        <div  className='labels'>
    
        <label>Label</label>

        <br/>

        <label>Email</label>

        <br/>
        
        <label>Instant messenge</label>

        <br/>

        <label>Postal address
        </label>

        <br/>

        <label>Qualificação
        </label>

        <br/>

        <label>Tipo do Contato

        </label>

        </div>



    
        <hr/>
        <Card>  
        
        </Card>
         
         </Card>
   

        );
    }
}

export default  SiderPerson;