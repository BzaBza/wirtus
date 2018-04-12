export const getClientRef = (clientRef) => dispatch => {
  dispatch(
   {type: 'GET_CLIENT_REF_SUCCESS', payload: clientRef},
  );
};