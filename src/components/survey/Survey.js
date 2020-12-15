import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Loader from '../../layouts/Loader';

const Survey = (props) =>{
  const { surveys, loading, error } = props.surveyList;

  useEffect(() => {  
    props.fetchSurveys()
  },[]);


  const deleteSurvey = (bill,invoiceList) => {
    // this.props.deleteBill(bill.id,this.props.billList.bills,this.props.bill_pagination); 
  }

  const formateDate = (datevalue) => {
    if(datevalue){
     let date = new Date(datevalue) 
      return ( date.getFullYear() + "/" + date.getMonth() + 1) + "/" + (date.getDate()) 
    }
  }

  const createSurvey = (surveys) =>{
    return surveys.map((survey)=>{
      return(
        <tr key={survey.id}>
          <td>{survey.title}</td>
          <td>{formateDate(survey.created_at)}</td>
          <td className="view-edi-del">
            <Link to={`/survey/show/${survey.id}`} className="btn btn-default btn-sm"><FontAwesome name='eye' className="margin-right-0"/></Link>
            <Link to={`/survey/${survey.id}/edit`} className="btn btn-default btn-sm btn-primary"><FontAwesome name='pencil' className="margin-right-0" /></Link>
            <Link to={`/survey/${survey.id}/participant`} className="btn btn-default btn-sm btn-primary"><FontAwesome name='share-alt' className="margin-right-0" /></Link>
          </td>  
        </tr>
        )
    })
  }
  
  if(loading) {
    return <Loader />
  }else if(error) {
    return <main><div className="container-fluid"><div className="alert alert-danger">Error: {error.message}</div></div></main>
  }else if(surveys.length === 0){
    return <main><div className="container-fluid"><h1>Surveys</h1><h3>No Surveys found</h3></div></main>
  }else{
    return(
      <main>
        <div className="page-title">
          <div className="container-fluid">
            <h1>Surveys</h1> 
          </div>
        </div>
        <div className="container-fluid">
          <div className="panel panel-default">
            <div className="panel-heading">Surveys
                <div className="pull-right">
                  <Link to="/survey/new" className="btn btn-primary">Create</Link>
                </div>
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover table-condensed" cellSpacing="0" cellPadding="4">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {createSurvey(surveys)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Survey;