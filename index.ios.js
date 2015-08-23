'use strict';

var React = require('react-native');
var Login = require('./Login');
var UserList = require('./userListComponent');

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
      <UserList/>
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
