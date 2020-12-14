import React ,{ Component } from 'react'
import { withRouter } from 'react-router-dom';
class Confirmation extends Component{
  componentWillMount() {
    this.props.muserConfirmation(this.props.match.params.query1);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loginUser.success){
      if(nextProps.loginUser.user.role ==="admin"){
        this.props.history.push('/dashboard');
       }
       else{
         this.props.history.push('/userdashboard');
       }
    }
  }

  render(){
    const { loading } = this.props.loginUser;
    if(loading) {
      return <div className="container"><h1>Loading</h1></div>
    }
    return false;
  }
}

export default withRouter(Confirmation);