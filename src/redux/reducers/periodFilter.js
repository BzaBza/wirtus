const initialState = '';

export default function filterPeriodData(state = initialState, action) {
  if (action.type === 'FILTER_PERIOD_DATA') {
    return action.payload;
  }
  return state;
} ;

