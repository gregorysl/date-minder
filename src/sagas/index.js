import { fork } from 'redux-saga/effects';
import * as sagas from './dateSagas';


export default [
  fork(sagas.getAllData),
  fork(sagas.addDate),
];