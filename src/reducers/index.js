import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL } from '../actions'

const initialState = {
 response: [],
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
   break;
  case SEARCH_SUCCESS:
   return {
    ...state,
    response: action.payload,
    isFetching: false,
    error: ''
   }
   break;
  case SEARCH_FAIL:
   return {
    ...state,
    isFetching: false,
    error: action.payload
   }
   break;
  default:
   return state;
 }
}

export default reducer;