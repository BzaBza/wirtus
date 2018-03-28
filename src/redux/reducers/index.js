import {combineReducers} from 'redux';
import menu from './menu';
import allTrending from './allTrending';

export default combineReducers({
  allTrending,
  menu,

});