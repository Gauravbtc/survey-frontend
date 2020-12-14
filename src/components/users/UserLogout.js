import { Component } from 'react';
import { withRouter } from 'react-router-dom';


class MUserLogout extends Component{
  componentDidMount(){
    var token = localStorage.getItem("user");
    this.props.userLogout(token);   
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loginUser.success){
      this.props.history.push("/login");
    }
  }

  render(){
    return null; 
  }
}

export default withRouter(MUserLogout);