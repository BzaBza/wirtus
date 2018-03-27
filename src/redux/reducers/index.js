import {combineReducers} from 'redux';
import workflow from './workflow';
import allProjects from './allProjects';
import allTrending from './allTrending';

export default combineReducers({
  allTrending,
  workflow,
  allProjects,

});