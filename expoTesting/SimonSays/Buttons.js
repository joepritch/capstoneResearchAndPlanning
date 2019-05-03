import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default class Buttons extends React.Component  {


  render(props) {

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onGreenClicked} style={[styles.buttons, {backgroundColor:'#2D8F76'}]}>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onRedClicked} style={[styles.buttons, {backgroundColor:'#DB7D45'}]}>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onYellowClicked} style={[styles.buttons, {backgroundColor:'#DBDB45'}]}>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onBlueClicked} style={[styles.buttons, {backgroundColor:'#713493'}]}>
        </TouchableOpacity>
      </View>
    );
  }
}
// <Button onPress={this.props.onBlueClicked} title='#713493' color='#713493'/>
// <Button onPress={this.props.onRedClicked} title='#DB7D45' color='#DB7D45'/>
// <Button onPress={this.props.onYellowClicked} title='#DBDB45' color='#DBDB45'/>
// <Button onPress={this.props.onGreenClicked} title='#2D8F76' color='#2D8F76'/>

const styles = StyleSheet.create({
  container: {
    flex: 45,
    flexWrap:'wrap',
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    width:'50%',
    height:'50%'
  }
});
