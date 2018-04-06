const initialState = [];

export default function usersData(state = initialState, action) {
  if (action.type === 'FETCH_USERS_DATA_SUCCESS') {
    return action.payload;
  }
  return state;
} ;