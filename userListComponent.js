'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  Component
} = React;

class userList extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.listItem}>
          <Image
            style={styles.userImage}
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
          />
          <Text>John Doe</Text>
        </View>
      </View>
    );
  }


}; //end Login class

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFBFB',
    flex: 1,
    paddingTop: 80,
    padding: 20
  },
  listItem: {
    padding: 20,
    borderWidth: 0.5,
    borderTopColor: '#D8D8D8',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#D8D8D8'
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
});


module.exports = userList;

