import axios from "axios/index";
export const getUsersData = () => dispatch => {
  axios.get('http://aelmod.sytes.net:8080/users')
   .then(function (response) {
     dispatch(
      {type: 'FETCH_USERS_DATA_SUCCESS', payload: response.data}
     );
   })
   .catch(function (error) {
     console.log(error);
   });
};