import {Text, View, Button, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import email_icon from '../assets/email_icon.png'
import { useState } from 'react'
const FirstScreen = ( {navigation} ) => {
    const [userName, setUserName] = useState('')
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 24, color: '#8353E2', marginBottom: 100}}>MANAGE YOUR TASK</Text>
        <View style={styles.nameInput}>
            <Image source={email_icon}  style={styles.img}/>
            <TextInput placeholder='Enter Your Name' value={userName} onChangeText={setUserName} style={{marginLeft:10, outlineStyle: 'none'}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("SecondScreen", {username: userName.trim() || 'Twinkle'})}>
            <Text style={styles.text}>
                GET STARTED <Text style={styles.arrow}>→</Text>
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
    container:{
      display:'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      flexDirection: "column",
    },
    nameInput:{
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center',
      borderWidth: 1,
      width: 300,
      marginBottom: 100
    },
    img:{
      width: 30,
      height:30
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