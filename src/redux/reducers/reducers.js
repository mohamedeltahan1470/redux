import { combineReducers } from "redux";
import { reducer } from "./count";
import { reducer2 } from "./count2";

export const rootRducer = combineReducers({
    reducer: reducer,
    reducer2: reducer2
})