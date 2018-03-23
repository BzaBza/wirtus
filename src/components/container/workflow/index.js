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
  console.log(this.state.tasks)
 }

 onDragEnd(result) {
  if (!result.destination) return;
  const from = result.source;
  const to = result.destination;
  const {tasks} = this.state;
  //
  // const a = tasks
  //  .filter((a) => Object.getOwnPropertyNames(a)[0] === from.droppableId);
  //
  // const b = tasks
  //  .filter((a) => Object.getOwnPropertyNames(a)[0] === to.droppableId);
  //
  // b.push(a[from.index]);
  // a.splice(from.index, 1);
  //
  this.removeTask(tasks, from)
   .then(deletedTask => this.addTask(tasks, to, deletedTask))
   .then(() => {
    this.setState({
     tasks
    })
   });

  // for (let i = 0; i < tasks.length; i++) {
  //  console.log(tasks[i][Object.getOwnPropertyNames(tasks[2])]);
  //  const [removed] = tasks[i][Object.getOwnPropertyNames(tasks[i])][from.droppableId].splice(from.index, 1);
  //  if (from.droppableId === 'completed' && to.droppableId !== 'completed') {
  //   removed.status = to.droppableId;
  //  }
  //  if (to.droppableId === 'completed') removed.status = 'completed';
  //  tasks[i][Object.getOwnPropertyNames(tasks[i])][to.droppableId].splice(to.index, 0, removed);
  //  this.setState({
  //   tasks: this.props.tasks
  //  });
  // }
 }

 addTask(tasks, to, newTask) {
  return new Promise(resolve => {
   setTimeout(() => {
    for (let task of tasks) {
     if (Object.getOwnPropertyNames(task)[0] === to.droppableId) {
      task[to.droppableId].unshift(newTask);
      resolve();
      break;
     }
    }
   })
  });
 }

 removeTask(tasks, from) {
  return new Promise(resolve => {
   setTimeout(() => {
    for (let task of tasks) {
     if (Object.getOwnPropertyNames(task)[0] === from.droppableId) {
      task[from.droppableId].splice(task[from.droppableId][from.index], 1);
      resolve(task[from.droppableId][from.index]);
      break;
     }
    }
   })
  })
 }

 render() {

  return (
   <section>
    <Container>
     <DragDropContext onDragEnd={this.onDragEnd}>
      <Row>
       {this.state.tasks.map((value, index) => (
        <Droppable key={index} direction="vertical" droppableId={Object.getOwnPropertyNames(value).join('')}>
         {provided => (
          <Col md="4" className="workflow-section">
           <h3 className="workflow-section-title">
            {Object.getOwnPropertyNames(value).join('')}
            <span className="number"> ({value[Object.getOwnPropertyNames(value)].length}) </span>
           </h3>
           <ul
            className="workflow-list"
            ref={provided.innerRef}
           >
            {value[Object.getOwnPropertyNames(value)].map((item, index) => (
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
       ))}
      </Row>
     </DragDropContext>
    </Container>
   </section>

  );
 }
}

export default Workflow;