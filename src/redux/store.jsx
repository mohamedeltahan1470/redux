import { createStore } from "redux";
import { rootRducer } from "./reducers/reducers";

export const store = createStore(rootRducer);