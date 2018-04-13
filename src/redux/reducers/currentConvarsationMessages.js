const initialState = [];

export default function currentConvarsationMessages(state = initialState, action) {
  if (action.type === 'FETCH_ALL_MESSAGES_CURRENT_COVERSATION_SUCCESS') {
    return action.payload

  }
  if (action.type === 'FETCH_NEW_MESSAGE_SUCCESS') {
    return Object.assign([],state,[
     ...state,
     action.payload
     ]
    )
  }
  return state;
};