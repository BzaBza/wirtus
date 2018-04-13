import React, {Component} from 'react';

class CoversationItem extends Component {

  render() {
    return (
     <div className="text-white coversation-item">
       <div className="d-flex justify-content-between">
         <div className="d-flex coversation-item-header">
           <div className="coversation-image-wrap">
             <img src={'./workflow/photo-1457459588520-2ae325c92c09.png'} alt="interlocutor" className="coversation-user-image"/>
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