
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class CheckList extends Component {
  render() {
    return (

      <View key={this.props.keyval} style={styles.note}>

    <Text style={styles.noteText}>{this.props.val.date}</Text>
      <Text style={styles.noteText}>{this.props.val.note}</Text>
      <TouchableOpacity onPress={this.props.deleteMethod} style={styles.nD}>
      <Text style={styles.nDT}>-</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position : 'relative',
    padding : 20,
    paddingRight : 100,
    borderBottomWidth : 2,
    borderBottomColor : '#ededed',
  },
  noteText : {
    paddingLeft : 20,
    borderLeftWidth : 10,
    borderLeftColor : '#cddc39',
  },
  nD : {
    position : 'absolute',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#e74c3c', 
    borderRadius : 50,
    padding : 10,
    top : 10,
    bottom : 10,
    right : 10,
  },
  nDT : {
    color : 'white',
  }

});
