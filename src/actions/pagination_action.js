export const setPagination = (data, currentPage, perPage) => {
  let indexOfLastTodo = currentPage * perPage;
  let indexOfFirstTodo = indexOfLastTodo - perPage;
  let currentData = data.slice(indexOfFirstTodo, indexOfLastTodo);
  return{
    type: "SET_PAGINATION",
    payload: {data: data, currentData: currentData, currentPage: currentPage, perPage: perPage}
  }
}

export const resetPagination = () => {
  return {
    type: "RESET_PAGINATION"
  }
}
