import { take, put } from 'redux-saga/effects';
import * as consts from '../constants/actionTypes';
import server from '../server';

export function* getAllData() {
    for (; ;) {
        yield take(consts.FETCH_DATA);
        let data = server.getData();
        yield put({ type: consts.FETCH_DATA_SUCCESS, data });
    }
}
export function* addDate() {
    for (; ;) {
        const { item } = yield take(consts.ADD_DATE);
        let data = server.add(item);
        yield put({ type: consts.FETCH_DATA_SUCCESS, data });
    }
}