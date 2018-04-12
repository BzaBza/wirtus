export const getCurrentCoversationId = (id) => dispatch => {
    dispatch(
     {type: 'GET_CURRENT_COVERSATION', payload: id},
    );
};