import axios from "axios";

export const SEARCH_START = "SEARCH_START";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";

/* Returns UI state */
export const searchById = (action) => dispatch => {
 dispatch({SEARCH_START})
 axios
  .get(`https://apiv1.asmx/GetLyric?lyricId=${action.type.id}&lyricCheckSum=${action.type.checkSum}`)
  .then(res => dispatch({type:SEARCH_SUCCESS, payload:res.data}))
  .catch(err => dispatch({type:SEARCH_FAIL, payload: err}));
}

/* Returns Id & CheckSum for searchById */
export const searchBySong = (action) => dispatch => {
 dispatch({SEARCH_START})
 axios
  .get(`https://apiv1.asmx/SearchLyric?artist=${action.type.artist}&song=${action.type.song}`)
  .then(res => {
   searchById(res.data); 
   console.log(res.data);
   })
  .catch(err => {
   dispatch({type:SEARCH_FAIL, payload: err});
   console.log(err);
  });
}

/* Returns Id & CheckSum for searchById */
export const searchByLyric = (action) => dispatch => {
 dispatch({SEARCH_START})
 axios
  .get(`apiv1.asmx/SearchLyricText?lyricText=${action.type}`)
  .then(res => {
   searchById(res.data); 
   console.log(res.data);
  })
  .catch(err => {
   dispatch({type:SEARCH_FAIL, payload: err}); 
   console.log(err);
  });
}