'use strict';

var React = require('react-native');
var Swipeout = require('react-native-swipeout')

var {
  StyleSheet,
  Text,
  View,
  Image,
  Component
} = React;

var swipeLeft = [
{
    text: 'Left Side'
  }
]

var swipeRight = [
  {
    text: 'Right Side'
  }
]


class users extends Component {
  render(){
    return(
      <Swipeout 
        right={swipeRight}
        left={swipeLeft}
        autoClose="yes"
        close="yes"
      >
        <View style={styles.listItemContainer}>
          <View style={styles.listItem}>
            <Image
              style={styles.userImage}
              source={{uri: this.props.uri}}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{this.props.userName}</Text>
              <Text style={styles.userOrganization}>{this.props.userOrganization}</Text>
              <Text style={styles.userRole}>{this.props.userJobTitle}</Text>
            </View>
          </View>
        </View>
      </Swipeout>
    );
  }
}; //end Login class

var styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: '#FDFBFB',
    flex: 1,
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
  },
  userOrganization: {
    left: 15,
    color: '#929292'
  }
});


module.exports = users;

