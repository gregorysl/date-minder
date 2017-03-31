import * as actions from '../constants/actionTypes';

export default function dateReducers(state = { index: 0, items: [] }, action) {
  switch (action.type) {
    case actions.FETCH_DATA_SUCCESS: {
      return action.data;
    }
    default:
      return state;
  }
}
