import { Button, TextInput, View, Text } from "react-native";
import { useState } from "react";
import Actividad from "./Actividad";
import React from 'react';

export default function Actividades() {

    const[actividades, setActividades] = useState ([
        {id: 1, descripcion: '1ra. Catedra de Ingeniería', completado: true},
        {id: 2, descripcion: 'Platica de Servicio social', completado: false},
        {id: 3, descripcion: 'Baja de materias AGO-DIC 2024', completado: false},
        {id: 4, descripcion: 'Primer capacitación de Oracle', completado:false},
        {id: 5, descripcion: 'Ver la Champions', completado: false}
    ]);

    const[descripcion, SetDescripcion] = useState ("");

    function agregarActividad(){
    const nuevaActividad = {id:Date.now(), descripcion, completado: false};
    setActividades ([...actividades, nuevaActividad]);
    SetDescripcion("");
}

    function borrarActividad(id){
        setActividades(actividades.filter(elemento => elemento.id !== id));
    }

    function completarActividad (id){
        setActividades(actividades.map(
            elemento => (elemento.id === id ?
                {...elemento, completado: !elemento.completado }
                :
                elemento)));
    }

    return (
        <View style={{  padding: 20}}>
            <Text style={{ fontSize: 25}}>
                Agenda Universitaria
            </Text>

            <TextInput
                value={descripcion}
                onChangeText={SetDescripcion}
                placeholder="Nueva actividad"
            />

            <Button onPress={agregarActividad} title="Agregar actividad"/>

            <Text style = {{fontSize:20, paddingTop:10 }}>
                Lista de actividades
            </Text>
            {actividades.map (elemento =>(
                <Actividad
                    key={elemento.id}
                    actividad={elemento}
                    borrarActividad={borrarActividad}
                    completarActividad={completarActividad}
                />
            ))}
        </View>
    );
}
