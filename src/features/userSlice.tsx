import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserbyId = createAsyncThunk(
  "user/fetchUserbyId",
  async (id: number) => {
    const response = await fetch(`http://127.0.0.1:3008/postgress/${id}`);
    const data = await response.json();
    return data;
  }
);

export interface UserState {
  id: number;
  name: string;
  isActive: boolean;
}

const initialState: UserState = {
    id: 0,
    name: "Loading name",
    isActive: false,
};

export const activeUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserbyId.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isActive = action.payload.isActive;
    });
  },
});

export const activeUserReducer = activeUserSlice.reducer;
