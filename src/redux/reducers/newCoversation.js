const initialState = '';

export default function addNewCoversation(state = initialState, action) {
  if (action.type === 'FETCH_NEW_COVERSATION_SUCCESS') {
    return action.payload;
  }
  return state;
} ;

