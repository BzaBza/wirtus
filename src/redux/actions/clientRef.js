export const getClientRef = (clientRef) => dispatch => {
  dispatch(
   {type: 'FETCH_CLIENT_REF_SUCCESS', payload: clientRef},
  );
};