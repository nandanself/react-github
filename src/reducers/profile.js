const profileReducer = (state={},action) => {
    switch (action.type) {
      case 'PROFILE_SEARCH_SUCCESS':
        return {profile:action.profile};
    default:
      return state;    
  
    }
  }
  
  export default profileReducer;