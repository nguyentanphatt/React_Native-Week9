import React, { useEffect } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo } from '../config/slices/todoSlice';
import search_icon from '../assets/search_icon.png';
import avatar from '../assets/avatar_img.png';
import back_icon from '../assets/back_icon.png';
import Item from './Item';

const SecondScreen = ({ navigation, route }) => {
  const { username = "Twinkly" } = route.params || {};
  const dispatch = useDispatch();
  const { data: todos, status } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDeleteToDo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate("FirstScreen")}>
          <Image source={back_icon} style={{ width: 50, height: 50, marginRight: 50 }} />
        </TouchableOpacity>
        <Image source={avatar} style={{ width: 50, height: 50 }} />
        <View style={styles.text}>
          <Text style={{ fontSize: 20 }}>Hi {username}</Text>
          <Text>Have a great day ahead</Text>
        </View>
      </View>
      <View style={styles.search}>
        <Image source={search_icon} style={{ width: 30, height: 30 }} />
        <TextInput placeholder="Search" />
      </View>
      {status === 'loading' ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={todos}
          renderItem={({ item }) => <Item name={item.name} id={item.id} onDelete={handleDeleteToDo} navigation={navigation} username={username} />}
          keyExtractor={(item) => item.id}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThirdScreen', { username })}>
        <View style={styles.circle}>
          <Text style={styles.plus}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    marginTop: 5,
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: 300,
    marginBottom: 50,
    marginTop: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00BCD4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  plus: {
    fontSize: 30,
    color: '#fff',
  },
});
