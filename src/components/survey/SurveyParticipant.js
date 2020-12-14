import React, { Component } from 'react';
import SurveyParticipantForm from './SurveyParticipantForm';
import Loader from '../../layouts/Loader';


class SurveyParticipant extends Component{ 
  
  submit = (values) => {

    if(this.props.surveyVerification.success){
       if(values.email == this.props.surveyVerification.participant.email && values.name ==  this.props.surveyVerification.participant.name) {
        this.props.history.push("/feedback");
       }
       else{
         alert("Please check your name and email address")
       }
    }
    // values["user_id"] = this.props.loginUser.user.id
    // values["survey_id"] = this.props.match.params.id
    // this.props.createParticipant(values)
  }

  componentWillReceiveProps(nextProps) {
    // if(nextProps.newParticipant.success){
    //   this.props.history.push("/survey/show/"+ nextProps.newParticipant.participant.survey_id)
    // }
  }
  
  // componentWillUnmount(){
  //   this.props.resetcreateParticipant();
  // }

  error_message(error){
    if(error){
      const mssages  = Object.keys(error).map(function (key) {
        return [ <li key={key}> {key} {error[key]} </li> ]
      })

     const msg =  <ul>{mssages}</ul>
    return <div className="alert alert-danger">{msg} </div>}
  }


  render(){
    console.log("--", this.props)
    const { error , loading} = this.props.surveyVerification
    if(loading) {
      return <Loader />
    }
    return(
      <main>
        <div className="page-title">
			    <div className="container-fluid">
				    <h1>Participant</h1>
			    </div>
	    	</div>
        {this.error_message(error)}
        {/* {this.renderBill(order)}  */}
        <SurveyParticipantForm onSubmit={this.submit} />
      </main>
    );
  }
}

export default SurveyParticipant;