import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TFilter = {
  filter: string[];
};

const initialState: TFilter = {
  filter: [],
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string[]>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
