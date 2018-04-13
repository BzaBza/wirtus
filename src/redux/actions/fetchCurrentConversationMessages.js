export const fetchCurrentConversationMessages = (message) => dispatch => {
  dispatch(
   {type: 'FETCH_ALL_MESSAGES_CURRENT_COVERSATION_SUCCESS', payload: message},
  );
};