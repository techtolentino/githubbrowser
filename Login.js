'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = React;

class Login extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('image!megaOctocat')} />
        <Text style={styles.heading}>Github Browser</Text>
        <TextInput style={styles.input}
          placeholder="Github username" />
        <TextInput style={styles.input}
          placeholder="Password" />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 120,
    alignItems: 'center'
  },
  logo: {
    width: 96,
    height: 85
  },
  heading: {
    fontSize: 30,
    marginTop: 10
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC'
  }
});


module.exports = Login;

