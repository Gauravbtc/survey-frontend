import React ,{ Component } from 'react'
import { withRouter } from 'react-router-dom';

class SurveyVerification extends Component{
  componentWillMount() {
    // console.log("----", this.props.match.params.token)
    this.props.serveyConfirmation(this.props.match.params.token);
  }

  componentWillReceiveProps(nextProps) {
    console.log("---", nextProps)
    if(nextProps.surveyVerification.error){
      alert("Some thing went wrong");
    }
    if(nextProps.surveyVerification.success){
      this.props.history.push('/participant');
    }
  }


  render(){
    const { loading, error } = this.props.surveyVerification;
    if(loading) {
      return <div className="container"><h1>Loading</h1></div>
    }
    else if(error){
      return <main><div className="container-fluid"><div className="alert alert-danger">Error: {error.message}</div></div></main>
    }
    return false;
  }
}

export default withRouter(SurveyVerification);