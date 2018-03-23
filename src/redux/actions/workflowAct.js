var mocWorkflowData = [
 {
  quenedData: [
   {
    name: 'New website for JCD.pl',
    time: '5 days left',
    status: 'work',
    id: '1a',
   },
  ],
 },

 {
  inProgressData: [
   {
    name: 'New logo for Apple',
    time: '1 day left',
    status: 'work',
    id: '2a',
   },
  ],
 },

 {
  completedData: [
   {
    name: 'Free PSD Template vol. 1',
    time: '5 days left',
    status: 'completed',
    id: '3a',
   },
  ],
 }
];

export const getWorkflowData = () => dispatch => {
 setTimeout(() => {
  dispatch(
   {type: 'FETCH_WORKFLOW_DATA_SUCCESS', payload: mocWorkflowData}
  );
 }, 500)
};