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
             {this.props.coversationData.interlocutor}
           </div>
         </div>
         <div className="last-date">
           {this.props.coversationData.interlocutorMessages[0].date}
         </div>
       </div>
       <div className="gray">
         {this.props.coversationData.interlocutorMessages[0].message}
       </div>
     </div>
    );
  }
}

export default CoversationItem;
