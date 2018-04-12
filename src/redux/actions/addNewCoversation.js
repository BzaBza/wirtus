import axios from "axios/index";

export const addNewCoversation = (coversationData) => dispatch => {
  axios.post('http://aelmod.sytes.net:8080/conversations/create',
   coversationData,
   {
     headers: {
       'Content-Type': 'application/json',
     }
   }
  )
   .then(
    dispatch(
    {type: 'FETCH_NEW_COVERSATION_SUCCESS', payload: coversationData},
   ))
   .catch(
    dispatch(
    {type: 'FETCH_NEW_COVERSATION_FAILED', payload: coversationData},
   ))
};