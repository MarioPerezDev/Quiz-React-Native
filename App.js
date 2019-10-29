
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import ReduxProvider from './redux/ReduxProvider';



export default class App extends React.Component {
   componentDidMount() {
       StatusBar.setHidden(false);
    }
render() {
return (
<ReduxProvider />
);
}
}
