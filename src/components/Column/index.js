import React from 'react';
import 'antd/dist/antd.css';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from '../Task/';

const Container = styled.div`
    border: 1px;
    border-color: lighgrey;
    border-radius: 2px;
    width:20%;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
    font-size: 16px;
    -webkit-clip-path: polygon(0% 0%, 95% 0, 100% 50%, 95% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 95% 0, 100% 50%, 95% 100%, 0% 100%);
    background: #CCC;
`;
const SubTitle = styled.span``;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? "#001529" : "white")};
    flex-grow: 1;
    min-height:100px;
`;

class Column extends React.Component {
  render() {
    return (
        <Container>
            <Title>
            <div>
            {this.props.column.title}    
            </div>
            <SubTitle>
                
            </SubTitle>
            </Title>
            <Droppable droppableId={this.props.column.id}>
            {(provided, snapshot) => (
                <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                >
                {this.props.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
                </TaskList>
            )}
            </Droppable>
        </Container>
    );
  }
}

export default Column;
