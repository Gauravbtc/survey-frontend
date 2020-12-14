import React, { Component } from 'react'

class FlashMessage extends Component {
  notification_message(message,success){
    if(message){
      let alert_type = success? "alert-success" : "alert-danger"; 
    return ( <div className= {`alert ${alert_type}`}>
      <div className="row">
        <div className="col-sm-12">
          <p className="x12-sales-order-msg">{message}</p>
        </div>
      </div>
    </div>)
    }
  }

  render() {
    const { message, success } = this.props
    return (
      <div>
        {this.notification_message(message,success)}
      </div>
    )
  }
}

export default FlashMessage;
