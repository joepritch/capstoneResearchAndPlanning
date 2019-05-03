import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Simon extends React.Component {
  render(props) {
    return (
      <View style={[styles.container, {backgroundColor: this.props.SimonsCommand}]}>
        <Text>{this.props.SimonsCommand}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
