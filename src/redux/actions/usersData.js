var mocUsersData = [
  {
    userName: 'Lyall Roach',
    position: 'UX/UI Designer',
    adress: '65 Lorem St, Warsaw, PL',
    active: true,
    phone: '+48 500 400 300',
    email: 'lyallroach@gmail.com',
    organization: 'Symu.co',
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
  }, {
    userName: 'Michelle Stewart',
    position: 'UX/UI Designer',
    adress: '65 Lorem St, Warsaw, PL',
    active: false,
    phone: '+48 500 400 300',
    email: 'lyallroach@gmail.com',
    organization: 'Symu.co',
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
  }, {
    userName: 'Jolene Slater',
    position: 'UX/UI Designer',
    adress: '65 Lorem St, Warsaw, PL',
    active: true,
    phone: '+48 500 400 300',
    email: 'lyallroach@gmail.com',
    organization: 'Symu.co',
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
  }, {
    userName: 'Dominic Lynton',
    position: 'UX/UI Designer',
    adress: '65 Lorem St, Warsaw, PL',
    active: true,
    phone: '+48 500 400 300',
    email: 'lyallroach@gmail.com',
    organization: 'Symu.co',
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
  }, {
    userName: 'Ivan Roach',
    position: 'UX/UI Designer',
    adress: '65 Lorem St, Warsaw, PL',
    active: true,
    phone: '+48 500 400 300',
    email: 'lyallroach@gmail.com',
    organization: 'Symu.co',
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
  }, {
    userName: 'Grisha Roach',
    position: 'UX/UI Designer',
    adress: '65 Lorem St, Warsaw, PL',
    active: true,
    phone: '+48 500 400 300',
    email: 'lyallroach@gmail.com',
    organization: 'Symu.co',
    url: './workflow/photo-1457084882212-4a6bb2240588.png',
  },
];

export const getUsersData = () => dispatch => {
  setTimeout(() => {
    dispatch(
     {type: 'FETCH_USERS_DATA_SUCCESS', payload: mocUsersData}
    );
  }, 500)
};