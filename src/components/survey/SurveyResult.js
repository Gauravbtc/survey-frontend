import React, { Component, useEffect } from 'react';
import Loader from '../../layouts/Loader';
// import Survey from './Survey';


function SurveyResult(props) {
  const { survey, loading, error } = props.showSurveyResult;
  useEffect(() => {
    // Update the document title using the browser API
    if (props.showSurveyResult){
      var id = props.match.params.id
      props.fetchSurveyResult(id);
    }
  },[]);


    
  const questions_answers = (survey_detail) =>{
    return survey_detail.map((survey,index)=>{
      return(
        <tr key={index}>
          <td>{survey.question}</td>
          <td>{survey.ans}</td>
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
        </tr>
      )
    })
  }

    var survey_ans_detail = null;
    var participant_details_1 = null;
    if(loading) {
      return <Loader />
    }else if(error){
      return  <main><div className="container-fluid"><div className="alert alert-danger">Error: {error}</div></div></main>
    }else if (!survey) {
      return <span />}
    else if(survey){
      survey_ans_detail = survey.questions_answers
      return(
        <main>
          <div className="page-title">
            <div className="container-fluid">
              <h1>Survey Results</h1>
            </div>
          </div>
          <div className="container-fluid">
            <div className="panel panel-default">
              <div className="panel-heading">Survey Results Details</div>
              <div className="panel-body">
                <div>
                  <p>Name: {survey.name}</p>
                  <p>Email: {survey.email}</p>
                  <p>Survey Name: {survey.survey_name}</p><br/>
                  <b>Question Answers details</b><hr/>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover table-condensed" cellSpacing="0" cellPadding="4">
                      <thead>
                        <tr>
                          <th>Question</th>
                          <th>Answer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {questions_answers(survey_ans_detail)}
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


export default SurveyResult;