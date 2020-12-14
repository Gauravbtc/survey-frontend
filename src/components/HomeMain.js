import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
class HomeMain extends Component{
  render(){
    return(
      <div>
        <div className="col-sm-12">
          <div className="btn-group login-btn pull-right" role="group" aria-label="...">
            <Link to='/login' className="fadeInRight btn btn-default " > Sign In </Link>
            <Link to='/signup' className="fadeInRight btn btn-default" > Sign Up </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMain;