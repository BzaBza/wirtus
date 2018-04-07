import React, {Component} from 'react';
import CoversationItem from "../../dumb/coversation-item";

class Coversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coversationVisibility: true,
    };
    this.coversationToggle = this.coversationToggle.bind(this)
  }

  coversationToggle(event){
    this.setState({
      coversationVisibility: !this.state.coversationVisibility
    })
  }

  render() {
    return (
     <section className="text-white">
       <button className="coversation-toggle-btn" onClick={this.coversationToggle}>
         ->>
       </button>
         <div>
           <div className={`coversation-item-wrap ${this.state.coversationVisibility ? 'coversation-hidden' : 'd-block'}`}>
             {this.props.chatData.map((value, index) =>
              <CoversationItem coversationData={value} key={index}/>
             )}
           </div>
         </div>
       <div className={`coversation-wrap-btn ${this.state.coversationVisibility ? 'coversation-hidden' : 'd-block'}`}>
         <button className="col-md-10 btn-primary coversation-btn">+ New <span className="coversation-btn-cov">coversation</span></button>
       </div>
     </section>
    );
  }
}

export default Coversation;
