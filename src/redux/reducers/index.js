import {combineReducers} from 'redux';

import menu from './menu';
import allTrending from './allTrending';
import menuFilter from './menuFilter';
import periodFilter from './periodFilter';
import users from './users';

export default combineReducers({
  allTrending,
  menu,
  menuFilter,
  periodFilter,
  users,

});