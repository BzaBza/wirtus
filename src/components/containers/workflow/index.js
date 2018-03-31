import React, {Component} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import WorkflowItem from '../../dumb/workflow-item/index.js';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

class Workflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentWillReceiveProps() {
    this.setState((initialState, props) => (
     {
       projects: props.projects
     }
    ));
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
    for (let project in this.state.projects) {
      taskContainer.push(
       <Droppable key={project} direction="vertical" droppableId={project}>
         {provided => (
          <div>
            <div className="d-flex justify-content-between workflow-section-title text-white align-items-center">
              <div>
                <h5>
                  {project}
                </h5>
                <div>
                  <span
                   className="number gray"> {this.state.projects[project].filter(item => item.company.includes(this.props.filter)).length + ' project ·'} </span>
                  <span className="text-primary">{'$'}
                    {this.state.projects[project].filter(item => item.company.includes(this.props.filter)).length > 0 ? this.state.projects[project].reduce(function (acc, obj) {
                      return acc + obj.price;
                    }, 0) : 0
                    }
              </span>
                </div>
              </div>
              <div>
                <FaAngleRight/>
              </div>
            </div>
            <ul
             className="workflow-list"
             ref={provided.innerRef}
            >
              {this.state.projects[project].filter(item => item.company.includes(this.props.filter)).map((item, index) => (
               <Draggable key={item.id} draggableId={item.id} index={index}>
                 {provided => (
                  <li>
                    <div
                     ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                    >
                      <WorkflowItem
                       projects={this.state.projects}
                       task={item.task}
                       company={item.company}
                       price={item.price}
                       key={item.id}
                       url={item.url}
                      />
                    </div>
                    {provided.placeholder}
                  </li>
                 )}
               </Draggable>))}
              {provided.placeholder}
            </ul>
          </div>
         )}
       </Droppable>
      )
    }


    return (
     <section className="workflow-section">
       <DragDropContext onDragEnd={this.onDragEnd}>
         <div className="d-flex">
           {taskContainer}
         </div>
       </DragDropContext>
     </section>
    );
  }
}

export default Workflow;
