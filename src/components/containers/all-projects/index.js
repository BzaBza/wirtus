import React, {Component} from 'react';
import DropPeriod from "../../dumb/drop-period/index";
import ProgressBar from "../../dumb/progress-bar/index";

class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsData: props.projects,
    };
  }

  componentWillReceiveProps() {
    this.setState((initialState, props) => (
     {
       projectsData: props.projects
     }
    ));
  }

  render() {
    const projectContainer = [];
    for (let project in this.state.projectsData) {
      projectContainer.push(
       this.state.projectsData[project].filter(item => item.company.includes(this.props.filter)).map((value, index) =>
        <li key={index} className="d-flex justify-content-between align-items-center  flex-wrap project-row">
          <div className="d-flex col-lg-2 project-table projects-name-block "
               style={{
                 borderColor:
                  project === 'Quened' ? '#e1e2e7' :
                   project === 'Planning' ? '#2196f3' :
                    project === 'Design' ? '#2196f3' :
                     project === 'Development' ? '#2196f3' :
                      project === 'Testing' ? '#2196f3' :
                       project === 'Completed' ? '#4caf50' : ''
               }}>
            <div>

              <div className="user-name">{value.project}</div>
              <div className="gray">{value.company}</div>
            </div>
          </div>
          <div className="col-lg-1 project-table">
            <div
             className='align-items-center d-flex'>
              ${value.price}
            </div>
          </div>
          <div className="col-lg-1 project-table">
            <div>
              {value.deadline}
            </div>
          </div>
          <div className="col-lg-1 project-table">
            <div>
              {value.timeSpent}
            </div>
          </div>
          <div className="col-lg-2 project-table">
            <div className="progress-bar-container d-flex justify-content-start">
              <ProgressBar progressData={project}/>
            </div>
          </div>
          <div className="col-lg-1 project-table">
            <div>
              {project}
            </div>
          </div>
          <div className="col-lg-3 project-table justify-content-around">
            <div className="d-flex align-items-center">
              <div>
                <img src={value.url} alt="developer"/>
              </div>
              <div className="col-lg-10 all-projects-user-info">
                <div>
                  {value.devName}
                </div>
                <div>
                  {value.devPosition}
                </div>
              </div>
            </div>
            <div className="users-table justify-content-center d-flex">
              <DropPeriod value={this.state.projectsData}/>
            </div>
          </div>
        </li>))
    }
    return (
     <section className="text-white">
       <ul className="tasks-list">
         <li className="d-flex gray projects-title justify-content-between">
           <div className="col-lg-2">Project title</div>
           <div className="col-lg-1">Value</div>
           <div className="col-lg-1">Deadline</div>
           <div className="col-lg-1">Time spent</div>
           <div className="col-lg-2">Progress</div>
           <div className="col-lg-1">Status</div>
           <div className="col-lg-3"><div className="col-lg-5 text-right">Assigned to</div></div>
         </li>
         {projectContainer}
       </ul>
     </section>
    );
  }
}

export default AllProjects;
