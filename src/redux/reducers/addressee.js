const initialState = null;

export default function addressee(state = initialState, action) {
  if (action.type === 'GET_CURRENT_ADDRESSEE') {
    return action.payload;
  }
  return state;
} ;