const initialState = [];

export default function chatData(state = initialState, action) {
  if (action.type === 'FETCH_COVERSATION_DATA_SUCCESS') {
    return Object.assign([], state,
     [
       ...state,
       action.payload
     ]
    )
  }
  if (action.type === 'FETCH_NEW_MESSAGE_SUCCESS') {
    return Object.assign([], state,
     {
       message:[
         ...state,
         action.payload
       ]
     }
    )
  }
  return state;
};