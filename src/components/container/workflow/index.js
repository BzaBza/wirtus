import React, {Component} from 'react';
import {Container , Col} from 'reactstrap';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import WorkflowItem from '../../dumb/workflow-item/index.js';

class Workflow extends Component {
 constructor(props) {
  super(props);
  this.state = {
   projects: this.props.projects
  };
  this.onDragEnd = this.onDragEnd.bind(this);
 }

 componentWillReceiveProps() {
  this.setState({
   projects: this.props.projects
  });
 }

 onDragEnd(result) {
  if (!result.destination) return;
  const from = result.source;
  const to = result.destination;
  const {projects} = this.state;

   const [removed] = projects[from.droppableId].splice(from.index, 1);
   if (from.droppableId === 'completed' && to.droppableId !== 'completed') {
    removed.status = to.droppableId;
   }
   if (to.droppableId === 'completed') removed.status = 'completed';
  projects[to.droppableId].splice(to.index, 0, removed);
   this.setState({
    projects
   });
 }

 render() {
  let taskContainer = [];

  for(let project in this.state.projects){
   taskContainer.push(
    <Droppable key={project} direction="vertical" droppableId={project}>
     {provided => (
      <Col md="4" className="workflow-section">
       <h3 className="workflow-section-title">
        {project}
       </h3>
       <div>
        <span className="number"> ({this.state.projects[project].length}) </span>
         <span>
          {this.state.projects[project].length > 0 ? this.state.projects[project].reduce(function (acc, obj) { return acc + obj.price; }, 0):0
          }</span>
       </div>
       <ul
        className="workflow-list"
        ref={provided.innerRef}
       >
        {this.state.projects[project].map((item, index) => (
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
              task={item.task}
              company={item.company}
              locate={`/projects/${item.id}`}
              price={item.price}
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
      <div className="d-flex">
       {taskContainer}
      </div>
     </DragDropContext>
    </Container>
   </section>

  );
 }
}

export default Workflow;
