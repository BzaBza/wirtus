import axios from "axios/index";
export const getUsersData = () => dispatch => {
  axios.get('http://165.227.134.105:8080/users')
   .then(function (response) {
     dispatch(
      {type: 'FETCH_USERS_DATA_SUCCESS', payload: response.data}
     );
   })
   .catch(function (error) {
     console.log(error);
   });
};