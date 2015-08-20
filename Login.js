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
          <Image
            style={styles.logo}
            source={require('image!logotype-bar-positive')} />
          <Text style={styles.heading}>Connect</Text>
        </View>
        <Text style={styles.label}>IBM iD</Text>
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          style={styles.input}
          placeholder="Please enter your IBM ID" />
        
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
  }
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 120,
    padding: 20
  },
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  logo: {
    width: 150,
    height: 65
  },
  heading: {
    fontSize: 30,
    marginTop: 32,
    color: '#5294E9'
  },
  input: {
    height: 50,
    marginTop: 5,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#2F5DB0',
    color: '#2F5DB0'
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
    backgroundColor: '#2F5DB0'
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22
  },
  loader: {
    marginTop: 30
  }
});


module.exports = Login;

