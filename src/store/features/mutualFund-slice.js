import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/lib/apiClient";
import { getQueryParams } from "@/lib/utils";

// Login User
export const getSIP = createAsyncThunk("mutualFund/getSIP", async (filter, thunkAPI) => {

	try {
		const response = await apiClient.get(`/mutual-fund?${getQueryParams(filter)}`);
		console.log(`url - /mutual-fund?${getQueryParams(filter)}`);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		return thunkAPI.rejectWithValue(error.response.data);
	}
});

const mutualFundSlice = createSlice({
	name: "mutualFund",
	initialState: {
		sip: { data: [], isLoading: false, error: null },
		filter: { page: 1, limit: '', total: '', mutualFundType: '' }
	},
	reducers: {
		storeFilterData(state, action) {
			state.filter.limit = action.payload.limit;
			state.filter.page = action.payload.page;
			state.filter.total = action.payload.total;
			state.filter.mutualFundType = action.payload.mutualFundType;
			// getSIP(state.filter);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getSIP.pending, (state) => {
				state.sip.isLoading = true;
				state.sip.error = null;
			})
			.addCase(getSIP.fulfilled, (state, action) => {
				state.sip.isLoading = false;
				state.sip.error = null;
				state.sip.data = action.payload;
			})
			.addCase(getSIP.rejected, (state, action) => {
				state.sip.isLoading = false;
				state.sip.error = action.payload;
			});
	},
});

export const { storeFilterData } = mutualFundSlice.actions;
export default mutualFundSlice.reducer;
