import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { RootState } from ".";

// 定义了一个数据的单元，包含数值本身与录入的时间点(精确到天/周)
export declare interface IHealthDataUnit {
  time: Date | string | number;
  value: number;
}

export declare interface IHealthSection {
  key?: string;
  description?: string;
  title: string;
  values?: Array<IHealthDataUnit>;
  subsections?: Set<IHealthSection>;
}

const URIC_KEY = "health.uric";

export declare interface IHealthData {
  sections: { [key: string]: IHealthSection };
}

let uricSections: { [key: string]: IHealthSection } = {};
uricSections[URIC_KEY] = {
  key: URIC_KEY,
  title: "",
  values: [
    {
      time: new Date("2022/02/06"),
      value: 435,
    },
    {
      time: new Date("2022/03/06"),
      value: 235,
    },
    {
      time: new Date("2022/04/06"),
      value: 335,
    },
  ],
};

const initValue: IHealthData = {
  sections: uricSections,
};

export const appSlice = createSlice({
  name: "health",
  initialState: initValue,
  reducers: {
    addUricHealthData: (
      state: IHealthData,
      action: PayloadAction<IHealthDataUnit>
    ) => {
      let newValues = state.sections[URIC_KEY].values ?? [];
      newValues = newValues.filter((i) => i.time !== action.payload.time);
      newValues.push(action.payload);
      newValues.sort((a, b) => moment(a.time).unix() - moment(b.time).unix());

      state.sections[URIC_KEY] = {
        ...state.sections[URIC_KEY],
        values: newValues,
      };
    },
    updateHealthData: (
      state: IHealthData,
      action: PayloadAction<IHealthSection>
    ) => {
      const sectionKey = action.payload.key;
      state.sections = { ...state.sections, sectionKey: { ...action.payload } };
    },
  },
});

const selectHealthSections = (state: RootState) => state.health;

export { URIC_KEY };
export const { addUricHealthData, updateHealthData } = appSlice.actions;

export { selectHealthSections };

export default appSlice.reducer;
