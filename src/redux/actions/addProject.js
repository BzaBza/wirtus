export const addProjectData = (projectData) => dispatch => {
    dispatch(
     {type: 'ADD_PROJECT_DATA_SUCCESS', payload: projectData},
    );
};