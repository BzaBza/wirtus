import axios from "axios/index";
//
//  var mocUsersData = [];
//   {
//     name: 'Dron Roach',
//     position: 'UX/UI Designer',
//     address: '65 Lorem St, Warsaw, PL',
//     active: true,
//     phone: '+48 500 400 300',
//     email: 'lyallroach@gmail.com',
//     organization: 'Symu.co',
//     url: './workflow/photo-1457084882212-4a6bb2240588.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
//     'sed do eiusmod tempor incididunt ut ' +
//     'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
//     'ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
//     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
//     'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
//     'sunt in culpa qui officia deserunt mollit anim id est laborum. .'
//   }, {
//     name: 'Michelle Stewart',
//     position: 'UX/UI Designer',
//     address: '65 Lorem St, Warsaw, PL',
//     active: false,
//     phone: '+48 500 400 300',
//     email: 'lyallroach@gmail.com',
//     organization: 'Symu.co',
//     url: './workflow/photo-1457084882212-4a6bb2240588.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
//     'sed do eiusmod tempor incididunt ut ' +
//     'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
//     'ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
//     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
//     'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
//     'sunt in culpa qui officia deserunt mollit anim id est laborum. .'
//   }, {
//     name: 'Jolene Slater',
//     position: 'UX/UI Designer',
//     address: '65 Lorem St, Warsaw, PL',
//     active: true,
//     phone: '+48 500 400 300',
//     email: 'lyallroach@gmail.com',
//     organization: 'Symu.co',
//     url: './workflow/photo-1457084882212-4a6bb2240588.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
//     'sed do eiusmod tempor incididunt ut ' +
//     'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
//     'ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
//     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
//     'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
//     'sunt in culpa qui officia deserunt mollit anim id est laborum. .'
//   }, {
//     name: 'Dominic Lynton',
//     position: 'UX/UI Designer',
//     address: '65 Lorem St, Warsaw, PL',
//     active: true,
//     phone: '+48 500 400 300',
//     email: 'lyallroach@gmail.com',
//     organization: 'Symu.co',
//     url: './workflow/photo-1457084882212-4a6bb2240588.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
//     'sed do eiusmod tempor incididunt ut ' +
//     'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
//     'ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
//     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
//     'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
//     'sunt in culpa qui officia deserunt mollit anim id est laborum. .'
//   }, {
//     name: 'Ivan Roach',
//     position: 'UX/UI Designer',
//     address: '65 Lorem St, Warsaw, PL',
//     active: true,
//     phone: '+48 500 400 300',
//     email: 'lyallroach@gmail.com',
//     organization: 'Symu.co',
//     url: './workflow/photo-1457084882212-4a6bb2240588.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
//     'sed do eiusmod tempor incididunt ut ' +
//     'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
//     'ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
//     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
//     'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
//     'sunt in culpa qui officia deserunt mollit anim id est laborum. .'
//   }, {
//     name: 'Grisha Roach',
//     position: 'UX/UI Designer',
//     address: '65 Lorem St, Warsaw, PL',
//     active: true,
//     phone: '+48 500 400 300',
//     email: 'lyallroach@gmail.com',
//     organization: 'Symu.co',
//     url: './workflow/photo-1457084882212-4a6bb2240588.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
//     'sed do eiusmod tempor incididunt ut ' +
//     'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
//     'ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
//     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
//     'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
//     'sunt in culpa qui officia deserunt mollit anim id est laborum. .'
//   },
// ];


export const getUsersData = () => dispatch => {
  axios.get('http://aelmod.sytes.net:8080/users')
   .then(function (response) {
     dispatch(
      {type: 'FETCH_USERS_DATA_SUCCESS', payload: response.data}
     );
   })
   .catch(function (error) {
     console.log(error);
   });
};