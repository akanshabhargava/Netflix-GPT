import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import movieReducer from "../utils/moviesSlice";
import gptReducer from "../utils/gptSlice";
import configReducer from "../utils/configSlice";
const appStore = configureStore({
  reducer: {
    user1: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
export default appStore;
