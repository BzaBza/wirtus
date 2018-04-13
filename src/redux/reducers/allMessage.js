const initialState = [];

export default function getAllMessage(state = initialState, action) {
  if (action.type === 'FETCH_ALL_MESSAGE_DATA_SUCCESS') {
    return action.payload;
  }
  return state;
} ;