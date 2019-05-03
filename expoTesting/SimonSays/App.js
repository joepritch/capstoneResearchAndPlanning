import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Simon from './Simon';
import Buttons from './Buttons';
import Score from './Score';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      SimonsCommand: '#DB7D45',
      Score: 0,
      HighScore: 0,
      PossibleScore: 10,
      Lost: false,
    }
    this._handleBlueClicked = this._handleBlueClicked.bind(this);
    this._handleRedClicked = this._handleRedClicked.bind(this);
    this._handleYellowClicked = this._handleYellowClicked.bind(this);
    this._handleGreenClicked = this._handleGreenClicked.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount(){
    setInterval(() => (
      this.setState(previousState => (
        {PossibleScore: Math.floor((this.state.PossibleScore)/2) }
      ))
    ), 500);
  }

  _handleBlueClicked(){
    if (this.state.SimonsCommand === '#713493') {
      this.increaseScore();
      this.setNewColor();
    } else {
      this.setState({Lost: true});
    }
  }

  _handleRedClicked(){
    if (this.state.SimonsCommand === '#DB7D45') {
      this.increaseScore();
      this.setNewColor();
    } else {
      this.setState({Lost: true});
    }
  }

  _handleYellowClicked(){
    if (this.state.SimonsCommand === '#DBDB45') {
      this.increaseScore();
      this.setNewColor();
    } else {
      this.setState({Lost: true});
    }
  }

  _handleGreenClicked(){
    if (this.state.SimonsCommand === '#2D8F76') {
      this.increaseScore();
      this.setNewColor();
    } else {
      this.setState({Lost: true});
    }
  }

  restart(){
    this.setState({Lost: false});
    if (this.state.Score > this.state.HighScore) {
      this.setState({HighScore: this.state.Score})
    }
    this.setState({Score: 0});
    this.setState({PossibleScore: 10});
  }

  increaseScore(){
    this.setState({Score: this.state.Score+=this.state.PossibleScore});
    this.setState({PossibleScore: 10});
  }

  setNewColor(){
    let number = Math.floor(Math.random()*4);
    let newColor = '';
    if (number === 0) {
      newColor = '#DB7D45';
    }
    if (number === 1) {
      newColor = '#713493';
    }
    if (number === 2) {
      newColor = '#DBDB45';
    }
    if (number === 3) {
      newColor = '#2D8F76';
    }
    if (this.state.SimonsCommand == newColor) {
      this.setNewColor();
    } else {
      this.setState({SimonsCommand: newColor})
    }
  }

  render() {
    if (this.state.Lost === true) {
      return (
        <View style={styles.container}>
          <Text>You Lost</Text>
          <Text>Score: {this.state.Score}</Text>
          <Button onPress={this.restart} title="Try Again"/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Simon SimonsCommand={this.state.SimonsCommand}/>
        <Score currentScore={this.state.Score} highScore={this.state.HighScore} possibleScore={this.state.PossibleScore}/>
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
