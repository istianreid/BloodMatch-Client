import { combineReducers } from "redux";

import { auth } from "./user.reducer";
import { profile } from "./profile.reducer";
import { post } from "./requestPost.reducer";
import { record } from "./record.reducer";

const rootReducer = combineReducers({
  auth,
  record,
  profile,
  post
});

export default rootReducer;
