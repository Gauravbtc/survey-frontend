import React from "react";
import Header from './Header.js';
import { connect } from 'react-redux';
import Loader from './Loader';


const DashBoardLayout = props => (
  <div>
    {props.user.user? [ <Header key={1} />,props.children] : <Loader/>}
  </div>
);

const mapStateToProps = (state) => {
  return{
    user: state.user.loginUser
  }
}

export default connect(mapStateToProps)(DashBoardLayout);