import React, { useEffect } from 'react';
import FeedBackForm from "./FeedBackForm";
// import SurveyParticipantForm from './SurveyParticipantForm';
import Loader from '../../layouts/Loader';

// class FeedBack extends Component{ 

//   submit = (values) => {
//     // values["user_id"] = this.props.loginUser.user.id
//     // values["survey_id"] = this.props.match.params.id
//     // this.props.createParticipant(values)
//     console.log("---", values);
//   }

//   componentDidMount(){
//     if(this.props.surveyParticipant.success){
//       debugger;
//       var id = this.props.surveyParticipant.participant.survey_id
//       this.props.fetchSurveyQuestion(id);
//     }
//   }
//   componentWillReceiveProps(nextProps) {
//     // if(nextProps.newParticipant.success){
//     //   this.props.history.push("/survey/show/"+ nextProps.newParticipant.participant.survey_id)
//     // }
//   }
  
//   // componentWillUnmount(){
//   //   this.props.resetcreateParticipant();
//   // }

//   error_message(error){
//     if(error){
//       const mssages  = Object.keys(error).map(function (key) {
//         return [ <li key={key}> {key} {error[key]} </li> ]
//       })

//      const msg =  <ul>{mssages}</ul>
//     return <div className="alert alert-danger">{msg} </div>}
//   }

//   initialize_new_values(survey){
//     var arrQuestions = [];
//     survey.questions.map((survey) => {
//       var survey_question = {
//         'id': survey.id,
//         'title': survey.title,
//         'options': survey.options
//        };
//       return arrQuestions.push(survey_question);
//     })

// 		const formvalues = {
//       id: survey.id,
//       title: survey.title, 
//       questions: arrQuestions
//     }
//      return formvalues;
//   }

//   render(){
//     console.log("--", this.props)
//     // const { error , loading} = this.props.surveyParticipant
//     // const { survey } = this.props.surveyQuestion
//     // if(loading) {
//     //   return <Loader />
//     // }
//     const survey = {title: "movie", "questions": [
//       {
//           "id": 34,
//           "title": "indian movie",
//           "options": [
//               "avanger",
//               "3idtios"
//           ],
//           "survey_id": 30,
//           "created_at": "2020-12-03T02:04:04.299Z",
//           "updated_at": "2020-12-03T02:05:08.274Z"
//       },
//       {
//           "id": 35,
//           "title": "cricket",
//           "options": [
//               "india",
//               "aus"
//           ],
//           "survey_id": 30,
//           "created_at": "2020-12-03T02:05:08.287Z",
//           "updated_at": "2020-12-03T02:05:08.287Z"
//       }
//   ]}
//     return(
//       <main>
//         <div className="page-title">
// 			    <div className="container-fluid">
// 				    <h1>FeedBack</h1>
// 			    </div>
// 	    	</div>
//         {/* {this.error_message(error)} */}
//          <FeedBackForm onSubmit={this.submit} initialValues={this.initialize_new_values(survey)} /> 
//       </main>
//     );
//   }
// }

const FeedBack = (props) =>{
  const { error , loading} = props.surveyParticipant
  const { survey } = props.surveyQuestion
  const { success } = props.surveyResult
  
  const submit = (values) => {
    values["user_id"] = props.surveyParticipant.participant.participant_id
    values["survey_id"] = props.surveyParticipant.participant.servey_id
    props.createSurveyResult(values)
    //console.log("---", values);
  }

  useEffect(() => { 
    if(props.surveyParticipant.success && !loading){
      let id = props.surveyParticipant.participant.survey_id
      props.fetchSurveyQuestion(id);
    }

    if(success){
      console.log("---------")
    }

  },[]);

  const error_message = (error) =>{
    if(error){
      const mssages  = Object.keys(error).map(function (key) {
        return [ <li key={key}> {key} {error[key]} </li> ]
      })

     const msg =  <ul>{mssages}</ul>
      return <div className="alert alert-danger">{msg} </div>
    }
  }

  const initialize_new_values = (survey) =>{
    var arrQuestions = [];
    if(survey && survey.questions.length > 0 ){
      survey.questions.map((survey) => {
        var survey_question = {
          'id': survey.id,
          'title': survey.title,
          'options': survey.options
          };
        return arrQuestions.push(survey_question);
      })

      const formvalues = {
        id: survey.id,
        title: survey.title, 
        questions: arrQuestions
      }
        return formvalues;
      }
  }
  

  if(loading) {
    return <Loader />
  }
  else {
    return(
      <main>
        <div className="page-title">
          <div className="container-fluid">
            <h1>FeedBack</h1>
          </div>
        </div>
        {/* {this.error_message(error)} */}
        { survey && <FeedBackForm onSubmit={submit} initialValues={initialize_new_values(survey)} /> }
      </main>
    );
  }
}

export default FeedBack;