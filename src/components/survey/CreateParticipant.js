import React, { useEffect } from 'react'
import ParticipantForm from './ParticipantForm'
import Loader from '../../layouts/Loader'

const CreateParticipant = (props) => {
  const { error , success, loading} = props.newParticipant

  useEffect(() => {  
    if(success){
      props.resetcreateParticipant()
      props.history.push("/survey/show/"+ props.newParticipant.participant.survey_id)
    }
  },[success]);

  const submit = (values) => {
    values["user_id"] = props.loginUser.user.id
    values["survey_id"] = props.match.params.id
    props.createParticipant(values)
  }

  const error_message = (error) =>{
    if(error){
      const mssages  = Object.keys(error).map(function (key) {
        return [ <li key={key}> {key} {error[key]} </li> ]
      })

      const msg =  <ul>{mssages}</ul>
    return <div className="alert alert-danger">{msg} </div>}
  }

  if(loading) {
    return <Loader />
  }else{
    return(
        <main>
          <div className="page-title">
            <div className="container-fluid">
              <h1>Participant</h1>
            </div>
          </div>
          {error_message(error)}
          <ParticipantForm onSubmit={submit} />
        </main>
      );
  }
}

export default CreateParticipant;