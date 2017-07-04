import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w300';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w780';

export default class MovieDetail extends Component {
  render() {
    return (
      <ScrollView>
        <Image style={styles.backdrop} source={{ uri: BACKDROP_PATH + this.props.data.backdrop_path}} />
        <View style={styles.details} >
          <Text style={styles.title}>{this.props.data.title}</Text>
          <Text style={styles.overview}>{this.props.data.overview}</Text>
        </View>
        <Image style={styles.poster} elevation={3} source={{ uri: POSTER_PATH + this.props.data.poster_path}} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    height: 230,
    marginBottom: 30,
  },
  details: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  overview: {
    fontSize: 18,
  },
  poster: {
    height: 225,
    width: 150,
    position: 'absolute',
    backgroundColor: '#000000',
    top: 40,
    left: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    shadowRadius: 7,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    overflow: 'visible',
  },
});
