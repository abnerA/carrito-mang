import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nameLog: '',
    dayWeek: '',
    daySelect: 0,
    monthCurrent: '',
    btnDisabled: false,
    arrayParticipant: ['']
};

export const iniciarSesion = createSlice({
    name: 'inicio',
    initialState,
    reducers: {
        modalParticipant: (state, action) => {
            state.dayWeek = action.payload[0];
            state.daySelect = action.payload[1];
            state.monthCurrent = action.payload[2];
        },
        buttonDisabled: (state, action) => {
            state.btnDisabled = action.payload;
        },
        buttonAddParticipant: (state, action) => {
            state.arrayParticipant = action.payload;
        },
        nombreUser: (state, action) => {
            state.nameLog = action.payload;
        }
    }
});

export const { modalParticipant, buttonDisabled, buttonAddParticipant, nombreUser } = iniciarSesion.actions;
export default iniciarSesion.reducer;