import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Button from './Button';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/AntDesign';


export default class IndexScreen extends React.Component {
 render() {

 return (
 <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
 <TouchableHighlight style={{borderRadius:100}} onPress={() => this.props.navigation.navigate('GameScreen')}>
<Icon2  name="playcircleo" size={130} color="black" />
</TouchableHighlight>
<Text>Pulsa para jugar</Text>
 </View>
 )
 }
}