import React from "react";
import UserHeader from './UserHeader.js';
import { connect } from 'react-redux';

const UserDashBoardLayout = props => (
  <div>
    {props.user ? [<UserHeader key = {0}/>,  props.children] : <div> Loading... </div> }
  </div>
);


const mapStateToProps = (state) => {
  return{
    user: localStorage.getItem("survey_token")
  }
}


export default connect(mapStateToProps)(UserDashBoardLayout);
