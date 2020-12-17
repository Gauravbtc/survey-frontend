import './index.css';
import './css/fonts.css';
import './css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../src/css/bootstrap.min.css';
import '../src/css/animate.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import App from './components/App';
import rootReducer from './reducers/index_reducers';
// import registerServiceWorker from './registerServiceWorker';
import { authUser,authUserSuccess,authUserFailure } from './actions/user_action';
import { serveyConfirmation, serveyConfirmationSuccess,serveyConfirmationFailure } from './actions/survey_action';
import reportWebVitals from './reportWebVitals';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

let next = store.dispatch;
const userLocalStorage = localStorage.getItem('user');
const surveyToken = localStorage.getItem('survey_token');
 setTimeout(function(){
 if(userLocalStorage) {
   next = store.dispatch(authUser());
   next.payload.then((response) => {
     if(!response.error && response.status === 200){
       store.dispatch(authUserSuccess(response.data));
     }
     else{
       store.dispatch(authUserFailure(response.data));
     } 
   })
 }
 if(surveyToken) {
  next = store.dispatch(serveyConfirmation(surveyToken));
  next.payload.then((response) => {
    if(!response.error && response.status === 200){
      store.dispatch(serveyConfirmationSuccess(response.data));
    }
    else{
      store.dispatch(serveyConfirmationFailure(response.data));
    } 
  })
}

}, 1000);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,document.getElementById('root')
  );
  // registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
