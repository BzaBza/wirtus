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
 }

 componentWillReceiveProps() {
  this.setState({
   tasks: this.props.tasks
  });
 }

 componentDidMount(){
  const toDoData = keyIndex(this.props.tasks[0].toDoData, 1);
  const inProgressData = keyIndex(this.props.tasks[0].inProgressData, 2);
  const completedData = keyIndex(this.props.tasks[0].completedData, 3);
  console.log(this.state.tasks)
 }


 render() {
  return (
   <section>
    <Container>
     <DragDropContext onDragEnd={this.onDragEnd}>
      <Row>
       <Droppable direction="vertical" droppableId="toDo">
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
           {this.state.tasks[0].toDoData.map((value, index) => (
            <Draggable key={value.id} draggableId={value.id} index={index}>
             {provided => (
              <li>
               <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="workflow-item-wrapper"
               >
                <WorkflowItem
                 name={value.name}
                 time={value.time}
                 locate={`/tasks/${value.id}`}
                 status={value.status}
                 key={value.id}
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
       <Droppable direction="vertical" droppableId="inProgress">
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
           {this.state.tasks[0].inProgressData.map((value, index) => (
            <Draggable key={value.id} draggableId={value.name} index={index}>
             {provided => (
              <li>
               <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="workflow-item-wrapper"
               >
                <WorkflowItem
                 name={value.name}
                 time={value.time}
                 locate={`/tasks/${value.id}`}
                 status={value.status}
                 key={value.id}
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
       <Droppable direction="vertical" droppableId="completed">
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
           {this.state.tasks[0].completedData.map((value, index) => (
            <Draggable key={value.id} draggableId={value.name} index={index}>
             {provided => (
              <li>
               <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="workflow-item-wrapper"
               >
                <WorkflowItem
                 name={value.name}
                 time={value.time}
                 locate={`/tasks/${value.id}`}
                 status={value.status}
                 key={value.id}
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