var mocWorkflowData = {

 Quened: [{
  task: 'Wordpress theme',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '1a',
 }, ],
 Planning: [{
  task: 'Landing page',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '2a',
 }, {
  task: 'New website',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '2b',
 }, {
  task: 'Dashboard',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '2c',
 }, {
  task: 'Mobile App',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '2d',
 }, ],
 Design: [{
  task: 'Free PSD Template vol. 1',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '3a',
 }, {
  task: 'Iconset vol. 1',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '3b',
 }, {
  task: 'New website for Symu.co',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '3c',
 }, {
  task: 'Iconset vol. 2',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '3d',
 }, ],
 Development: [{
  task: 'Free PSD Template vol. 1',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '4a',
 }, {
  task: 'Iconset vol. 1',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '4b',
 }, {
  task: 'New website for Symu.co',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '4c',
 }, {
  task: 'Iconset vol. 2',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '4d',
 }, ],
 Testing: [{
  task: 'Free PSD Template vol. 1',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '5a',
 }, {
  task: 'Iconset vol. 1',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '5b',
 }, {
  task: 'New website for Symu.co',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '5c',
 }, {
  task: 'Iconset vol. 2',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '5d',
 }, ],
 Completed: [{
  task: 'Free PSD Template vol. 1',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '6a',
 }, {
  task: 'Iconset vol. 1',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '6b',
 }, {
  task: 'New website for Symu.co',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '6c',
 }, {
  task: 'Iconset vol. 2',
  company: 'Symu.co',
  price: 1500,
  url: '',
  id: '6d',
 }, ]
};

export const getWorkflowData = () => dispatch => {
 setTimeout(() => {
  dispatch(
   {type: 'FETCH_WORKFLOW_DATA_SUCCESS', payload: mocWorkflowData}
  );
 }, 500)
};