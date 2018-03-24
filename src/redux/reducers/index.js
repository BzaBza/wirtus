import {combineReducers} from 'redux';
import workflow from './workflow';
import allProjects from './allProjects';

export default combineReducers({
  workflow,
  allProjects,
});