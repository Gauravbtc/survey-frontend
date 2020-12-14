import TClaimNew from '../../components/tclaims/TClaimNew';
import { connect } from 'react-redux';
import { createClaim,createClaimSuccess,createClaimFailure,createClaimReset } from '../../actions/tclaims_action';
import { fetchInvoice,fetchInvoiceSuccess,fetchInvoiceFailure} from '../../actions/tinvoices_action'

function mapStateToProps(state){
  return{
    invoiceShow: state.invoice.invoiceShow,
    claimNew: state.claim.claimNew,
    loginUser: state.user.loginUser
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchInvoice: (id) => {
      (dispatch(fetchInvoice(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchInvoiceSuccess(response.data));
          }
          else{
            dispatch(fetchInvoiceFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(fetchInvoiceFailure(response.data))
      })
    },
    createClaim: (params) => {
      (dispatch(createClaim(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(createClaimSuccess(response.data));
          }
          else{
            dispatch(createClaimFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(createClaimFailure(response.data))
      })
    },
    claimReset: () =>{
      dispatch(createClaimReset());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TClaimNew);