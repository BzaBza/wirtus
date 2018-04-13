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
             {this.props.coversationData.length !== 0 && this.props.coversationData.addressee ? this.props.coversationData.addressee.name : ''}
           </div>
         </div>
         <div className="last-date">
           {
             this.props.coversationData.messages.length !== 0
             &&
             this.props.coversationData.messages ? this.props.coversationData.messages[this.props.coversationData.messages.length - 1].date : ''
           }
         </div>
       </div>
       <div className="gray coversation-last-message">
         {
           this.props.coversationData.messages.length !== 0
           &&
           this.props.coversationData.messages ? this.props.coversationData.messages[this.props.coversationData.messages.length - 1].content : ''
         }
       </div>
     </div>
    );
  }
}

export default CoversationItem;