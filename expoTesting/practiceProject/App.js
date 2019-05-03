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
      color: "red",
    }
    this.plusOne = this.plusOne.bind(this);
    this.randColor = this.randColor.bind(this);
  }
  plusOne(){
    this.setState({number: this.state.number+=1})
    this.randColor();
  }

  componentDidMount(){
    this.randColor();
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
        <Button color={this.state.color} title="I'm a Button!" onPress={this.plusOne}/>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:'50%',
  },
});
