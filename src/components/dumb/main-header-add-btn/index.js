import React, {Component} from 'react';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import {connect} from "react-redux";
import {addProjectData} from "../../../redux/actions/addProject";

class ButtonAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openForm: false,
      projectData: [],
    };
    this.show = this.show.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  show() {
    this.setState({
      openForm: !this.state.openForm
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddProjectData({
       task: this.taskName.value,
       project: this.projectName.value,
       company: this.company.value,
       price: Number(this.projectPrice.value),
       deadline: this.deadline.value,
       timeSpent: 0,
       devName: 'Michelle Stewart',
       devPosition: 'user position',
       url: './workflow/photo-1457084882212-4a6bb2240588.png',
       id: new Date() + '',
     }
    )
    ;
  }


  render() {
    return (
     <div>
       <button type="button" className="button btn btn-primary bg-transparent" onClick={this.show}>
         Add<span className="text-primary">+</span>
       </button>
       <form action="#" className={`add-project-form ${this.state.openForm ? 'd-block' : 'd-none'}`}
             onSubmit={this.handleSubmit}>
         <ul className="form-list text-center">
           <li className="text-white"><h4>Create new project</h4></li>
           <li>
             <input type="text"
                    placeholder="Project name"
                    ref={(input => {
                      this.projectName = input
                    })}
             />
           </li>
           <li>
             <input type="text"
                    placeholder="Task name"
                    ref={(input => {
                      this.taskName = input
                    })}
             />
           </li>
           <li>
             <input type="text"
                    placeholder="Company"
                    ref={(input => {
                      this.company = input
                    })}
             />
           </li>
           <li>
             <input type="number"
                    placeholder="Project price"
                    ref={(input => {
                      this.projectPrice = input
                    })}
             />
           </li>
           <li>
             <input type="date"
                    placeholder="Deadline"
                    ref={(input => {
                      this.deadline = input
                    })}
                    required
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
             />
           </li>
           <li className="d-flex justify-content-center">
             <button type="submit" onClick={this.show}
                     className="btn btn-primary bg-transparent authentication-button  text-white">
               Enter <FaAngleRight className="authentication-button-icon"/>
             </button>
           </li>
         </ul>
       </form>
     </div>
    );
  }
}

export default connect(
 dispatch => ({
   onAddProjectData: (project) => {
     dispatch(addProjectData(project));
   }
 }))(ButtonAdd);



