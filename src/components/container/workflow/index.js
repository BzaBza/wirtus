import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import keyIndex from 'react-key-index';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import WorkflowItem from '../../dumb/workflow-item/index.js';

class Workflow extends Component {
 constructor(props) {
  super(props);
  this.state = {
   tasks: this.props.tasks
  };
  this.onDragEnd = this.onDragEnd.bind(this);
 }

 componentWillReceiveProps() {
  this.setState({
   tasks: this.props.tasks
  });
 }

 onDragEnd(result) {
  if (!result.destination) return;
  const from = result.source;
  const to = result.destination;
  const { tasks } = this.state;
  console.log(tasks);
  const [removed] = tasks[0][from.droppableId].splice(from.index, 1);
  if (from.droppableId === 'completed' && to.droppableId !== 'completed') {
   removed.status = to.droppableId;
  }
  if (to.droppableId === 'completed') removed.status = 'completed';
  tasks[0][to.droppableId].splice(to.index, 0, removed);
  this.setState({
   tasks
  });
 }

 render() {
  return (
   <section>
    <Container>
     <DragDropContext onDragEnd={this.onDragEnd}>
      <Row>
       <Droppable direction="vertical" droppableId="toDoData">
        {provided => (
         <Col md="4" className="workflow-section">
          <h3 className="workflow-section-title">
           To Do
           <span className="number"> {this.state.tasks[0].toDoData.length} </span>
          </h3>
          <ul
           className="workflow-list"
           ref={provided.innerRef}
          >
           {this.state.tasks[0].toDoData.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
             {provided => (
              <li>
               <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="workflow-item-wrapper"
               >
                <WorkflowItem
                 name={item.name}
                 time={item.time}
                 locate={`/tasks/${item.id}`}
                 status={item.status}
                 key={item.id}
                />
               </div>
               {provided.placeholder}
              </li>
             )}
            </Draggable>))}
           {provided.placeholder}
          </ul>
         </Col>
        )}
       </Droppable>
       <Droppable direction="vertical" droppableId="inProgressData">
        {provided => (
         <Col md="4" className="workflow-section">
          <h3 className="workflow-section-title">
           In Progress
           <span className="number"> ({this.state.tasks[0].inProgressData.length}) </span>
          </h3>
          <ul
           className="workflow-list"
           ref={provided.innerRef}
          >
           {this.state.tasks[0].inProgressData.map((item, index) => (
            <Draggable key={item.id} draggableId={item.name} index={index}>
             {provided => (
              <li>
               <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="workflow-item-wrapper"
               >
                <WorkflowItem
                 name={item.name}
                 time={item.time}
                 locate={`/tasks/${item.id}`}
                 status={item.status}
                 key={item.id}
                />
               </div>
               {provided.placeholder}
              </li>
             )}
            </Draggable>))}
           {provided.placeholder}
          </ul>
         </Col>
        )}
       </Droppable>
       <Droppable direction="vertical" droppableId="completedData">
        {provided => (
         <Col md="4" className="workflow-section">
          <h3 className="workflow-section-title">
           Completed
           <span className="number"> ({this.state.tasks[0].completedData.length}) </span>
          </h3>
          <ul
           className="workflow-list"
           ref={provided.innerRef}
          >
           {this.state.tasks[0].completedData.map((item, index) => (
            <Draggable key={item.id} draggableId={item.name} index={index}>
             {provided => (
              <li>
               <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="workflow-item-wrapper"
               >
                <WorkflowItem
                 name={item.name}
                 time={item.time}
                 locate={`/tasks/${item.id}`}
                 status={item.status}
                 key={item.id}
                />
               </div>
               {provided.placeholder}
              </li>
             )}
            </Draggable>))}
           {provided.placeholder}
          </ul>
         </Col>
        )}
       </Droppable>
      </Row>
     </DragDropContext>
    </Container>
   </section>

  );
 }
}

export default Workflow;