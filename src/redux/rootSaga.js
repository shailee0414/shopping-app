import { all } from "redux-saga/effects";
import { watchProductSaga } from "./product/saga";

export function* rootSaga() {
  yield all([watchProductSaga()]);
}
