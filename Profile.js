import React from 'react';
import { View,Text } from 'react-native';
import Button from './Button';
import Smile from 'react-native-vector-icons/AntDesign';


export default class Profile extends React.Component {
 render() {

 return (

<View style={{ flex:1, flexDirection:"column", alignItems:'center', justifyContent:'center', marginTop:50}}>
<Text style={{margin:20, textAlign:'center'}}>Yo soy el que he hecho esta app:</Text>
	<View style={{ flex:1, flexDirection:"row", alignItems:'flex-start', justifyContent:'center' }}>
		<View style={{ flex:1, flexDirection:"column", alignItems:'center', justifyContent:'flex-start' }}>
		<Smile name="smileo" size={70} color="black" />
		<Text>Mario Pérez Gil</Text>
		</View>
	</View>
</View>
 )
 }
}