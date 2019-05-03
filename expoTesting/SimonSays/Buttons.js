import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Buttons extends React.Component  {


  render(props) {

    return (
      <View style={styles.container}>
        <Button onPress={this.props.onBlueClicked} title='blue' color='blue'/>
        <Button onPress={this.props.onRedClicked} title='red' color='red'/>
        <Button onPress={this.props.onYellowClicked} title='yellow' color='yellow'/>
        <Button onPress={this.props.onGreenClicked} title='green' color='green'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
