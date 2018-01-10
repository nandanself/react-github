
import axios from 'axios';
const apiUrl = "https://api.github.com/users/";

export function setUser(user) {
  return {
    type:'USER_SE',
    payload:user,
  }
};


export const fetchData = (name) => {
    return {
      type:'Fetch_Data',
      payload:(dispatch) => {
        return axios.get(`${apiUrl}${name}`).then((res) => {
          dispatch(fetchSuccess(res.data))
        });
      },
    };
}


export const fetchSuccess = (posts) =>  {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts
  };
}