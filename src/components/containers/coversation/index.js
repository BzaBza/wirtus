import React, {Component} from 'react';
import CoversationItem from "../../dumb/coversation-item";

class Coversation extends Component {

  render() {
    return (
     <section className="text-white">
         <div className="coversation-item-wrap">
           {this.props.chatData.map((value, index) =>
            <CoversationItem coversationData={value} key={index}/>
           )}
         </div>
         <div className="d-flex justify-content-center coversation-btn">
           <button>New coversation</button>
         </div>
     </section>
    );
  }
}

export default Coversation;
