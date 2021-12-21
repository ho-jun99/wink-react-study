import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";

const rootReducer = combineReducers({ //리듀서를 합쳐쥼
    counts : counterReducer
    //다른 리듀서가 있으면 추가해준다.
})

export default rootReducer;