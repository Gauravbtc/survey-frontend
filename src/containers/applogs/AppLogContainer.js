import AppLog from '../../components/applogs/AppLog';
import { connect } from 'react-redux';
import { fetchAppLogs,fetchAppLogsSuccess ,fetchAppLogsFailure,deleteLog,deleteLogSuccess,deleteLogFailure} from '../../actions/applog_action';

function mapStateToProps(state){
  return{
    applogList: state.log.applogList,
    prevapplogList: state.log.prevapplogList
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchAppLogs: (page,params,sortDirection) => {
      (dispatch(fetchAppLogs(page,params,sortDirection)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(fetchAppLogsSuccess(response.data));
          }
          else{
            dispatch(fetchAppLogsFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(fetchAppLogsFailure(err))
      })
    },
    deleteLog: (id,logList) => {
      (dispatch(deleteLog(id)).payload)
      .then((response) => {
        if(!response.error && response.status === 200){
          dispatch(deleteLogSuccess(id,response.data,logList)); 
        }
        else{
          dispatch(deleteLogFailure(response.data));
        }
      })
      .catch((err)=>{
        dispatch(deleteLogFailure(err))
    })  
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(AppLog);