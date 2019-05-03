import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Simon from './Simon';
import Buttons from './Buttons';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      SimonsCommand: 'red',
      Score: 0,
      Lost: false,
    }
    this._handleBlueClicked = this._handleBlueClicked.bind(this);
    this._handleRedClicked = this._handleRedClicked.bind(this);
    this._handleYellowClicked = this._handleYellowClicked.bind(this);
    this._handleGreenClicked = this._handleGreenClicked.bind(this);
    this.restart = this.restart.bind(this);
  }

  _handleBlueClicked(){
    if (this.state.SimonsCommand === 'blue') {
      this.increaseScore();
      this.setNewColor();
    } else {
      this.setState({Lost: true});
    }
  }

  _handleRedClicked(){
    if (this.state.SimonsCommand === 'red') {
      this.increaseScore();
      this.setNewColor();
    } else {
      this.setState({Lost: true});
    }
  }

  _handleYellowClicked(){
    if (this.state.SimonsCommand === 'yellow') {
      this.increaseScore();
      this.setNewColor();
    } else {
      this.setState({Lost: true});
    }
  }

  _handleGreenClicked(){
    if (this.state.SimonsCommand === 'green') {
      this.increaseScore();
      this.setNewColor();
    } else {
      this.setState({Lost: true});
    }
  }

  restart(){
    this.setState({Lost: false});
    this.setState({Score: 0});
  }

  increaseScore(){
    this.setState({Score: this.state.Score+=1})
  }

  setNewColor(){
    let number = Math.floor(Math.random()*4);
    let newColor = '';
    if (number === 0) {
      newColor = 'red';
    }
    if (number === 1) {
      newColor = 'blue';
    }
    if (number === 2) {
      newColor = 'yellow';
    }
    if (number === 3) {
      newColor = 'green';
    }
    this.setState({SimonsCommand: newColor})
  }

  render() {
    if (this.state.Lost === true) {
      return (
        <View style={styles.container}>
          <Text>You Lost</Text>
          <Button onPress={this.restart} title="Try Again"/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Simon SimonsCommand={this.state.SimonsCommand}/>
        <Text>{this.state.Score}</Text>
        <Buttons onBlueClicked={this._handleBlueClicked}
           onRedClicked={this._handleRedClicked}
           onYellowClicked={this._handleYellowClicked}
           onGreenClicked={this._handleGreenClicked}/>
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
