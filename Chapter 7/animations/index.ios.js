import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  PanResponder,
} from 'react-native';

import Animatable from 'react-native-animatable';

import Dimensions from 'Dimensions';

let {
  width,
  height
} = Dimensions.get('window');

const CIRC_SIZE = 100;

class animations extends Component {
  constructor() {
    super();
    this.state = {
      animationValues: new Animated.ValueXY({ x: 0, y: 0 }),
      size: 20,
    };

    this.valueX = 0;
    this.valueY = 0;
    this.state.animationValues.x.addListener((value)=> {
      this.valueX = value.value;
    });
    this.state.animationValues.y.addListener((value)=> {
      this.valueY = value.value;
    });

    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.animationValues.setOffset({x: this.valueX, y: this.valueY});
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animationValues.x,
          dy: this.state.animationValues.y,
        },
      ]),
      onPanResponderRelease: () => {
        // this.state.animationValues.flattenOffset();
        Animated.spring(this.state.animationValues, {
          toValue: 0,
        }).start();
      },
    });
  }

  componentWillUnmount() {
    this.state.animationValues.x.removeAllListeners();
    this.state.animationValues.y.removeAllListeners();
  }

  circleAnimation() {
    return [
      styles.circle,
      {
        transform: this.state.animationValues.getTranslateTransform(),
      },
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={this.circleAnimation()}
          {...this._panResponder.panHandlers}
        />
        <TouchableOpacity onPress={() => this.setState({size: this.state.size + 20})}>
          <Animatable.Text transition="fontSize" style={{fontSize: this.state.size}}>I'm Fun</Animatable.Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    backgroundColor: '#00FF00',
    borderRadius: CIRC_SIZE,
    height: CIRC_SIZE,
    width: CIRC_SIZE,
  },
});

AppRegistry.registerComponent('animations', () => animations);
