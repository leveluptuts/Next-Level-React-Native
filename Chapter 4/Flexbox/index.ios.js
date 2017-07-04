import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Flexbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemOne}>
          <View style={styles.itemOneOne}>
            <Text style={styles.itemOneText}>Hello</Text>
          </View>
          <View style={styles.itemOneOne}>
            <Text style={styles.itemOneText}>Hello</Text>
          </View>
          <View style={styles.itemOneTwo}>
            <Text style={styles.itemOneText}>Hello</Text>
          </View>
        </View>
        <View style={styles.itemTwo}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  itemOne: {
    flex: 2,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  itemOneOne: {
    backgroundColor: 'green',
    flex: 1,
    margin: 10,
  },
  itemOneTwo: {
    backgroundColor: 'blue',
    flex: 4,
  },
  itemOneText: {
    fontSize: 30,
    textAlign: 'center',
  },
  itemTwo: {
    flex: 3,
    alignSelf: 'stretch',
    backgroundColor: 'yellow',
  },
});

AppRegistry.registerComponent('Flexbox', () => Flexbox);
