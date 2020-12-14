import Popup from "reactjs-popup";
import '../../css/model.css';
import FontAwesome from 'react-fontawesome';
import React, { Component } from 'react'

class BillDeleteDialog extends Component {
  render() {
    return (
    <Popup trigger={<FontAwesome name="trash" className="trash-height margin-right-0 btn btn-sm btn-danger" />} modal className="d-inline-block">
    {close => (
      <div className="b-text">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="modal-header">{this.props.deleteMessage}</div>
        <div className="modal-body font-size-13">
          {this.props.message}
        </div>
        <div className="modal-footer">
        <div className="actions">
        <button
            className="btn btn-success btn-sm"
            onClick={() => {
              this.props.billDelete(this.props.bill,this.props.BillList)
              close();
            }}
          >
            Confirm
          </button>
          <button
            className="btn btn-default btn-sm"
            onClick={() => {
              close()
            }}
          >
            cancel
          </button>
          </div>
      </div>
      </div>
    )}
  </Popup>
    )
  }
}

export default BillDeleteDialog;