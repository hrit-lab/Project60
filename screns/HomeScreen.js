import * as React from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader'
import db from '../Config'

export default class HomeScreen extends React.Component{
  goToSummaryScreen=()=>{
    this.props.navigation.navigate('SummaryScreen');
  }
  ananya1Pressed(){
    var ananya1 = db.ref('Ananya/'+ '/')
    ananya1.update({
      'absent':'true'
    })
  }
    ananya2Pressed(){
    var ananya2 = db.ref('Ananya/'+ '/')
    ananya2.update({
      'present':'true'
    })
  }
  dhruv1Pressed(){
    var dhruv1 = db.ref('Dhruv/'+ '/')
    dhruv1.update({
      'absent':'true'
    })
  }
    dhruv2Pressed(){
    var dhruv2 = db.ref('Dhruv/'+ '/')
   dhruv2.update({
      'present':'true'
    })
  }
    hardik1Pressed(){
    var hardik1 = db.ref('Hardik/'+ '/')
    hardik1.update({
      'absent':'true'
    })
  }
      hardik2Pressed(){
    var hardik2 = db.ref('Hardik/'+ '/')
    hardik2.update({
      'present':'true'
    })
  }
      roma1Pressed(){
    var roma1 = db.ref('Roma/'+ '/')
    roma1.update({
      'absent':'true'
    })
  }
      roma2Pressed(){
    var roma2 = db.ref('Roma/'+ '/')
    roma2.update({
      'present':'true'
    })
  }
  render(){
    return(
      <View>
      <AppHeader />
<Text style ={styles.text}>Ananya</Text>
<Text style ={styles.text}>Dhruv</Text>
<Text style ={styles.text}>Hardik</Text>
<Text style ={styles.text}>Roma</Text>

<TouchableOpacity style = {styles.absent} onPress={()=>{
    this.ananya1Pressed();
}}>
<Text>Absent</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.present} onPress={()=>{
    this.ananya2Pressed();
}}>
<Text>Present</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.absent} onPress={()=>{
    this.dhruv1Pressed();
}}>
<Text>Absent</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.present} onPress={()=>{
    this.dhruv2Pressed();
}}>
<Text>Present</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.absent} onPress={()=>{
    this.hardik1Pressed();
}}>
<Text>Absent</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.present} onPress={()=>{
    this.hardik2Pressed();
}}>
<Text>Present</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.absent} onPress={()=>{
    this.roma1Pressed();
}}>
<Text>Absent</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.present} onPress={()=>{
    this.roma2Pressed();
}}>
<Text>Present</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.submit} onPress ={()=>{
  this.goToSummaryScreen()
}}>
<Text style = {styles.buttontext}>Submit</Text>
</TouchableOpacity>
</View>
    )
  }
}
const styles = StyleSheet.create({
    absent:{
    justifyContent:"center",
    alignSelf:"center",
    marginTop:-105,
    padding:5,
    marginLeft : 200,
    width:100,
    height: 20,
    borderWidth:2,
    backgroundColor:"red",
  },
    present:{
      borderWidth:2,
    marginLeft : 100,
    width:100,
    height: 20,
    backgroundColor:"green",
  },
  text:{
    flexDirection:"row",
    padding:10,
    alignItems:"center",
    margin:20
  },
  submit:{
    marginTop:250,
    width:200,
    height:50,
    alignSelf:"center",
    backgroundColor:"yellow"
  },
    buttontext:{
    alignSelf:"center",
    fontSize:30,
    fontColor:"blue"
  },
});
