import {combineReducers} from 'redux'
import user from './user'
import project from './project'

export const rootReducer = combineReducers({
  user,
  project
});
