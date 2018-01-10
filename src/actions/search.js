
import Axios from 'axios';
const BASE_URL = "https://api.github.com/";

export const searchUser = (name) => {
  return (dispatch) => {
    let url = `${BASE_URL}search/users?q=${name}`
    return Axios.get(url)
      .then(response => {
        dispatch(searchUserSuccess(response.data.items))
      })
      .catch(error => {
        throw(error);
      });
  };
}


export const searchUserSuccess = (users) =>  {
  return {
    type: 'SEARCH_USER_SUCCESS',
    users
  };
}