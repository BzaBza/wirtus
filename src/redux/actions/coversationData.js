import axios from "axios/index";
// var mocChatData = [
//   {
//     id: new Date(),
//     type: "CHAT",
//     content: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
//     date: '4 April 2016, 5:32 PM',
//     user: {
//       name: 'Michelle Stewart',
//       id: new Date(),
//     }
//   }
// ];

export const getCoversationData = (coversationData) => dispatch => {
  axios.post('http://aelmod.sytes.net:8080/conversations/create',
   coversationData,
   {
     headers: {
       'Content-Type': 'application/json',
     }
   }
  )
   .then(function (response) {
     dispatch(
      {type: 'FETCH_COVERSATION_DATA_SUCCESS', payload: response.data},
     )
   })
   .catch(
    dispatch(
     {type: 'FETCH_NEW_COVERSATION_FAILED', payload: 'err'},
    ))
};