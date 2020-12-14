import UserSignUp from '../../components/users/UserSignUp';
import { connect } from 'react-redux';
import { userSignUp, userSignUpSuccess, userSignUpFailure} from '../../actions/user_action';

function mapStateToProps(state, ownProps){
  return{
    loginUser: state.user.loginUser,
    params: ownProps
  }
}

function matchDispatchToProps(dispatch){
  return {
    userSignUp: (params) => {
      (dispatch(userSignUp(params)).payload)
        .then((response) => {
          if(response.status === 200 && response.data.success){
            localStorage.setItem('user', response.data.data.auth_token); 
            dispatch(userSignUpSuccess(response.data));     
          }
          else{
            dispatch(userSignUpFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(userSignUpFailure(err))
      })
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(UserSignUp)