// Login User Nav items 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from '../containers/musersContainer/MUserLogoutContainer';

class NavItem extends Component{
  
  render(){
    return(
      <Logout />
    );
  }
}


export default NavItem;