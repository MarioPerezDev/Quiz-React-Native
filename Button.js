import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import {changeQuestion} from './redux/actions'



export default class Button extends React.Component {
 render(){
 return (
 <TouchableHighlight 
 style= {{borderRadius:5, backgroundColor:"#4285F4",paddingTop:2, height:41}}
 disabled= {this.props.disabled}
  onPress={this.props.onClick}>
 <Text style={{fontSize: 21, color:"white", textAlign:"center", margin:2, marginRight:5, marginLeft:5 }}>{this.props.text}</Text>
 </TouchableHighlight>
 )
 }
}