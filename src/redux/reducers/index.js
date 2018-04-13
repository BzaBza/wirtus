import {combineReducers} from 'redux';

import menu from './menu';
import allTrending from './allTrending';
import menuFilter from './menuFilter';
import periodFilter from './periodFilter';
import users from './users';
import chat from './chat';
import newCoversation from './newCoversation';
import currentCoversation from './currentCoversationId';
import addressee from './addressee';
import clientRef from './clientRef';
import allMessage from './allMessage';
import currentConvarsationMessages from './currentConvarsationMessages';

export default combineReducers({
  allTrending,
  menu,
  menuFilter,
  periodFilter,
  users,
  chat,
  newCoversation,
  currentCoversation, 
  addressee,
  clientRef,
  currentConvarsationMessages,
  allMessage,
});