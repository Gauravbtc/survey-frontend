import React, { Component, useEffect } from 'react';
import Loader from '../../layouts/Loader';
import Survey from './Survey';


function SurveyShow(props) {
  const { survey, loading, error } = props.surveyShow;
  

  useEffect(() => {
    // Update the document title using the browser API
    if (props.surveyShow){
      var id = props.match.params.id
      props.fetchSurvey(id);
    }
  },[]);


  const goBack = () => {
    return props.history.goBack();
  }
    
  const formateDate = (datevalue) => {
    if(datevalue){
      let date = new Date(datevalue)
      return ( date.getFullYear() + "/" + date.getMonth() + 1) + "/" + (date.getDate()) + "/"
    }
  }
    
  const questions_details = (survey_detail) =>{
    return survey_detail.map((survey)=>{
      return(
        <tr key={survey.id}>
          <td>{survey.title}</td>
          <td>{survey.options.toString()}</td>
        </tr>
      )
    })
  }

  const participant_details = (participant_detail) => {
    return participant_detail.map((partcipant)=>{
      return(
        <tr key={partcipant.id}>
          <td>{partcipant.name}</td>
          <td>{partcipant.email}</td>
          <td>{partcipant.survey_link}</td>
        </tr>
      )
    })
  }

    var survey_detail = null;
    var participant_details_1 = null;
    if(loading) {
      return <Loader />
    }else if(error){
      return  <main><div className="container-fluid"><div className="alert alert-danger">Error: {error}</div></div></main>
    }else if (!survey) {
      return <span />}
    else if(Survey){
      survey_detail = survey.questions
      participant_details_1 = survey.participants
      return(
        <main>
          <div className="page-title">
            <div className="container-fluid">
              <h1>Survey detail</h1>
            </div>
          </div>
          <div className="container-fluid">
            <div className="panel panel-default">
              <div className="panel-heading">Survey Details
               <div className="pull-right">
                <button onClick={goBack} className="btn btn-primary btn-space">Back</button>
               </div>
              </div>
              <div className="panel-body">
                <div>
                  <p>Title: {survey.title}</p>
                  <p>Description: {survey.description}</p>
                  <p>Date: {formateDate(survey.updated_at)}</p><br/>
                  <b>Question details</b><hr/>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover table-condensed" cellSpacing="0" cellPadding="4">
                      <thead>
                        <tr>
                          <th>Question Title</th>
                          <th>Question Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        {questions_details(survey_detail)}
                      </tbody>
                    </table>
                  </div>
  
                  <div className="table-responsive">
                    <table className="table table-striped table-hover table-condensed" cellSpacing="0" cellPadding="4">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Survey Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {participant_details_1.length > 0 && participant_details(participant_details_1)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }  
}


export default SurveyShow;