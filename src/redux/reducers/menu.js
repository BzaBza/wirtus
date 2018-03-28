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
    return action.payload;
  }
  return state;
} ;

