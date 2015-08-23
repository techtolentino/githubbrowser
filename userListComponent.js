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
            source={{uri: 'https://randomuser.me/api/portraits/med/men/8.jpg'}}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Marshall Hart</Text>
            <Text style={styles.userRole}>UX Design, UI Design</Text>
          </View>
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
    flexDirection: 'row',
    padding: 15,
    borderWidth: 0.5,
    borderTopColor: '#D8D8D8',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#D8D8D8',
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userName: {
    left: 15,
    fontWeight: 'bold'
  },
  userRole: {
    left: 15,
    color: '#929292'
  }
});


module.exports = userList;

