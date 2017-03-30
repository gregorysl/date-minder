import * as consts from '../constants/actionTypes';

export const fetchData = () => {
  return { type: consts.FETCH_DATA };
};

export const addDate = (item) => {
  return { type: consts.ADD_DATE, item };
};
