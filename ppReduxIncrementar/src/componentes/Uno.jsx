import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guardarMiNombre, modificarUnValor, incrementarPuntuacion, agregarUnValor, eliminarUnValor } from '../store/misSlice';

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


    const modificarArray = () => {
        dispatch(modificarUnValor({
            indice:0,
            nuevoNombre: "REACT",
            nuevoInicio: "mayo 2013"
        }))
    }


    const agregar = () => {
        dispatch(agregarUnValor(
            {
                nuevoNombre: "Vue",
                nuevoInicio: 2014
            }
        ))
    }

    const eliminar = () => {
        dispatch(eliminarUnValor("Vue"))
    }



    return (
        <>
        <h1>{ miNombreAhora }</h1>
        <h1>{ miPuntuacionAhora }</h1>
        <button onClick={modificar}>Modificar Nombre</button>
        <button onClick={incrementar}>Incrementar Puntuacion</button>
        <button onClick={modificarArray}>Modificar un valor</button>
        <button onClick={agregar}>Agregar un valor</button>
        <button onClick={eliminar}>Eliminar un valor</button>
        </>
    )
}

export default Uno