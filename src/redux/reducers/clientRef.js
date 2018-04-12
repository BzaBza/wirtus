const initialState = '';

export default function clientRef(state = initialState, action) {
  if (action.type === 'GET_CLIENT_REF_SUCCESS') {
    return action.payload;
  }
  return state;
} ;