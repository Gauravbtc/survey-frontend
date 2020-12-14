import React, { Component } from 'react';
import TBillForm from './TBillForm';
import Loader from '../../layouts/Loader';

class TBillEdit extends Component{ 
  componentDidMount(){
    var id = this.props.match.params.id;
    this.props.fetchBill(id);
  }

  submit = (values) => {
    let t_bill = {
      "id": values.id,
      "bill_no": values.bill_no,
      "bill_date": values.bill_date,
      "m_status_id": values.m_status_id.value,
      "t_purchase_order_id": values.t_purchase_order_id,
      "created_by_id": values.created_by_id,
      "updated_by_id": values.updated_by_id
    }
    this.props.updateBill(t_bill);
  }

  componentWillUnmount() {
    this.props.resetBillUpdate();
  }

  initialize_new_values(bill){
    const formvalues = {
      id: bill.id,
      bill_no: bill.bill_no,
      bill_date: bill.bill_date,
      m_status_id: bill.m_status? {'label': bill.m_status.name,'value': bill.m_status.id} : '',
      purchase_order_no: bill.t_purchase_order.order_no,
      t_purchase_order_id: bill.t_purchase_order_id,
      created_by_id: bill.created_by_id,
      updated_by_id: this.props.loginUser.user.id,
    }
    return formvalues;
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.billUpdate.success){
      this.props.history.push("/bills/show/"+ nextProps.billUpdate.bill.id)
    }
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
    const { loading,  message } = this.props.billUpdate;
    const { bill } = this.props.billShow;
    
    if(loading) {
      return <Loader />
    }else if(!bill){
      return <span />
    }
    return(
      <main>
        <div className="page-title">
			    <div className="container-fluid">
				    <h1>Bill</h1>
			    </div>
	    	</div>
        {this.error_message(message)}
        {this.props.loginUser && <TBillForm onSubmit={this.submit} initialValues={this.initialize_new_values(bill)} order = {bill.t_purchase_order} /> }
      </main>
    );
  }
}

export default TBillEdit;