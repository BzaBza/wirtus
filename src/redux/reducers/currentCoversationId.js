const initialState = '';

export default function currentCoversation(state = initialState, action) {
  if (action.type === 'GET_CURRENT_COVERSATION') {
    return action.payload;
  }
  return state;
} ;