const searchReducer = (state=[],action) => {
    console.log(action.type);
    switch (action.type) {
      case 'SEARCH_USER_SUCCESS':
        return {users:action.users};

    default:
      return state;    
    }
  }
  
  export default searchReducer;