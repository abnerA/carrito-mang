import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nameLog: '',
    modalAddParticipant: 'none',
    daySelect: 0,
    monthCurrent: '',
    btnDisabled: false,
    arrayParticipant: ['']
};

export const iniciarSesion = createSlice({
    name: 'inicio',
    initialState,
    reducers: {
        modal: (state) => {
            state.ventanaModal = 'none'
        },
        openModal: (state, action) => {
            state.diaSelect = action.payload[0];
            state.ventanaModal = 'flex';
            state.diaClick = action.payload[0];
            state.month = action.payload[1]
        },
        diaWeek: (state, action) => {
            state.diaModal = action.payload;
        },
        cambioMonth: (state, action) => {
            state.monthCambiante = action.payload;
        },
        modalParticipant: (state, action) => {
            state.modalAddParticipant = action.payload[0];
            state.daySelect = action.payload[1];
            state.monthCurrent = action.payload[2];
            // console.log(action.payload);
        },
        buttonDisabled: (state, action) => {
            state.btnDisabled = action.payload;
        },
        buttonAddParticipant: (state, action) => {
            state.arrayParticipant = action.payload;
        }
    }
});

export const { modalParticipant, buttonDisabled, buttonAddParticipant } = iniciarSesion.actions;
export default iniciarSesion.reducer;