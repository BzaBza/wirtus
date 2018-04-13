import axios from "axios/index";

export const getCoversationData = (coversationData) => dispatch => {
  axios.post('http://165.227.134.105:8080/conversations/create',
   coversationData,
   {
     headers: {
       'Content-Type': 'application/json',
     }
   }
  )
   .then(function (response) {
     dispatch(
      {type: 'FETCH_NEW_COVERSATION_DATA_SUCCESS', payload: response.data},
     )
   })
   .catch(
    dispatch(
     {type: 'FETCH_NEW_COVERSATION_FAILED', payload: 'err'},
    ))
};
