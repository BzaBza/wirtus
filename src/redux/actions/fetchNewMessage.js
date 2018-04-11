export const getNewMessageData = (newMessageData) => dispatch => {
  setTimeout(() => {
    dispatch(
     {type: 'FETCH_NEW_MESSAGE_SUCCESS', payload: newMessageData},
    );
  }, 500)
};