import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../layouts/Loader';

class TBillShow extends Component{
  componentDidMount(){
    var id = this.props.match.params.id;
    this.props.fetchBill(id);
  }

  orderTotal(order_detail){
    let total = 0;
    order_detail.map((order) => {
      return total += (Math.round(order.purchase_price) * order.ordered_qty ) - Math.round(order.discount);
    })
    return total.toFixed(2);
  }
  
  goBack(props){
    this.props.history.goBack();
  }

  formateDate = (datevalue) => {
    if(datevalue){
     let date = new Date(datevalue) 
      return (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + date.getFullYear()
    }
  }


  order_details(order_detail){
    return order_detail.map((order)=>{
      return(
        <tr key={order.id}>
          <td>{order.m_product.name}</td>
          <td>{order.m_product.sku}</td>
          <td>{order.purchase_price}</td>
          <td>{order.discount}</td>
          <td>{order.ordered_qty}</td>
          <td>{((order.purchase_price * order.ordered_qty) - order.discount).toFixed(2)}</td>
        </tr>
      )
    })
  }

  render(){
    const { bill, loading, error } = this.props.billShow;
    var order_detail = null;
    if(loading) {
      return <Loader />
    }else if(error){
      return  <main><div className="container-fluid"><div className="alert alert-danger">Error: {error}</div></div></main>
    } else if (!bill) {
      return <span />}
    else if(bill){
       order_detail = bill.t_purchase_order.t_purchase_order_details
     }
    return(
      <main>
        <div className="page-title">
          <div className="container-fluid">
            <h1>Bill detail</h1>
          </div>
        </div>
        <div className="container-fluid">
			    <div className="panel panel-default">
            <div className="panel-heading">Bill Details
             <div className="pull-right">
              <button onClick={this.goBack.bind(this)} className="btn btn-primary btn-space">Back</button>
              <Link to= {`/bills/${bill.id}/edit`} className="btn btn-primary">Edit</Link>
             </div>
            </div>
				    <div className="panel-body">
              <div>
                <p>Bill No: {bill.bill_no}</p>
                <p>Bill Date: {this.formateDate(bill.bill_date)}</p>
                <p>Status: {bill.m_status? bill.m_status.name: bill.status}</p>
                <p>Order No: {bill.t_purchase_order.order_no}</p>
                <div className="table-responsive">
                  <table className="table table-striped table-hover table-condensed" cellSpacing="0" cellPadding="4">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Discount</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.order_details(order_detail)}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="8"><span className="pull-right btn-total">Total: {this.orderTotal(order_detail)}</span></td>
                      </tr>
                    </tfoot>
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

export default TBillShow;