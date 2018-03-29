import {combineReducers} from 'redux';
import menu from './menu';
import allTrending from './allTrending';
import menuFilter from './menuFilter';

export default combineReducers({
  allTrending,
  menu,
  menuFilter,

});