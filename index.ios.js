
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Note from './src/components/Note.js';





export default class CheckList extends Component {

  constructor() {
    super();
    this.state = {
      noteArray:[{ 'note': 'Write In the Text area bellow, tap + to add and - to delete'}],
      noteText:'',
    }
  }
  render() {

    let notes = this.state.noteArray.map((val, key) => {
     return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key) } />
});


    return (

      <View style={styles.container}>

        <View style={styles.header}>
        <Text style = {styles.headerText}> CHECK.LIST </Text>
        </View>

        <ScrollView style={styles.scrollContainer}>

        {notes}

        </ScrollView>

        <View style ={styles.footer} >
        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.b1}>
        <Text style={styles.btext}>+</Text>
        </TouchableOpacity>
        <TextInput style={styles.textInput}
        onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText}
        placeholder = '>_ Text' placeholderTextColor = '#ecf0f1'>
        </TextInput>
        </View>

      </View>
    );
  }

  addNote(){
     if(this.state.noteText){
       var d = new Date();
       this.state.noteArray.push({'date' : d.getFullYear() + "-" + (d.getMonth() +1 ) + "-" + d.getDate(), 'note': this.state.noteText  });
       this.setState({ noteArray: this.state.noteArray })
       this.setState({ noteText : '' });
     }
  }
  deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray})
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 20,
  },
  header: {
    backgroundColor : '#212121',
    alignItems : 'center',
    borderBottomWidth : 10,
    borderBottomColor : '#95a5a6',


  },
  headerText : {
    color : '#ecf0f1',
    fontSize : 18,
    fontWeight: 'bold',
    padding: 27,
    fontFamily: 'Arial',
    letterSpacing : 3,
    textDecorationLine: 'underline',

  },
  scrollContainer : {
    flex : 1,
    marginBottom : 100,
  },
  footer : {
    position : 'absolute',
    alignItems : 'center',
    bottom : 0,
    left : 0,
    right : 0,
  },
  b1 : {
    backgroundColor : '#dd2c00',
    width : 90,
    height : 90,
    alignItems : 'center',
    justifyContent : 'center',
    marginBottom : -45,
    zIndex : 10,
    elevation : 8,
    borderRadius : 50,
    borderColor: '#ccc',
  },
  btext : {
    color: '#ecf0f1',
    fontSize : 24,
  },
  textInput : {
      alignSelf : 'stretch',
      color : '#ecf0f1',
      padding : 17,
      paddingTop : 56,
      backgroundColor : '#263238',
      borderTopWidth : 1,

  }
});

AppRegistry.registerComponent('CheckList', () => CheckList);
