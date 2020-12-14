import TClaimImport from '../../components/tclaims/TClaimImport';
import { connect } from 'react-redux';
import { importInvoiceClaim, importInvoiceClaimSuccess,importInvoiceClaimFailure,importInvoiceClaimReset} from '../../actions/tclaims_action';

function mapStateToProps(state){
  return{
    impClaim: state.claim.impClaim
  }
}

function matchDispatchToProps(dispatch){
  return {
    importInvoiceClaim: (params) => {
      (dispatch(importInvoiceClaim(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(importInvoiceClaimSuccess(response.data));
          }
          else{
            dispatch(importInvoiceClaimFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(importInvoiceClaimFailure(err.response.data))
      })
    },
    importInvoiceClaimReset: () => {
      (dispatch(importInvoiceClaimReset()));
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(TClaimImport);