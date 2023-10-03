import { configureStore } from "@reduxjs/toolkit";
import userDetailSlice from "./features/userDetailSlice";

export default configureStore({
    reducer:{
        app: userDetailSlice
    }
})