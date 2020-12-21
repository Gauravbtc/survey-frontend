import SurveyParticipantForm from './SurveyParticipantForm'
import Loader from '../../layouts/Loader'

const SurveyParticipant = (props) => {
  const { error , loading} = props.surveyVerification
  const submit = (values) => {
    if(props.surveyVerification.success){
      if(values.email === props.surveyVerification.participant.email && values.name ===  props.surveyVerification.participant.name){
        localStorage.setItem('survey_token', props.surveyVerification.participant.survey_token);
        props.history.push("/feedback")
      }
      else{
        alert("Please check your name and email address")
      }   
    }
    else{
      alert("Please check your name and email address")
    }
  }

  const error_message =(error) =>{
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
        <SurveyParticipantForm onSubmit={submit} />
      </main>
    );
  }
}

export default SurveyParticipant;