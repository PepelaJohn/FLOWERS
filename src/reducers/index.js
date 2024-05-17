import { combineReducers } from "redux";

import loading from "./loadingReducer";
import popup from './popupInfoReducer'
import products from './productsReducer'
export const reducers = combineReducers({  loading, popup, products  });
