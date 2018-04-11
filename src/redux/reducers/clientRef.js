const initialState = {};

export default function clientRef(state = initialState, action) {
  if (action.type === 'FETCH_CLIENT_REF_SUCCESS') {
    return action.payload
  }
  return state;
};