import React, { Component } from 'react';
import TBillForm from './TBillForm';
import Loader from '../../layouts/Loader';

class TBillNew extends Component{ 
  componentDidMount(){
    var id = this.props.match.params.id;
    this.props.fetchPurchaseOrder(id);
  }

  submit = (values) => {
    let t_bill = {
      "bill_no": values.bill_no,
      "bill_date": values.bill_date,
      "m_status_id": values.m_status_id.value,
      "t_purchase_order_id": values.t_purchase_order_id,
      "created_by_id": values.created_by_id,
      "updated_by_id": values.updated_by_id
    }
    this.props.createBill(t_bill);
  }

  renderBill(order){
    if (order) {
      const bill_detail = this.props.loginUser.user && <TBillForm onSubmit={this.submit} initialValues={{purchase_order_no: order.order_no,created_by_id: this.props.loginUser.user.id,updated_by_id: this.props.loginUser.user.id, t_purchase_order_id: order.id }} order = {order} />
      return bill_detail;  
    }  
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.billNew.success){
      this.props.history.push("/bills/show/"+ nextProps.billNew.bill.id)
    }
  }

  componentWillUnmount(){
    this.props.billReset();
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
    const { order, loading } = this.props.orderShow;
    const { message } = this.props.billNew;

    if(loading) {
      return <Loader />
    }
    return(
      <main>
        <div className="page-title">
			    <div className="container-fluid">
				    <h1>Bill</h1>
			    </div>
	    	</div>
        {this.error_message(message)}
        {this.renderBill(order)} 
      </main>
    );
  }
}

export default TBillNew;