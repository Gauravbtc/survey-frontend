import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  '../css/header.css';


class UserHeader extends Component{
  render(){
    const { user } = this.props.user;
    // if(!user){
    //   return <div><header>hhh</header></div>
    // }
    return(
    <div>
      <header>
        {/* <UserMenu /> */}
      </header>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.loginUser
  };
}

export default withRouter(connect(mapStateToProps)(UserHeader));