import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Test extends React.Component {
  render(){
    if (this.props.example == 'Wow') {
      return(
        <View>
          <Text>WOW!</Text>
        </View>
      )
    } else {
      return(
        <View>
          <Text>The prop is {this.props.example}</Text>
        </View>
      )
    }
  }
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1,
      color: 'green',
    }
    this.plusOne = this.plusOne.bind(this);
  }
  plusOne(){
    this.setState({number: this.state.number+=1})
  }

  randColor(){
    var r = getNumber();
    var g = getNumber();
    var b = getNumber();
    function getNumber(){
      return (Math.floor(Math.random()*256));
    }
    var newColor = 'rgb('+r+','+g+','+b+')';
    this.setState({color: newColor});
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Test example='Example'/>
        <Test example='Test'/>
        <Test example='Wow'/>
        <Text>{this.state.number}</Text>
        <Button color="red" title="I'm a Button!" onPress={this.plusOne}/>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: this.state,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:'50%',
  },
});
