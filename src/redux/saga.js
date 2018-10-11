import { takeLatest, call, put, all, fork, takeEvery } from "redux-saga/effects";
import {DATA_ACTIONS} from './actions'
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
    yield takeEvery(DATA_ACTIONS.MODAL_DISPLAY, modalWorkerSaga);
}


// function that makes the api request and returns a Promise for response
function fetchData() {
    alert("fffffffffffffff")
return "string"
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchData);
        const data = response;

        // dispatch a success action to the store with the new dog
        yield put({ type: "API_CALL_SUCCESS", data });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "API_CALL_FAILURE", error });
    }
}

function* modalWorkerSaga(payload) {
    console.log("tag2","reached saga");
    try {
        // dispatch a success action to the store with the new dog
        yield put({ type: DATA_ACTIONS.MODAL_SUCCESS, visible:payload.visible });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "API_CALL_FAILURE", error });
    }

}

export default function* rootSaga() {
    yield all([
        fork(watcherSaga)
    ]);
}