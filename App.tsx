import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import RenderItem from "./RenderItem";
import styles from "./Styles";

export interface Task {
  title: string,
  done: boolean,
  date: Date;
}

export default function App() {
  const [text, setText] = useState('');
  const [task, setTask] = useState<Task[]>([]);
  const addTask = () => {
    const tmp = [...task];
    const newTask = {
      title: text,
      done: false,
      date: new Date(),
    };
    tmp.push(newTask);
    setTask(tmp);
    setText('');
  }
  const markDone = (task: Task) => {
        // Lógica para marcar como hecho

    const tmp = [...tasks];
    const index = tmp.findIndex(el => el.title === task.title); // Corregido findIndex
    const todo = tmp[index]; // Corregido task por tmp
    todo.done = !todo.done;
    setTask(tmp);
  }
  

  const deleteFunction = () => {
    // Lógica para eliminar
    const tmp = [...tasks];
    const index = tmp.findIndex(el => el.title === task.title); // Corregido findIndex
    tmp.splice(index, 1);
    setTask(tmp);
      }

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
          data={task}
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              markDone={markDone}
              deleteFunction={deleteFunction}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}




