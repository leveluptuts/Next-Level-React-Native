'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  Component
} from 'react-native';
import Router from 'react-native-simple-router';
import MoviesListing from './app/movies/MoviesListing';

const FIRST_ROUTE = {
  name: 'My Movie DB',
  component: MoviesListing,
};

class MyMovieDB extends Component {
  render() {
    return (
        <Router
          firstRoute={FIRST_ROUTE}
          headerStyle={styles.header}/>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#373142',
  },
});

AppRegistry.registerComponent('MyMovieDB', () => MyMovieDB);
