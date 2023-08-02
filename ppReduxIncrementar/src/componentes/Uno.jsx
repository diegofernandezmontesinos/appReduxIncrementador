import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guardarMiNombre } from '../store/misSlice';

const Uno = () => {
    const dispatch = useDispatch();
    const miNombreAhora=useSelector(state => state.unValor.miNombre)
    const miPuntuacionAhora=useSelector(state => state.otroValor.puntuacion)
    const modificar = () =>{
        dispatch(guardarMiNombre('El Diego'));
    }


    const incrementar = () => {
       dispatch(incrementarPuntuacion());
    }


    return (
        <>
        <h1>{ miNombreAhora }</h1>
        <h1>{ miPuntuacionAhora }</h1>
        <button onClick={modificar}>Modificar Nombre</button>
        <button onClick={incrementar}>Incrementar Puntuacion</button>
        </>
    )
}

export default Uno