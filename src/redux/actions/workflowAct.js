var mocWorkflowData = {

  Quened: [{
    task: 'Wordpress theme',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457459588520-2ae325c92c09.png',
    id: '1a',
  },],
  Planning: [{
    task: 'Landing page',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '2a',
  }, {
    task: 'New website',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '2b',
  }, {
    task: 'Dashboard',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457459588520-2ae325c92c09.png',
    id: '2c',
  }, {
    task: 'Mobile App',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '2d',
  },],
  Design: [{
    task: 'New Logo',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '3a',
  }, {
    task: 'New website',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '3b',
  }, {
    task: 'New Website',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457459588520-2ae325c92c09.png',
    id: '3c',
  }, {
    task: 'Dashboard',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '3d',
  },],
  Development: [{
    task: 'Mobile App',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457459588520-2ae325c92c09.png',
    id: '4a',
  }, {
    task: 'New website',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '4b',
  }, {
    task: 'Dashboard',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '4c',
  }, {
    task: 'Iconset vol. 2',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '4d',
  },],
  Testing: [{
    task: 'Dashboard',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457459588520-2ae325c92c09.png',
    id: '5a',
  }, {
    task: 'Iconset vol. 1',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '5b',
  }, {
    task: 'Landing page',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457459588520-2ae325c92c09.png',
    id: '5c',
  }, {
    task: 'Iconset vol. 2',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '5d',
  },],
  Completed: [{
    task: 'Landing page',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '6a',
  }, {
    task: 'Iconset vol. 1',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '6b',
  }, {
    task: 'Landing page',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457459588520-2ae325c92c09.png',
    id: '6c',
  }, {
    task: 'Iconset vol. 2',
    company: 'Symu.co',
    price: 1500,
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    id: '6d',
  },]
};

export const getWorkflowData = () => dispatch => {
  setTimeout(() => {
    dispatch(
     {type: 'FETCH_WORKFLOW_DATA_SUCCESS', payload: mocWorkflowData}
    );
  }, 500)
};