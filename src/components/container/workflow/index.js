import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
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
  const {tasks} = this.state;

   const [removed] = tasks[from.droppableId].splice(from.index, 1);
   if (from.droppableId === 'completed' && to.droppableId !== 'completed') {
    removed.status = to.droppableId;
   }
   if (to.droppableId === 'completed') removed.status = 'completed';
   tasks[to.droppableId].splice(to.index, 0, removed);
   this.setState({
    tasks
   });
 }

 render() {
  let taskContainer = [];

  for(let task in this.state.tasks){
   taskContainer.push(
    <Droppable key={task} direction="vertical" droppableId={task}>
     {provided => (
      <Col md="4" className="workflow-section">
       <h3 className="workflow-section-title">
        {task}
        <span className="number"> ({this.state.tasks[task].length}) </span>
       </h3>
       <ul
        className="workflow-list"
        ref={provided.innerRef}
       >
        {this.state.tasks[task].map((item, index) => (
         <Draggable key={item.id} draggableId={item.id} index={index}>
          {provided => (
           <li>
            {index}
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
   )}


  return (
   <section>
    <Container>
     <DragDropContext onDragEnd={this.onDragEnd}>
      <Row>
       {taskContainer}
      </Row>
     </DragDropContext>
    </Container>
   </section>

  );
 }
}

export default Workflow;
