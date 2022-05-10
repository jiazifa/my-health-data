import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

// 定义了一个数据的单元，包含数值本身与录入的时间点(精确到天/周)
export declare interface IHealthDataUnit {
    time: Date | string | number;
    value: number;
}

export declare interface IHealthSection {
    description?: string;
    title: string;
    values?: Array<IHealthDataUnit>,
    subsections?: Set<IHealthSection>;
}

export declare interface IHealthData {
    sections: {[key: string]: IHealthSection}
}

const uricSections: {[key: string]: IHealthSection} = {
    "sxx" : {
        title: "sxx",
        values: [
        {
            time: new Date('2022/02/06 05:30:00'),
            value: 435,
        },
        {
            time: new Date('2022/03/06 05:30:00'),
            value: 235,
        },
        {
            time: new Date('2022/04/06 05:30:00'),
            value: 335,
        }
    ]
}}

const initValue: IHealthData = {
    sections: uricSections
};

export const appSlice = createSlice({
    name: "health",
    initialState: initValue,
    reducers: {
        
    }
});

const selectHealthSections = (state: RootState) => state.health;

export { selectHealthSections };

export default appSlice.reducer;