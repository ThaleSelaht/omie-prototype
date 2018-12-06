import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Icon, Row, Col } from 'antd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
`;

class Task extends React.Component {
  render() {
    return (
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
                        <Icon type={'user'} />{this.props.task.content}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <span>R${this.props.task.price}</span>{this.props.task.segment}
                        </Col>
                    </Row>
                </Container>
            )}
        </Draggable>
    );
  }
}
export default Task;
