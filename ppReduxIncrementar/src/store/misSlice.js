import { createSlice } from '@reduxjs/toolkit'

export const origenSlice = createSlice({
    name : 'unValor',
    initialState:{miNombre:'DFM', edad: 31},
    bibliotecas:[{nombre:"react", inicio:2013},{nombre:"redux", inicio:2015}],
    reducers:{
        guardarMiNombre: (state, action)=> {
            state.miNombre = action.payload;
        }
    }
})

export const otroSlice = createSlice({
    name : 'otroValor',
    initialState:{puntuacion: 0},
    reducers:{
        incrementarPuntuacion: (state, action)=> {
            state.puntuacion = state.puntuacion +1;
        }
    }
})

export const { guardarMiNombre } = origenSlice.actions;
export const { incrementarPuntuacion } = otroSlice.actions;