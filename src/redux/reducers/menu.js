const initialState = {
  Quened: [],
  Planning: [],
  Design: [],
  Development: [],
  Testing: [],
  Completed: [],
};

export default function menuData(state = initialState, action) {
  if (action.type === 'FETCH_MENU_DATA_SUCCESS') {
    return Object.assign(...state, action.payload)
  }
  if (action.type === 'ADD_PROJECT_DATA_SUCCESS') {
    return Object.assign({}, state, {
      Quened: [
        ...state.Quened,
        action.payload
      ]
    })
  }
  return state;
};

