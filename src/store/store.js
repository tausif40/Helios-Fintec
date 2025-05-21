import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth-slice";
import mutualFundSlice from "./features/mutualFund-slice";


export const store = configureStore({
	reducer: {
		auth: authSlice,
		mutualFund: mutualFundSlice
	}
});
