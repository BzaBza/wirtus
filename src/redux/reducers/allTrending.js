const initialState = [];

export default function trendingData(state = initialState, action) {
  if (action.type === 'FETCH_TRENDING_DATA_SUCCESS') {
    return action.payload;
  }
  return state;
} ;