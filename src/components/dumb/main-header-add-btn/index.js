import React, {Component} from 'react';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

class ButtonAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openForm: false,
    };
    this.show= this.show.bind(this)
  }
  show(){
    this.setState({
      openForm:  !this.state.openForm
    })
  }


  render () {
    return (
     <div>
       <button type="button" className="button btn btn-primary bg-transparent" onClick={this.show}>
         Add<span className="text-primary">+</span>
       </button>
       <form action="#" className={`add-project-form ${this.state.openForm ? 'd-block' : 'd-none'}`}>
         <ul className="form-list text-center">
           <li className="text-primary"><h4>Create new project</h4></li>
           <li><input type="text" placeholder="Project name"/></li>
           <li><input type="text" placeholder="Company"/></li>
           <li><input type="text" placeholder="Project sum"/></li>
           <li className="d-flex justify-content-center">
             <button type="submit"
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
export default ButtonAdd;



