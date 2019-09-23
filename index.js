import React, {Component } from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Constants} from 'expo';
import Header from './src/components/Header';
import Liste from './src/components/Liste';
import Button from './src/components/Button';




export default class App extends React.Component<Props> {
   /*
  renderItem() {
      return (
        <View style={{height:100, backgroundColor:'blue',margin: 20,justifyContent:'center',alignItems:'center'}}>
        
          <Text style={{color:'black',fontSize:24}}>
          <Button/>
          </Text>
          </View>
        );
  }*/
/*
   renderItem1() {
      return (
        <View style={{height:100, backgroundColor:'green',margin: 20,justifyContent:'center',alignItems:'center'}}>
        
          <Text style={{color:'black',fontSize:24}}>
          <Button/>
          </Text>
          </View>
        );
  }
*//*
  renderItem2() {
      return (
        <View style={{height:100, backgroundColor:'pink',margin: 20,justifyContent:'center',alignItems:'center'}}>
        
          <Text style={{color:'black',fontSize:24}}>
          <Button/>
          </Text>
          </View>
        );
  }
*/
  render() {
    return (
      <View>
        <Liste />
        <Header />
        <Button/>
       
       
      </View>
     
      //<ScrollView>
       //{this.readerItem()}
      // {this.readerItem1()}
      // {this.readerItem2()}
      //</ScrollView>
    );
  }
}

