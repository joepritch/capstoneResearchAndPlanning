import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simon from './Simon';
import Buttons from './Buttons';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      SimonsCommand: 'red',
    }
    this._handleButtonClicked = this._handleButtonClicked.bind(this);
  }

  _handleButtonClicked(){
    this.setState({SimonsCommand: blue})
  }

  render() {
    return (
      <View style={styles.container}>
        <Simon SimonsCommand={this.state.SimonsCommand}/>
        <Buttons onButtonClicked={this._handleButtonClicked}/>
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
