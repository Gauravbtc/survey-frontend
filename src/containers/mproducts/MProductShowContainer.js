import MProductShow from '../../components/mproducts/MProductShow';
import { connect } from 'react-redux';
import { fetchProduct , fetchProductSuccess ,fetchProductFailure } from '../../actions/mproducts_action';

function mapStateToProps(state){
  return{
    productShow: state.product.productShow
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchProduct: (id) => {
      (dispatch(fetchProduct(id)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchProductSuccess(response.data));
          }
          else{
            dispatch(fetchProductFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchProductFailure(err.response.data))
      })
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(MProductShow)