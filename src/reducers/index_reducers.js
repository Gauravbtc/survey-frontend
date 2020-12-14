import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import users from './user_reducers';
import surveys from './survey_reducers';

const rootReducer = combineReducers({
  form: formReducer,
  user: users,
  survey: surveys
})

export default rootReducer;