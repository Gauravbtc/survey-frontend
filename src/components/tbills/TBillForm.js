import React ,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import momentLocaliser from 'react-widgets-moment';
import moment from 'moment';
import MStatus from '../mstatus/MStatus';

momentLocaliser(moment);

const validate = (values) => { 
  const errors = {}
  if(!values.m_status_id){
    errors.m_status_id = "Status is required"
  }
  return errors
}

const required = value => (value ? undefined : 'Required')

const renderField = ({input,label,type,meta: { touched, error }}) =>
  <div>
    <div className="form-group">
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched &&
        ((error &&
          <span style={{color: "red"}}>
            {label + error}
          </span>))}
    </div>
  </div>

const renderOrderNo = ({input,label,type,meta: { touched, error }}) =>
  <div>
    <div className="form-group">
      <input {...input} placeholder={label} type={type} className="form-control" disabled/>
      {touched &&
        ((error &&
          <span style={{color: "red"}}>
            {label + error}
          </span>))}
    </div>
  </div>


const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
  onChange={onChange}
  format="DD MMM YYYY"
  time={showTime}
  value={!value ? null : new Date(value)}
/>

class TBillForm extends Component{
  orderTotal(order_detail){
    let total = 0;
    order_detail.map((order) => {
      return total += (Math.round(order.purchase_price) * order.ordered_qty ) - Math.round(order.discount);
    })
    return total;
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

  goBack = (props) => {
    this.props.history.goBack();
  }
  
  render(){
    const { handleSubmit, pristine, reset, submitting,order,change } = this.props
    var order_detail = null;
    if(order){
      order_detail = order.t_purchase_order_details
    }
    
    return(
      <div className="container-fluid">
        <div className="panel panel-default">
        <div className="panel-heading">Bill 
						<div className="pull-right">
              <button onClick={this.goBack.bind(this)} className="btn btn-primary btn-space">Back</button>
            </div>
				</div>
          <div className="panel-body">
          <form onSubmit={ handleSubmit }>	
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Bill No <span className="text-danger">*</span> </label>
							  		<Field name="bill_no" component={renderField} type="text" label="Bill No " validate={[required]}/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Status<span className="text-danger">*</span></label>
                  <Field name="m_status_id" component= {MStatus} type = "BILL" className="form-control"  change = {change}/>
								</div>
							</div>
						</div>
						
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Bill Date<span className="text-danger">*</span></label>
                  <Field name="bill_date" component={renderDateTimePicker} showTime={false} />
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									 <label>Purchase Order No</label>
                   <Field name="purchase_order_no" component={renderOrderNo} type="text" label="Purchase Order No " />
								</div>
							</div>
						</div>
            <div className="row">
                <div className="col-sm-12">
                <div className="table-responsive">
                  <table className="table table-striped table-hover table-condensed" cellSpacing="0" cellPadding="4">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">SKU</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Ordered Qty</th>
                        <th scope="col">Amount</th>
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

						<div className="panel-footer">
              <button type="button" className="btn btn-default" disabled={ submitting} onClick={reset}>Cancel</button>
              <button type="submit" className="btn done-btn btn-primary" disabled={pristine || submitting}>Done</button>
            </div>  
					</form>
          </div>                  
        </div>						
		  </div>
    )
  }
}

TBillForm = reduxForm({
  // a unique name for the form
  form: 'TBillForm',
  validate

})(TBillForm)

export default withRouter (TBillForm);