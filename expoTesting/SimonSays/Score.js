import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Score extends React.Component {
  render(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Current Score: {this.props.currentScore}</Text>
        <Text style={styles.text}>Possible Score: {this.props.possibleScore}</Text>
        <Text style={styles.text}>High-Score: {this.props.highScore}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor:'#383838',
  },
  text: {
    color: 'white'
  }
});
