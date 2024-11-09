import {Text, View, Button, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import react, {useState, useEffect, useReducer} from 'react'
import search_icon from '../assets/search_icon.png'
import avatar from '../assets/avatar_img.png'
import back_icon from '../assets/back_icon.png'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo } from '../context/actions';

const SecondScreen = ( {navigation, route} ) => {
    const {username = "Twinkly"} = route.params || {}
    //const [data, setData] = useState([])
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    /* const fetchData = async () =>{
        await fetch('https://670cb2ec7e5a228ec1d10fcb.mockapi.io/toDoList/toDoList')
            .then(res=>res.json()).then((data) => setData(data))
    } */

    /* useEffect(()=>{
        fetchData()
    },[])

    const handleDeleteToDo = async (id) => {
        const res = await fetch(`https://670cb2ec7e5a228ec1d10fcb.mockapi.io/toDoList/toDoList/${id}`, {
            method: 'DELETE'
        })
        if(res.ok){
            await fetchData()
        }
    } */
    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleDeleteToDo = (id) => {
        dispatch(deleteTodo(id));
    };
  return (
    <View style={styles.container}>
        <View style={{display: 'flex', flexDirection: 'row', marginLeft: 50}}>
            <TouchableOpacity onPress={()=>navigation.navigate("FirstScreen")}>
                <Image source={back_icon} style={{width: 50, height: 50, marginRight: 50}}/>
            </TouchableOpacity>    
            <Image source={avatar} style={{width: 50, height: 50}}/>
            <View style={styles.text}>
                <Text style={{fontSize: 20}}>Hi {username}</Text>
                <Text>Have agrate day a head</Text>
            </View>
        </View>
        <View style={styles.search}>
            <Image source={search_icon} style={{width: 30, height:30}}/>
            <TextInput placeholder="Search"/>
        </View>
        <FlatList 
            data={data}
            renderItem={({item}) => <Item name={item.name} id={item.id} onDelete={handleDeleteToDo} navigation={navigation} username={username} />}
            keyExtractor={item => item.id}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThirdScreen', {username})}>
            <View style={styles.circle}>
                <Text style={styles.plus}>+</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default SecondScreen
const styles = StyleSheet.create({
    container:{
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      flex: 1
    },
    text:{
      marginTop: 5,
    },
    search:{
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center',
      borderWidth: 1,
      width: 300,
      marginBottom: 50,
      marginTop: 50
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
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
  })