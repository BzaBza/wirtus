const initialState = '';

export default function filterMenuData(state = initialState, action) {
  if (action.type === 'FILTER_MENU_DATA') {
    return action.payload;
  }
  return state;
} ;

