import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

// const dispatch = useDispatch()
const store = configureStore({
    reducer: {
        auth: authSlice,
    },

})
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = ()=> useDispatch<AppDispatch>();

export default store