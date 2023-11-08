import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL } from '../actions'

const initialState = {
 lyricText: '',
 lyricRankings: '',
 albumUrl: '',
 isFetching: false,
 error: ''
}

const reducer = (state=initialState, action) => {
 switch(action.type) {
  case SEARCH_START:
   return {
    ...state,
    isFetching: true
   }
  case SEARCH_SUCCESS:
   return {
    ...state,
    lyricText: action.payload.lyricText,
    lyricRankings: action.payload.lyricRankings,
    albumUrl: action.payload.albumUrl,
    isFetching: false,
    error: ''
   }
  case SEARCH_FAIL:
   return {
    ...state,
    isFetching: false,
    error: action.payload
   }
  default:
   return state;
 }
}

export default reducer;