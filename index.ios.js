'use strict';

var React = require('react-native');
var Login = require('./Login');
var UsersList = require('./UsersList');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Component
} = React;

class GithubBrowser extends Component {
  render(){
    return(
      <UsersList/>
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
