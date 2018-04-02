import React, {Component} from 'react';

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
         <input type="text"/>
         <input type="text"/>
         <input type="text"/>
         <input type="text"/>
       </form>
     </div>
    );
  }
}
export default ButtonAdd;



