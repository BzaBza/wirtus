const initialState = [];

export default function chatData(state = initialState, action) {
  if (action.type === 'FETCH_CHAT_DATA_SUCCESS') {
    return action.payload
  }
  if (action.type === 'ADD_MESSAGE_DATA_SUCCESS') {
    return Object.assign({}, state, {
      userMessages: [
        ...state.userMessages,
        action.payload
      ]
    })
  }
  return state;
};