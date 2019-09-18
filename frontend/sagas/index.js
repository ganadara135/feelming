// 비동치 처리는 Saga 에서 전담해서 처리

import { all, call } from 'redux-saga/effects';
import user from './user';
import post from './post';

export default function* rootSaga() {
    yield all([
        call(user),
        call(post)
    ]);
}
