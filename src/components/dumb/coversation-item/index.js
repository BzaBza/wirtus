import React, {Component} from 'react';

class CoversationItem extends Component {

  render() {
    return (
     <div className="text-white coversation-item">
       <div className="d-flex justify-content-between">
         <div>
           <div className="coversation-user-image">
             <img src="#" alt="interlocutor"/>
           </div>
           <div className="interlocutor">
             {this.props.coversationData.user.name}
           </div>
         </div>
         <div className="last-date">
           {this.props.coversationData.date}
         </div>
       </div>
       <div className="gray coversation-last-message">
         {this.props.coversationData.content}
       </div>
     </div>
    );
  }
}

export default CoversationItem;