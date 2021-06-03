import * as React from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader'

export default class SummaryScreen extends React.Component{
  goToHomeScreen=()=>{
    this.props.navigation.navigate('HomeScreen')
  }
  render(){
    return(
      <View>
      <AppHeader />
      <Text>Attendance Marked</Text>
      <TouchableOpacity style={styles.button} onPress ={()=>{
        this.goToHomeScreen();
      }}>
      <Text style ={styles.text}>Go To Attendance Page</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button:{
    marginTop:250,
    width:200,
    height:50,
    alignSelf:"center",
    backgroundColor:"blue"
  },
  text:{
    alignSelf:"center",
    fontSize:15,
  },
})