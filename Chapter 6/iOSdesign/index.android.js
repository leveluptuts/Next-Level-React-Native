import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Switch,
  TabBarIOS,
  AlertIOS,
  PickerIOS,
  Platform,
} from 'react-native';

import Favorites from './Favorites';

const HOCKEY_TEAMS = ['Penguins', 'Red Wings', 'Kings', 'Sharks', 'Blues', 'Avalanche'];


class iOSdesign extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'history',
      switch: false,
      alert: false,
      picker: 'Kings',
    };
  }

  renderView() {
    let instructions;
    if (this.state.switch) {
      instructions = (
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Switch
          onTintColor="blue"
          onValueChange={(value) => this.setState({ switch: value })}
          value={this.state.switch}/>
        <Switch
          value={this.state.alert}/>
        <Text style={styles.instructions}>
          {this.state.picker}
        </Text>
        <Favorites />
        {instructions}
      </View>
    );
  }

  render() {
    if (Platform.OS === 'android') {
      return <View>{this.renderView()}</View>;
    }

    return (
      <TabBarIOS
        barTintColor="#111111"
        tintColor="#FFFFFF"
        >
        <TabBarIOS.Item
          title="View One"
          systemIcon="history"
          selected={this.state.selectedTab === 'history'}
          onPress={() => {
            this.setState({ selectedTab: 'history' })
          }}
          badge={3}>
          {this.renderView()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="View Two"
          systemIcon="favorites"
          selected={this.state.selectedTab === 'favorites'}
          onPress={() => {
            this.setState({ selectedTab: 'favorites' })
          }}>
          <Favorites />
        </TabBarIOS.Item>
      </TabBarIOS>
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
  picker: {
    height: 300,
    width: 400,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iOSdesign', () => iOSdesign);
