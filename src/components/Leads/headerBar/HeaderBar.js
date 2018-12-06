import React from 'react';
import './style.css';
import { Icon, Tooltip, Row, Col, Avatar, Button } from 'antd';

const myPopover = {
    background: '#08a742',
    width: '20%',
    WebkitClipPath: 'polygon(0% 0%, 98% 0, 100% 50%, 98% 100%, 0% 100%)',
    clipPath: 'polygon(0% 0%, 98% 0, 100% 50%, 98% 100%, 0% 100%)',
    borderRight: '1px solid #FFF',
    color:'#FFF'
}
const myPopover2 = {
    ...myPopover,
    background: '#DDD',
}
class HeaderBar extends React.Component {
    render() {
        return ( 
            <div>
            <Row type="flex" justify="space-between">
                <Col span={8}><h3>Negócio Telsign Consultoria em Telecom Ltda</h3></Col>
                <Col span={3}>
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
          <Row type="flex" style={{ margin: '8px 0'}}>
            <Tooltip title={<p>Mailing (enviado pelo marketing)</p>} placement="bottom">
                <Button style={myPopover}>5 Dias</Button>
            </Tooltip>
            <Tooltip title={<p>Qualificação/agendamento  (SDR Contas - Call)</p>} placement="bottom">
                <Button style={myPopover2}></Button>
            </Tooltip>
            <Tooltip title={<p>Apresentação da parceria (Executivo de contas – videoconferência)</p>} placement="bottom">
                <Button style={myPopover2}></Button>
            </Tooltip>
            <Tooltip title={<p>Fechamento Parceira (Executivo de contas)</p>} placement="bottom">
                <Button style={myPopover2}></Button>
            </Tooltip>
            <Tooltip title={<p>Recebimento de planilha com carteira de clientes (Executivo de contas)</p>} placement="bottom">
                <Button style={myPopover2}></Button>
            </Tooltip>
        </Row> 
        </div>
        );
    }
}

export default  HeaderBar;