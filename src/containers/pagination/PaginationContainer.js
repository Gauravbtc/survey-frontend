import Pagination from '../../components/pagination/Pagination';
import { connect } from 'react-redux';
import {setPagination} from '../../actions/pagination_action';

const mapStateToProps = (state, newProps) => {
  return{
    pagination_list: state.pagination.setPagination  
  }
}

const mapDispatchToProps = (dispatch, newProps) => {
  return{
    setPagination: (data, currentPage, perPage) =>{
      (dispatch(setPagination(data, currentPage, perPage)))
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps) (Pagination)