const initialState = [{}];

export default function projectsData(state = initialState, action) {
  if (action.type === 'FETCH_PROJECTS_DATA_SUCCESS') {
    return action.payload;
  }
  return state;
} ;

