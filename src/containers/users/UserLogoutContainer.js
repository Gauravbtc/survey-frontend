import MUserLogout from '../../components/users/UserLogout';
import { connect } from 'react-redux';
import { userLogout, userLogoutSuccess,userLogoutFailure} from '../../actions/user_action';

function mapStateToProps(state){
  return{
    loginUser: state.user.loginUser
  }
}

function matchDispatchToProps(dispatch){
  return {
    userLogout: (token) => {
      (dispatch(userLogout(token)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(userLogoutSuccess(response.data));
            localStorage.clear();
          }
          else{
            dispatch(userLogoutFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(userLogoutFailure(err))
      })
    },
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(MUserLogout);