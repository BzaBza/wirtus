export const getCurrentAddressee = (id) => dispatch => {
  dispatch(
   {type: 'GET_CURRENT_ADDRESSEE', payload: id},
  );
};