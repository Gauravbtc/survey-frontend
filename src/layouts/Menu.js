import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import $ from 'jquery';

const Menu =(props) =>{
  const { user } = props.user;

  useEffect(() => {  
    $('.menuToggle').on('click', function(e){
      e.preventDefault();
      $('body').toggleClass('closeNav');
    });

    var path = window.location.href; 
    $('li a').each(function() {
      if (this.href === path) {
        $(this).parent().parent().parent().addClass("open")
      }
    });
    
  },[]);


  if(user){
    return(
      <div>
        <div className="container-fluid">			
          <div className="header-main">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-5 col-xs-6">
                <a role="button" href="#" className="menuToggle"><span></span></a>
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
            <li key= {1}><Link to="/survey/new">Create Survey</Link></li>
            <li key= {2}><Link to="/surveys">Survey</Link></li>
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

export default withRouter(connect(mapStateToProps)(Menu));