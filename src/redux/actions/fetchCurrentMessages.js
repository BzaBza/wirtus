export const fetchCurrentMessages = (message) => dispatch => {
  dispatch(
   {type: 'FETCH_NEW_MESSAGE_SUCCESS', payload: message},
  );
};