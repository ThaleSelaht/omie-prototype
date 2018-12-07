import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Icon, Row, Col, Tag } from 'antd';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? "lightblue" : "white")};
`;

class Task extends React.Component {
  segmentTag = (segmento) => {
    let myColor = "";
    if(segmento === "Consultoria"){
      myColor = "#CC4F46"
    } else if (segmento === "Comércio") {
      myColor = "#CCA838"
    } else {
      myColor = "#60A82C"
    }
    return (
      <Tag color={myColor}>{segmento}</Tag>
    );
  }
  render() {
    return (
      <Link to='/lead'>
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided, snapshot) => (
            <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            >                       
              <Row>
                  <Col>
                  <Icon type={'user'} />{`  ${this.props.task.content}`}
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <span>{`R$ ${this.props.task.price} `}{this.segmentTag(this.props.task.segment)}</span>
                  </Col>
              </Row>
            </Container>
          )}
      </Draggable>
      </Link>
    );
  }
}
export default withRouter(Task);
