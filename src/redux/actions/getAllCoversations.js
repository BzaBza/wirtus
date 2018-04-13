import axios from "axios/index";

export const getAllCoversationData = () => dispatch => {
  axios.get('http://165.227.134.105:8080/conversations?userId=' + JSON.parse(localStorage.getItem('session')).id)
   .then(function (response) {
     dispatch(
      {type: 'FETCH_ALL_COVERSATION_DATA_SUCCESS', payload: response.data}
     );
   })
   .catch(function (error) {
     console.log(error);
   });
};