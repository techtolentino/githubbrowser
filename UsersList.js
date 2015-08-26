var React = require('react-native');
var Users = require('./Users');

var { ListView, StyleSheet } = React;

class UsersList extends React.Component {
  constructor() {
    super();

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows([
        {
          userName: 'Marshall Hart',
          userJobTitle: 'UX/UI Designer',
          userOrganization: 'IBM',
          uri: 'https://randomuser.me/api/portraits/med/men/8.jpg'
        },
        {
          userName: 'Rob Finch',
          userJobTitle: 'IT Manager',
          userOrganization: 'Reliant Tech',
          uri: 'https://randomuser.me/api/portraits/med/men/59.jpg'
        },
        {
          userName: 'Lauryn Xi',
          userJobTitle: 'Marketing Manager',
          userOrganization: 'Quest Media Inc',
          uri: 'https://randomuser.me/api/portraits/women/15.jpg'
        },
        {
          userName: 'Ashley Jacobs',
          userJobTitle: 'Software Administrator',
          userOrganization: 'App Fannie',
          uri: 'https://randomuser.me/api/portraits/med/women/58.jpg'
        },
        {
          userName: 'Byron Sullivan',
          userJobTitle: 'Product Developer',
          userOrganization: 'Hero Mobile',
          uri: 'https://randomuser.me/api/portraits/men/34.jpg'
        },
        {
          userName: 'Janet Elliot',
          userJobTitle: 'Data Analytics',
          userOrganization: 'IBM',
          uri: 'https://randomuser.me/api/portraits/women/31.jpg'
        },
        {
          userName: 'Ryan Smith',
          userJobTitle: 'Senior Software Engineer',
          userOrganization: 'SquareBuddy',
          uri: 'https://randomuser.me/api/portraits/men/14.jpg'
        },
        {
          userName: 'Stephanie Bradshaw',
          userJobTitle: 'Digital Marketing Manager',
          userOrganization: 'Aviato Inc',
          uri: 'https://randomuser.me/api/portraits/women/21.jpg'
        }
      ])
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Users {...rowData} />}
      />
    );
  }
}

// renderRow={(rowData, sectionID, rowID) => rowId === 0 ? <SpecialMeeting {...rowData} /> : <Meeting {...rowData} />}

var styles = StyleSheet.create({
  container: {
    marginTop: 50
  }
});

module.exports = UsersList;
