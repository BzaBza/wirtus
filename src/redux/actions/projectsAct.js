var mocProjectsData = [
  {
    project: 'New website',
    price: '$1300',
    company: 'Microsoft',
    deadline: '21 May 2016',
    timeSpent: '40 hours',
    status: 'Testing',
    url: './workflow/photo-1441622915984-05d13dfb3d8c.png',
    devName:'Dominic Lynton',
    devPosition:'Front End Dev'
  },
  {
    project: 'Landing page',
    price: '$1300',
    company: 'Google',
    deadline: '21 May 2016',
    timeSpent: '40 hours',
    status:'Quened',
    url: './workflow/photo-1457459588520-2ae325c92c09.png',
    devName:'Lyan Roach',
    devPosition:'UX/UI Designer'
  },
  {
    project: 'New website',
    price: '$1500',
    company: 'Symu.co',
    deadline: '15 May 2016',
    timeSpent: '40 hours',
    status:'Development',
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    devName:'Michelle Stewart',
    devPosition:'Account'
  },
  {
    project: 'New logo',
    price: '$4300',
    company: 'JCD.pl',
    deadline: '21 May 2016',
    timeSpent: '40 hours',
    status:'Completed',
    url: './workflow/photo-1457459588520-2ae325c92c09.png',
    devName:'Lyan Roach',
    devPosition:'UX/UI Designer'
  },
  {
    project: 'New website',
    price: '$2300',
    company: 'Facebook ',
    deadline: '15 May 2016',
    timeSpent: '40 hours',
    status:'Quened',
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    devName:'Michelle Stewart',
    devPosition:'Front End Dev'
  },
  {
    project: 'Landing page',
    price: '$1250',
    company: 'Themeforest',
    deadline: '15 May 2016',
    timeSpent: '40 hours',
    status:'Planning',
    url: './workflow/photo-1441622915984-05d13dfb3d8c.png',
    devName:'Dominic Lynton',
    devPosition:'Front End Dev'
  },
  {
    project: 'New website',
    price: '$5100',
    company: 'Themeforest',
    deadline: '15 June 2015',
    timeSpent: '40 hours',
    status:'Development',
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
    devName:'Dominic Lynton',
    devPosition:'Front End Dev'
  },
  {
    project: 'New logo',
    price: '$900',
    company: 'Themeforest',
    deadline: '15 June 2015',
    timeSpent: '40 hours',
    status:'Design',
    url: './workflow/photo-1441622915984-05d13dfb3d8c.png',
    devName:'Dominic Lynton',
    devPosition:'Front End Dev'
  },
];

export const getProjectsData = () => dispatch => {
  setTimeout(() => {
    dispatch(
     {type: 'FETCH_PROJECTS_DATA_SUCCESS', payload: mocProjectsData}
    );
  }, 500)
};
