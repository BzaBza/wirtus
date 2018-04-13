export const getNewMessageData = (message) => dispatch => {
     dispatch(
      {type: 'FETCH_NEW_MESSAGE_SUCCESS', payload: message},
     );
};