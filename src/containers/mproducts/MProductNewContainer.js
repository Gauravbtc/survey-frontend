import MProductNew from '../../components/mproducts/MProductNew';
import { connect } from 'react-redux';
import { createProduct , createProductSuccess,createProductFailure,createProductReset} from '../../actions/mproducts_action';

function mapStateToProps(state,ownProps){
  return{
    productNew: state.product.productNew,
    loginUser: state.user.loginUser
  }
}

function matchDispatchToProps(dispatch){
  return {
    createProduct: (params) => {
      (dispatch(createProduct(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(createProductSuccess(response.data));
          }
          else{
            dispatch(createProductFailure(response.data));
          }
        })
        .catch((response)=>{
          dispatch(createProductFailure(response.data))
      })
    },
    createProductReset: () => {
      dispatch(createProductReset());
    }
   }
}

export default connect(mapStateToProps,matchDispatchToProps)(MProductNew)