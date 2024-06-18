import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import RenderItem from "./RenderItem"; 
import styles from "./Styles";

export interface Task {
  title: string,
  done: boolean,
  date: Date;
}

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  // Guardar datos en AsyncStorage
  const storeData = async (value: Task[]) => {
    try {
      await AsyncStorage.setItem('my-key', JSON.stringify(value));
    } catch (e) {
      console.error("Error saving data", e);
    }
  };

  // Obtener datos de AsyncStorage
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        const tasksLocal = JSON.parse(value);
        setTasks(tasksLocal);
      }
    } catch (e) {
      console.error("Error reading data", e);
    }
  };

  // Obtener datos al montar el componente
  useEffect(() => {
    getData();
  }, []);

  // Guardar datos cuando cambian las tareas
  useEffect(() => {
    storeData(tasks);
  }, [tasks]);

  // Añadir nueva tarea
  const addTask = () => {
    if (tasks.some(task => task.title === text)) {
      Alert.alert("Error Corazon", "Ya existe una tarea con el mismo nombre, cambielo xfa");
      return;
    }

    const newTask = {
      title: text,
      done: false,
      date: new Date()
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setText('');
  };

  // Marcar tarea como hecha/no hecha
  const markDone = (task: Task) => {
    setTasks(prevTasks =>
      prevTasks.map(t =>
        t.title === task.title ? { ...t, done: !t.done } : t
      )
    );
  };

  // Eliminar tarea
  const deleteFunction = (task: Task) => {
    setTasks(prevTasks => prevTasks.filter(t => t.title !== task.title));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas Mp</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar una nueva tarea"
          onChangeText={(t: string) => setText(t)}
          value={text}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              markDone={markDone}
              deleteFunction={deleteFunction}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
}

