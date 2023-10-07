import fetchApi from "../../api/api";
import { getProduct, GET_PRODUCT } from "./action";
import { call, put, takeLatest } from "redux-saga/effects";

export function* getProductSaga() {
  try {
    const data = yield call(fetchApi("photos", "GET", "dog"));
    console.log("Llllll", data);
    yield put(getProduct(data));
  } catch (err) {
    console.log("Eeeeee", err);
    yield put(err);
  }
}
export function* watchProductSaga() {
  yield takeLatest(GET_PRODUCT, getProduct);
}
