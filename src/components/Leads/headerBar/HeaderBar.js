import React from 'react';
import './style.css';
import { Icon, Popover, Row, Col, Avatar, Button } from 'antd';





class HeaderBar extends React.Component {

    render() {


        return ( 


            <div>

            <Row type="flex" justify="space-between">
                <Col span={8}><h3>Negócio Telsign Consultoria em Telecom Ltda</h3></Col>
                <Col span={8}>
                     <Avatar size="small" icon="user" />
                    Anny Martins
                    <Button size="small">Wow</Button>
                    <Button type="danger" size="small">Lost</Button>
              
            </Col>
          </Row>


          <Row type="flex" justify="start">
          <Col span={4}>R$ 0Add products</Col>
          <Col span={4}><Icon type="user" />Marcelo Constantino</Col>
          <Col span={8}><Icon type="shop" />Telsign Consultoria em Telecom Ltda</Col>
        
        </Row>

          <Row>

            <Popover content={<p>Mailing (enviado pelo marketing)</p>}  trigger="hover">
                <Button></Button>
            </Popover>

            <Popover content={<p>Qualificação/agendamento  (SDR Contas - Call)</p>}  trigger="hover">
                 <Button></Button>
          </Popover>


            <Popover content={<p>Apresentação da parceria (Executivo de contas – videoconferência)</p>}  trigger="hover">
                 <Button></Button>
            </Popover>


                <Popover content={<p>Fechamento Parceira (Executivo de contas)</p>}  trigger="hover">
                  <Button></Button>
        </Popover>

                <Popover content={<p>Recebimento de planilha com carteira de clientes (Executivo de contas)</p>}  trigger="hover">
                    <Button></Button>
        </Popover>

            </Row>

          
                  
            
            
            
            </div>



        );
    }
}

export default  HeaderBar;