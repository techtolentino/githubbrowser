'use strict';

var React = require('react-native');
var Login = require('./Login');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} = React;

class GithubBrowser extends React.Component {
  render(){
    return(
      <Login/>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
