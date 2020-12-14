import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
// import SearchInput, {createFilter} from 'react-search-input';
// import '../../css/search.css';
// import BillDeleteDialog from './BillDeleteDialog';
// import Pagination from '../../containers/pagination/PaginationContainer';
import Loader from '../../layouts/Loader';

class Survey extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ' '
    };
  }

  // searchUpdated(term) {
  //   this.setState({searchTerm: term})
  // }

  componentWillMount(){
    this.props.fetchSurveys();
  }

  deleteSurvey = (bill,invoiceList) => {
    // this.props.deleteBill(bill.id,this.props.billList.bills,this.props.bill_pagination); 
  }

  formateDate = (datevalue) => {
    if(datevalue){
     let date = new Date(datevalue) 
      return ( date.getFullYear() + "/" + date.getMonth() + 1) + "/" + (date.getDate()) 
    }
  }

  createSurvey(surveys){
    return surveys.map((survey)=>{
      return(
        <tr key={survey.id}>
          <td>{survey.title}</td>
          <td>{this.formateDate(survey.created_at)}</td>
          <td className="view-edi-del">
            <Link to={`/survey/show/${survey.id}`} className="btn btn-default btn-sm"><FontAwesome name='eye' className="margin-right-0"/></Link>
            <Link to={`/survey/${survey.id}/edit`} className="btn btn-default btn-sm btn-primary"><FontAwesome name='pencil' className="margin-right-0" /></Link>
            <Link to={`/survey/${survey.id}/participant`} className="btn btn-default btn-sm btn-primary"><FontAwesome name='mail' className="margin-right-0" /></Link>

            {/* <BillDeleteDialog bill= {bill} billList = { this.props.billList.bills } billDelete = {this.deleteBill} message = "Are you sure you want to delete this bill?" deleteMessage = "Delete Bill" /> */}
          </td>  
        </tr>
      )
    })
  }

  render(){
    const { surveys, loading, error } = this.props.surveyList;
    // const KEYS_TO_FILTERS = ['bill_no', 'status'];
    // const filteredBills = bills.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    // const {currentData} = this.props.bill_pagination;
    
    if(loading) {
      return <Loader />
    }else if(error) {
      return <main><div className="container-fluid"><div className="alert alert-danger">Error: {error.message}</div></div></main>
    }else if(surveys.length === 0){
      return <main><div className="container-fluid"><h1>Surveys</h1><h3>No Surveys found</h3></div></main>
    }
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
              {/* <SearchInput className="search-input" onChange={this.searchUpdated.bind(this)} /> */}
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
                   {/* {filteredBills.length <= 10 ? this.createBill(filteredBills) : this.createBill(currentData)} */}
                   {this.createSurvey(surveys)}
                  </tbody>
                </table>
              </div>
              {/* {filteredBills.length > 10 && <Pagination data={filteredBills} currentPage={1} perPage={10} /> } */}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Survey;