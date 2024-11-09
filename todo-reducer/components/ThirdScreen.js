import {Text, View, Button, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import react, {useState, useEffect} from 'react'
import avatar from '../assets/avatar_img.png'
import back_icon from '../assets/back_icon.png'
import work_icon from '../assets/work_icon.png'
import work_img from '../assets/work_img.png'
const ThirdScreen = ( {navigation, route} ) => {
    const {id, name, username} = route.params || {id: null, name: '', username: 'Twinkle'}
    const [todo, setTodo] = useState({
        name: name || ""
    })

    const handleInput = (e) => {
        setTodo({ ...todo, name: e.nativeEvent.text })
    }

    const handleSubmit = async () => {
        if(id){
            const res = await fetch(`https://670cb2ec7e5a228ec1d10fcb.mockapi.io/toDoList/toDoList/${id}`,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo),
            })
            if(res.ok){
                navigation.navigate('SecondScreen')
            }
        }
        else {
            const res = fetch('https://670cb2ec7e5a228ec1d10fcb.mockapi.io/toDoList/toDoList', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });
            if(res.ok){
                navigation.navigate('SecondScreen')
            }
        }
        
    }
    

  return (
    <View style={styles.container}>
        <View style={{display: 'flex', flexDirection: 'row', marginLeft: 50, marginBottom: 100}}>
        <Image source={avatar} style={{width: 50, height: 50}}/>
            <View style={styles.text}>
                <Text style={{fontSize: 20}}>Hi {username}</Text>
                <Text>Have agrate day a head</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("FirstScreen")}>
                <Image source={back_icon} style={{width: 50, height: 50, marginLeft: 70}}/>
            </TouchableOpacity>      
        </View>
        <Text style={{fontSize: 32, fontWeight: '700'}}>{id ? 'EDIT YOUR JOB' : 'ADD YOUR JOB'}</Text>
        <View style={styles.search}>
            <Image source={work_icon} style={{width: 30, height:30}}/>
            <TextInput placeholder="Input your job" value={todo.name} onChange={handleInput}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>
                FINISH <Text style={styles.arrow}>→</Text>
            </Text>
        </TouchableOpacity>
        <Image source={work_img} style={{width: 200, height: 200, marginTop: 50}}/>
    </View>
  )
}

export default ThirdScreen

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        flex: 1
    },
    search:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        borderWidth: 1,
        width: 300,
        marginBottom: 50,
        marginTop: 50,
        padding: 10
    },
    button: {
        backgroundColor: '#00BCD4',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    arrow: {
        fontSize: 18,
    },
})