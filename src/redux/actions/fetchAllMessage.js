export const getAllMessage = (allMessage) => dispatch => {
  dispatch(
   {type: 'FETCH_ALL_MESSAGE_DATA_SUCCESS', payload: allMessage}
  );
};