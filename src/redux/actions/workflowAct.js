var mocWorkflowData = {

  quenedData: [
   {
    name: 'New website for JCD.pl',
    time: '5 days left',
    status: 'work',
    id: '1a',
   },
   {
    name: 'Free PSD Template vol. 3',
    time: '5 days left',
    status: 'work',
    id: '1b',
   },
   {
    name: 'New logo for Google',
    time: '5 days left',
    status: 'work',
    id: '1c',
   },
   {
    name: 'New website for Windu.org',
    time: '5 days left',
    status: 'work',
    id: '1d',
   },
   {
    name: 'Free PSD Template vol. 2',
    time: '5 days left',
    status: 'work',
    id: '1e',
   },
   {
    name: 'Iconset Vol. 3',
    time: '5 days left',
    status: 'work',
    id: '1f',
   },
  ],

 inProgressData: [
  {
   name: 'New logo for Apple',
   time: '1 day left',
   status: 'work',
   id: '2a',
  },
  {
   name: 'Daily UI Kit',
   time: '5 days left',
   status: 'work',
   id: '2b',
  },
  {
   name: 'Business Cards',
   time: '2 days delays',
   status: 'delay',
   id: '2c',
  },
  ],

completedData: [
 {
  name: 'Free PSD Template vol. 1',
  time: '5 days left',
  status: 'completed',
  id: '3a',
 },
 {
  name: 'Iconset vol. 1',
  time: '5 days left',
  status: 'completed',
  id: '3b',
 },
 {
  name: 'New website for Symu.co',
  time: '5 days left',
  status: 'completed',
  id: '3c',
 },
 {
  name: 'Iconset vol. 2',
  time: '5 days left',
  status: 'completed',
  id: '3d',
 },
],
};

export const getWorkflowData = () => dispatch => {
 setTimeout(() => {
  dispatch(
   {type: 'FETCH_WORKFLOW_DATA_SUCCESS', payload: mocWorkflowData}
  );
 }, 500)
};