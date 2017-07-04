'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  ListView,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';
import MovieDetail from './MovieDetail';

const API_KEY = '65e043c24785898be00b4abc12fcdaae';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const REQUEST_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const movieData = {
  title: 'The Usual Suspects',
  img: 'http://i.imgur.com/lc15V.jpg',
  year: '1995',
};

class MoviesListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      movies: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.results),
            movies: responseData.results,
          });
      });
  }

  nextPage(movie) {
    this.props.toRoute({
      name: movie.title,
      component: MovieDetail,
      data: movie,
      sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump,
    });
  }

  render() {
    if (!this.state.movies) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
        <ListView dataSource={this.state.dataSource}
          renderRow={this.renderSingleMovie.bind(this)} />
    );
  }

  renderSingleMovie(movie) {
    return (
      <TouchableHighlight onPress={this.nextPage.bind(this, movie)}>
        <View style={styles.container}>
          <Image style={styles.thumbnail}
            source={{ uri: POSTER_PATH + movie.poster_path }} />
          <View style={styles.listData}>
            <Text>{movie.title}</Text>
            <Text>{movie.release_date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    height: 80,
    width: 40,
  },
  listData: {
    marginLeft: 20,
    flex: 1,
  },
});

module.exports = MoviesListing;
