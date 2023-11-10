import axios from "axios";

export const SEARCH_START = "SEARCH_START";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";

/*  */
export const searchByCategory = (action) => (dispatch) => {
 axios
  .get(`https://api.publicapis.org/entries?category=${action}`)
  .then(res => {
   dispatch({type:SEARCH_SUCCESS, payload:res.data.entries})
  })
  .catch(err => dispatch({type:SEARCH_FAIL, payload: err}));
}