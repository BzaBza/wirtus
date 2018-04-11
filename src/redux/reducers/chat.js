const initialState = [];

export default function chatData(state = initialState, action) {
  if (action.type === 'FETCH_CHAT_DATA_SUCCESS') {
    return action.payload
  }
  if (action.type === 'FETCH_NEW_MESSAGE_SUCCESS') {
    return Object.assign([], state,
      [
        action.payload
      ]
    )
  }
  return state;
};