import React from "react";
import '../css/style.css';
import '../css/animate.css';
import logo from '../images/white.png'


const LoginLayout = props => (
  <div>
    <section>
      <div className="container">
        <div className="row">
          <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
              {props.children}
            </div>  
          </div>  
        </div>
      </div>
    </section>
  </div>
);

export default LoginLayout;