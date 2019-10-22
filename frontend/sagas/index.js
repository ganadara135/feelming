// 비동치 처리는 Saga 에서 전담해서 처리

import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import user from './user';
import post from './post';
import { backUrl } from '../config/config';

axios.defaults.baseURL = `${backUrl}`;

export default function* rootSaga() {
    yield all([
        fork(user),
        fork(post)
    ]);
}
