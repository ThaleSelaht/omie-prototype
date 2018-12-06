import React from 'react';
import 'antd/dist/antd.css';
import styled from "styled-components";
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data2';
import Column from './components/Column';
import { Select } from 'antd';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Option = Select.Option;
function handleChange(value) {}

const Container = styled.div`
  display: flex
`; 
class Funil2 extends React.Component {
  state = initialData;
  handleChange = (value) => {
    console.log(`selected ${value}`);
    this.setState(initialData);
  }
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
    const newTaskIds = Array.from(start.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    if (start === finish) {
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,     
           [newColumn.id]: newColumn,
        },
      };
      this.setState(newState);
      return;
    }
    
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  }
  render() {
    return (
      <div>              
      <Select defaultValue="Funil Vendas" style={{ width: 140 }} onChange={handleChange}>
        <Option value="Funil Contas"><Link to="/funil/1">Funil Contas</Link></Option>
        <Option value="Funil Vendas"><Link to="/funil/2">Funil Vendas</Link></Option>        
        </Select>     
        <DragDropContext 
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        >
        <Container>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
        </Container>
      </DragDropContext>     
      </div>   
    );
  }
}

export default Funil2;
