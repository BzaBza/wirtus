export const getUserData = (userData) => dispatch => {
    dispatch(
     {type: 'FETCH_USER_DATA_SUCCESS', payload: userData},
    );
};