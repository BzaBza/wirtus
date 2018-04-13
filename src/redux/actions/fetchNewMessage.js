export const getNewMessageData = (message) => dispatch => {
     dispatch(
      {type: 'FETCH_NEW_MESSAGE_SUCCESS', payload: message},
     );
};

// import axios from "axios/index";
//
// export const getNewMessageData = (coversationId) => dispatch => {
//   axios.get('http://aelmod.sytes.net:8080/chat/conversation?conversationId=' + coversationId)
//    .then(function (response) {
//      console.log(response.data);
//      dispatch(
//       {type: 'FETCH_NEW_MESSAGE_SUCCESS', payload: response.data},
//      );
//    })
//    .catch(function (error) {
//      console.log(error);
//    });
//
// };