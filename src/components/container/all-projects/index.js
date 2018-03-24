import React, {Component} from 'react';
import MdAccessTime from 'react-icons/lib/md/access-time';
import DropPeriod from "../../dumb/drop-period/index";
import ProgressBar from "../../dumb/progress-bar/index";

class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsData: this.props.projects,
    };
  }

  componentWillReceiveProps() {
    this.setState((state, props) => (
     {
       projectsData: this.props.projects
     }
    ));
  }

  render() {
    return (
     <section className="text-white">
       <ul className="tasks-list">
         <li className="d-flex gray projects-title justify-content-between">
           <div className="col-md-2">Project title</div>
           <div className="col-md-1">Value</div>
           <div className="col-md-2">Deadline</div>
           <div className="col-md-1">Time spent</div>
           <div className="col-md-2">Progress</div>
           <div className="col-md-1">Status</div>
           <div className="col-md-2">Assigned to</div>
         </li>
         {this.state.projectsData.map((value, index) => <li key={index}
                                                        className="d-flex justify-content-between align-items-center  flex-wrap project-row">
           <div className="d-flex col-md-2 project-table projects-name-block">
             <div>
               <div className="user-name">{value.project}</div>
               <div className="gray">{value.company}</div>
             </div>
           </div>
           <div className="col-md-1 project-table">
             <div
              className='align-items-center d-flex'>
               {value.price}
             </div>
           </div>
           <div className="col-md-2 project-table">
             <div>
               {value.deadline}
             </div>
           </div>
           <div className="col-md-1 project-table">
             <div>
               {value.timeSpent}
             </div>
           </div>
           <div className="col-md-2 project-table">
             <div className="progress-bar-container d-flex justify-content-start">
               <ProgressBar/>
             </div>
           </div>
           <div className="col-md-1 project-table">
             <div>
               {value.status}
             </div>
           </div>
           <div className="col-md-2 project-table justify-content-between">
             <div className="d-flex align-items-center">
               <div>
                 <img src={value.url} alt="developer"/>
               </div>
               <div>
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
         </li>)}
       </ul>
     </section>
    );
  }
}
export default AllProjects;
