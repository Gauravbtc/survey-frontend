import React, { Component } from 'react';
import ParticipantForm from './ParticipantForm';
import Loader from '../../layouts/Loader';


class CreateParticipant extends Component{ 
  
  submit = (values) => {
    values["user_id"] = this.props.loginUser.user.id
    values["survey_id"] = this.props.match.params.id
    this.props.createParticipant(values)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newParticipant.success){
      this.props.history.push("/survey/show/"+ nextProps.newParticipant.participant.survey_id)
    }
  }
  
  componentWillUnmount(){
    this.props.resetcreateParticipant();
  }

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
    const { error , loading} = this.props.newParticipant
    const { user } = this.props.loginUser
    console.log("---",  user);
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
        <ParticipantForm onSubmit={this.submit} />
      </main>
    );
  }
}

export default CreateParticipant;