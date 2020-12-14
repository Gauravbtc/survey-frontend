import React, { Component } from 'react';
import '../css/style.css';
import '../css/animate.css';


class Dashborad extends Component{
  render(){
    return(
    <main>
      <div className="page-title">
        <div className="container-fluid">
          <h1>Dashboard</h1>
        </div>
      </div>
      <div className="container-fluid">
			  <div className="panel panel-default">
				  <div className="panel-body">
            <h3>Welcome to Survey App</h3>
          </div>
       </div>
      </div>
    </main>
    );
  }
}

export default Dashborad;