import TBillShow from '../../components/tbills/TBillShow';
import { connect } from 'react-redux';
import { fetchBill,fetchBillSuccess,fetchBillFailure} from '../../actions/tbills_action';

function mapStateToProps(state){
  return{
    billShow: state.bill.billShow
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchBill: (id) => {
      (dispatch(fetchBill(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchBillSuccess(response.data));
          }
          else{
            dispatch(fetchBillFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchBillFailure(response.data))
      })
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TBillShow)