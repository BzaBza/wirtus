import {combineReducers} from 'redux';
import menu from './menu';
import allProjects from './allProjects';
import allTrending from './allTrending';

export default combineReducers({
  allTrending,
  menu,
  allProjects,

});