import React, {
  AppRegistry,
  Component,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ViewPagerAndroid,
} from 'react-native';

import {
  MKButton,
  MKTextField
} from 'react-native-material-kit';

import Icon from 'react-native-vector-icons/Foundation';

class materialDesign extends Component {

  openDrawer() {
    this.refs.Drawer.openDrawer();
  }

  render() {
    let drawer = (
      <View style={styles.drawer}>
        <Text>I'm in the drawer</Text>
      </View>
    );

    const ColoredRaisedButton = MKButton.coloredButton()
      .withText('BUTTON')
      .withOnPress(() => {
        console.log("Hi, it's a colored button!");
      })
      .build();


    return (
      <DrawerLayoutAndroid
        ref={'Drawer'}
        drawerWidth={350}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => drawer}>
        <ViewPagerAndroid
          initialPage={0}
          style={styles.pager}>
          <View style={styles.container}>
            <Icon.Button name="social-facebook">
              <Text>Share on Facebook</Text>
            </Icon.Button>
            <Icon name="graph-trend" size={100} color="#00FF00" />
            <TouchableHighlight onPress={this.openDrawer.bind(this)}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
            </TouchableHighlight>
            <ColoredRaisedButton />
            <MKTextField />
            <Text style={styles.instructions}>
              To get started, edit index.android.js
            </Text>
            <Text style={styles.instructions}>
              Shake or press menu button for dev menu
            </Text>
          </View>
          <View style={styles.container}>
            <TouchableHighlight onPress={this.openDrawer.bind(this)}>
              <Text style={styles.welcome}>
                2nd Page
              </Text>
            </TouchableHighlight>
            <Text style={styles.instructions}>
              Shake or press menu button for dev menu
            </Text>
          </View>
          <View style={styles.container}>
            <TouchableHighlight onPress={this.openDrawer.bind(this)}>
              <Text style={styles.welcome}>
                3rd Page
              </Text>
            </TouchableHighlight>
            <Text style={styles.instructions}>
              Shake or press menu button for dev menu
            </Text>
          </View>
        </ViewPagerAndroid>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  drawer: {
    backgroundColor: '#333333',
    flex: 1,
  },
  pager: {
    flex: 1,
  },
});

AppRegistry.registerComponent('materialDesign', () => materialDesign);
