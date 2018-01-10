
import Axios from 'axios';
const BASE_URL = "https://api.github.com/";

export const profileSearch = (name) => {
  return (dispatch) => {
    let url = `${BASE_URL}users/${name}`
    return Axios.get(url)
      .then(response => {
        dispatch(profileSearchSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}


export const profileSearchSuccess = (profile) =>  {
    return {
        type: 'PROFILE_SEARCH_SUCCESS',
        profile,
    };
}