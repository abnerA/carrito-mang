import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: 'none',
    textButton: 'Iniciar sesión',
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
        login: (state, action) => {
            state.login = action.payload[0];
            state.textButton = action.payload[1];
            state.nameLog = action.payload[2];
        },
        logout: (state) => {
            state.display3 = 'none';
            state.display2 = 'flex';
            state.name = 'Blanco';
            state.estado = false;
        },
        handleClick: (state, action) => {
            state.name = action.payload;
            state.display1 = 'none';
            state.title = 'Cerrar sesión';
            state.estado = true;
        },
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

export const { login, modalParticipant, buttonDisabled, buttonAddParticipant } = iniciarSesion.actions;
export default iniciarSesion.reducer;