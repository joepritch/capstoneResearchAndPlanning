import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Buttons extends React.Component {

  returnColor(props){
    this.props.onButtonClicked();
  }

  render(props) {


    return (
      <View style={styles.container}>
        <Button onPress={this.returnColor} title='blue'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
