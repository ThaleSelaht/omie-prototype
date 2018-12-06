import React from 'react';
import './style.css';
import {Card, Icon, Avatar} from 'antd';

class SiderOrganization extends React.Component {

    render() {


        return ( 

         <Card title="Organization" 
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

        <label>Address</label>

        <br/>
        
        <label>Quantidade de fornecedores</label>

        <br/>

        <label>Quantidade de Cotações por mês</label>

        <br/>

        <label>Quantidade de pedidos mês+</label>

        <br/>

        <label>Quantos compradores na sua empresa??
        </label>

        </div>



    
        <hr/>
        <Card>  
        
        </Card>
         
         </Card>
   

        );
    }
}

export default SiderOrganization;