import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SearchInput, {createFilter} from 'react-search-input';
import '../../css/search.css';
import BillDeleteDialog from './BillDeleteDialog';
import Pagination from '../../containers/pagination/PaginationContainer';
import Loader from '../../layouts/Loader';

class TBill extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ' '
    };
  }

  searchUpdated(term) {
    this.setState({searchTerm: term})
  }

  componentWillMount(){
    this.props.fetchBills();
  }

  deleteBill = (bill,invoiceList) => {
    this.props.deleteBill(bill.id,this.props.billList.bills,this.props.bill_pagination); 
  }

  formateDate = (datevalue) => {
    if(datevalue){
     let date = new Date(datevalue) 
      return (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + date.getFullYear()
    }
  }

  createBill(bills){
    return bills.map((bill)=>{
      return(
        <tr key={bill.id}>
          <td>{bill.bill_no}</td>
          <td>{this.formateDate(bill.bill_date)}</td>
          <td>{bill.m_status? bill.m_status.name: bill.status}</td>
          <td className="view-edi-del">
            <Link to={`/bills/show/${bill.id}`} className="btn btn-default btn-sm"><FontAwesome name='eye' className="margin-right-0"/></Link>
            <Link to={`/bills/${bill.id}/edit`} className="btn btn-default btn-sm btn-primary"><FontAwesome name='pencil' className="margin-right-0" /></Link>
            <BillDeleteDialog bill= {bill} billList = { this.props.billList.bills } billDelete = {this.deleteBill} message = "Are you sure you want to delete this bill?" deleteMessage = "Delete Bill" />
          </td>  
        </tr>
      )
    })
  }

  render(){
    const { bills, loading, error } = this.props.billList;
    const KEYS_TO_FILTERS = ['bill_no', 'status'];
    const filteredBills = bills.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    const {currentData} = this.props.bill_pagination;
    
    if(loading) {
      return <Loader />
    }else if(error) {
      return <main><div className="container-fluid"><div className="alert alert-danger">Error: {error.message}</div></div></main>
    }else if(bills.length === 0){
      return <main><div className="container-fluid"><h1>Bills</h1><h3>No Bills found</h3></div></main>
    }
    return(
      <main>
        <div className="page-title">
          <div className="container-fluid">
            <h1>Bills</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="panel panel-default">
            <div className="panel-heading">Bills </div>
            <div className="panel-body">
              <SearchInput className="search-input" onChange={this.searchUpdated.bind(this)} />
              <div className="table-responsive">
                <table className="table table-striped table-hover table-condensed" cellSpacing="0" cellPadding="4">
                  <thead>
                    <tr>
                      <th scope="col">Bill No</th>
                      <th scope="col">Bill Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   {filteredBills.length <= 10 ? this.createBill(filteredBills) : this.createBill(currentData)}
                  </tbody>
                </table>
              </div>
              {filteredBills.length > 10 && <Pagination data={filteredBills} currentPage={1} perPage={10} /> }
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default TBill;