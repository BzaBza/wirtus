const initialState = {
  toDoData: [],
  inProgressData: [],
  completedData: [],
};

export default function workflowData(state = initialState, action) {
  if (action.type === 'FETCH_WORKFLOW_DATA_SUCCESS') {
    return action.payload;
  }
  return state;
} ;

