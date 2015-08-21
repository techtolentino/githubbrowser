'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  Component,
  ActivityIndicatorIOS
} = React;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProgress: false
    }
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.headingLeft}>MyIBM </Text>
          <Text style={styles.headingRight}>Nexus</Text>
        </View>
        <Text style={styles.label}>IBMiD</Text>
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          style={styles.input}
          placeholder="Please enter your IBMiD" />   
        <Text style={styles.label}>Password</Text>
        <TextInput 
          onChangeText={(text) => this.setState({password: text})}
          style={styles.input}
          secureTextEntry="true"
          placeholder="Password" />
        
        <TouchableHighlight
          onPress={this.onLoginPressed.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Log in
          </Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
          animating={this.state.showProgress}
          size="large"
          color="#14998E"
          style={styles.loader}
          />
      </View>
    );
  }

  onLoginPressed(){
    console.log('Attempting to log in with username ' + this.state.username);
    this.setState({
      showProgress: true
    });

    fetch('https://api.github.com/search/repositories?q=react')
    .then((response)=>{
      return response.json();
    })
    .then((results)=>{
      console.log(results);
      this.setState({showProgress: false});
    });
  }

}; //end Login class

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFBFB',
    flex: 1,
    paddingTop: 100,
    padding: 20
  },
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 65
  },
  headingRight: {
    fontSize: 30,
    marginTop: 32,
    color: '#00B4A0'
  },
  headingLeft: {
    fontSize: 30,
    fontWeight: 'bold',    
    marginTop: 32,
    color: '#586464'
  },
  input: {
    height: 50,
    marginTop: 5,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#00B4A0',
    color: '#000000'
  },
  label: {
    alignItems: 'flex-start',
    marginTop: 25,
    color: '#969696'
  },
  button: {
    height: 50,    
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: '#00B4A0'
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22
  },
  loader: {
    marginTop: 30,
    alignSelf: 'center'
  }
});


module.exports = Login;

