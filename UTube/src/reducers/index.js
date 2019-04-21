import { combineReducers } from 'redux';

import VideosReducer from './VideosReducer';

export default combineReducers({
  //Why do "we use ëxport" default here?
  videosR: VideosReducer
});
