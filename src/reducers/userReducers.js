const userReducer = (state=['maruti'],action) => {
    switch (action.type) {
      case 'USER_SE':
        return action.payload;
  
      case 'FETCH_POSTS_SUCCESS':
        return action.payload;
  
    default:
      return state;    
  
    }
  }
  
  
  
  
  export default userReducer;