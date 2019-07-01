/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_DATA,
  FETCHING_SUCCESS,
  FETCHING_FAILURE
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingData: false,
  addingSmurf: false,
  error: ''
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        fetchingData: true
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        smurfs: action.payload
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};