import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // paquete de íconos

interface ActividadType {
  id: number;
  descripcion: string;
  completado: boolean;
}

interface Props {
  actividad: ActividadType;
  borrarActividad: (id: number) => void;
  completarActividad: (id: number) => void;
}

export default function Actividad({
  actividad,
  borrarActividad,
  completarActividad,
}: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 6,
        padding: 12,
        borderWidth: 1,
        borderColor: "#983dff",
        borderRadius: 10,
      }}
    >
      {/* Texto de la tarea */}
      <Text
        style={{
          textDecorationLine: actividad.completado ? "line-through" : "none",
          fontSize: 16,
          flex: 1,
          marginRight: 10,
          color: actividad.completado ? "gray" : "black",
        }}
      >
        {actividad.descripcion}
      </Text>

      {/* Botón completar */}
      <TouchableOpacity
        style={{
          backgroundColor: actividad.completado ? "green" : "#983dff",
          padding: 8,
          borderRadius: 50,
          marginRight: 8,
        }}
        onPress={() => completarActividad(actividad.id)}
      >
        <Icon
          name={actividad.completado ? "check" : "check-outline"}
          size={20}
          color="white"
        />
      </TouchableOpacity>

      {/* Botón eliminar */}
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 8,
          borderRadius: 50,
        }}
        onPress={() => borrarActividad(actividad.id)}
      >
        <Icon name="delete" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}
