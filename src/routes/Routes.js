import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../containers/users/UserLoginContainer';
import SignUp from '../containers/users/UserSignUpContainer';
import Logout from '../containers/users/UserLogoutContainer';
import AppRoute from './AppRoute';
import LoginLayout from '../layouts/LoginLayout';
import UserDashBordLayout from "../layouts/UserDashBordLayout";
import DashBoardLayout from '../layouts/DashBoradLayout';
import Dashboard from '../components/Dahboard';
import PrivateRoute from '../components/auth/PrivateRoute';
import SurveyNew from '../containers/survey/SurveyNewContainer';
import Survey from '../containers/survey/SurveyContainer';
import SurveyShow from "../containers/survey/SurveyShowContainer";
import SurveyEdit from "../containers/survey/SurveyEditContainer";
import CreateParticipant from "../containers/survey/ParticipantContainer";
import SurveyVerification from "../containers/survey/SurveyVerificationContainer";
import SurveyParticipant from "../containers/survey/SurveyParticipantContainer";
import FeedBack from "../containers/survey/FeedBackContainer";
import SurveyResult from "../containers/survey/SurveyResultContainer";

export default ( ) => (
  <Switch>
    <AppRoute path ='/signup' exact layout= {LoginLayout }component = {SignUp} />
    <AppRoute path ='/login' exact layout= {LoginLayout} component = {Login} />
    <AppRoute path ='/logout' layout={LoginLayout}  exact component = {Logout} />
    <AppRoute path='/' exact  layout={LoginLayout} component = {Login} />
    <PrivateRoute path='/dashboard' layout={DashBoardLayout} exact component = {Dashboard} />
    <PrivateRoute path='/surveys' layout={DashBoardLayout} exact component = {Survey} />   
    <PrivateRoute path='/survey/new' layout={DashBoardLayout} exact component = {SurveyNew} />
    <PrivateRoute path='/survey/show/:id' layout={DashBoardLayout}  exact component = {SurveyShow} />
    <PrivateRoute path='/survey/:id/edit' layout={DashBoardLayout}  exact component = {SurveyEdit} />
    <PrivateRoute path='/survey/:id/participant' layout={DashBoardLayout}  exact component = {CreateParticipant} />
    <AppRoute path='/survey/token=:token' layout= {LoginLayout} exact component={SurveyVerification} />
    <AppRoute path='/participant' layout= {LoginLayout} exact component={SurveyParticipant} />
    <AppRoute path='/feedback'  layout = {UserDashBordLayout} exact component={FeedBack} />
    <AppRoute path='/survey_result/:id'  layout = {UserDashBordLayout} exact component={SurveyResult} />
    

    {/* <AppRoute  exact layout= {LoginLayout }component = {NotFound}  /> */}
    
  </Switch>
);