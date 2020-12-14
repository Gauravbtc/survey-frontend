import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  '../css/header.css';
import Menu from './Menu';

class Header extends Component{
  render(){
    const { user } = this.props.user;
    if(!user){
      return <div><header><Menu /></header></div>
    }
    return(
    <div>
      <header>
        <Menu />
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

export default withRouter(connect(mapStateToProps)(Header));