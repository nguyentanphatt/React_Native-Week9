import {Text, View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import check_icon from '../assets/check_icon.png'
import edit from '../assets/edit.png'
import delete_icon from '../assets/delete_icon.png'
const Item = ({name, id, onDelete, navigation, username}) => {

  return (
    <View style={styles.containter}>
      <Image source={check_icon} style={{width: 30, height: 30}}/>
      <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 10}}>{name}</Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => onDelete(id)}>
            <Image source={delete_icon} style={{width: 30, height: 30}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen', {id, name, username})}>
            <Image source={edit} style={{width: 30, height: 30}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    containter:{
        display:'flex',
        flexDirection:'row',
        width: 300,
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#DEE1E678',
        borderColor: '#DEE1E678',
        justifyContent: 'space-between'
    },
    button:{
        display: 'flex',
        flexDirection: 'row'
    }
})