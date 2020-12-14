import LoginUser from '../../components/users/UserLogin';
import { connect } from 'react-redux';
import { userLogin, userLoginSuccess, userLoginFailure, resetUser } from '../../actions/user_action';

function mapStateToProps(state, ownProps){
  return{
    loginUser: state.user.loginUser,
    params: ownProps
  }
}

function matchDispatchToProps(dispatch){
  return {
    userLogin: (params) => {
      (dispatch(userLogin(params)).payload)
        .then((response) => {
          if(response.status == 200 && response.data.success){
            localStorage.setItem('user', response.data.data.auth_token);  
            dispatch(userLoginSuccess(response.data)); 
          }
          else{
            dispatch(userLoginFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(userLoginFailure(err))
      })
    },
    resetMUser: ()=>{
      dispatch(resetUser());
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(LoginUser)