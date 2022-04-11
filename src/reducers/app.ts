import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export declare interface IAppState {
  isMenuCollapsed: boolean; // 是否收起侧边栏
}

const initValue: IAppState = {
  isMenuCollapsed: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState: initValue,
  reducers: {
    toggleMenuCollapsed: (state) => {
      state.isMenuCollapsed = !state.isMenuCollapsed;
    },

    setMenuCollapsed: (state: IAppState, action: PayloadAction<boolean>) => {
      state.isMenuCollapsed = action.payload;
    },
  },
});

const selectIsMenuCollapsed = (state: RootState) => state.app.isMenuCollapsed;

export const { toggleMenuCollapsed, setMenuCollapsed } = appSlice.actions;
export { selectIsMenuCollapsed };

export default appSlice.reducer;
