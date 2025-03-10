import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchDestinations,
  fetchDestinationsRequest,
  fetchHotels,
  fetchHotelsRequest,
  fetchFormInfo,
} from "./slice";

const fetchDestinationsApi = async () => {
  const response = await axios.get("http://localhost:3000/destination");
  return response.data;
};
const fetchHotelsApi = async () => {
  const response = await axios.get("http://localhost:3000/hotels");
  return response.data;
};
const fetchFormPost = async (values)=>{
  await axios.post("http://localhost:3000/hotels", values);
}

function* fetchHotelSaga(){
    const hotels = yield call(fetchHotelsApi)
    yield put(fetchHotels(hotels))
}

function* fetchFormSaga(action){
  yield call(fetchFormPost, action.payload)
}

function* fetchDestinationSaga() {
  const destinations = yield call(fetchDestinationsApi);
  yield put(fetchDestinations(destinations));
}
export function* watchFetchDestinations() {
  yield takeLatest(fetchHotelsRequest.type, fetchHotelSaga);
  yield takeLatest(fetchFormInfo.type, fetchFormSaga)
  yield takeLatest(fetchDestinationsRequest.type, fetchDestinationSaga);
}
