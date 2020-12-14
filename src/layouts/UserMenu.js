import React, { Component } from 'react';
import  logo from '../images/logo.png';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import $ from 'jquery';

class UserMenu extends Component{
  componentDidMount(){
    $('.menuToggle').on('click', function(e){
      e.preventDefault();
      $('body').toggleClass('closeNav');
    });
  }
  
  render(){
    const { user } = this.props.user;
    
    return(
      <div>
        <div className="container-fluid">			
          <div className="header-main">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-5 col-xs-6">
                <a role="button" className="menuToggle"><span></span></a>
                <a className="logo" href="index.html" title="Vendor Express">
                  <img src= {logo} className="img-responsive" alt="logo"/>
                  <img src="images/mobile-logo.png" alt="" title="" className="visible-xs" /> </a>
                <span>
                  <span id="date"></span>
                </span>
                
              </div>
              <div className="col-lg-8 col-md-8 col-sm-7 col-xs-6">
                <ul className="list-inline text-right nav-secondary">							
                  <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="glyphicon glyphicon-user"></i> {user && user.username}  </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li><Link to="/logout">Logout</Link></li>
                    </ul>
                  </li>							
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <a role="button" className="menuToggle">Menu<span></span></a>
          <ul className="nav">
            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" role="button">Contact <i className="glyphicon glyphicon-menu-right"></i></a>
                <ul className="dropdown-menu">
                  <li key={1}><Link to='/contact'>Contact</Link></li>
                </ul>
              </li>
          </ul>
        </nav>
       </div> 
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.loginUser
  };
}

export default withRouter(connect(mapStateToProps)(UserMenu));