import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import realm from './realm';
import { ListView } from 'realm/react-native';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.todos),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.todos),
    });
  }

  updateTodo(todo) {
    realm.write(()=> {
      todo.complete = !todo.complete;
    });
    this.setState({
      dataSource: this.ds.cloneWithRows(this.props.todos),
    });
  }

  deleteTodo(todo) {
    realm.write(()=> {
      realm.delete(todo);
    });
    this.setState({
      dataSource: this.ds.cloneWithRows(this.props.todos),
    });
  }

  render() {
    return (
      <ListView style={styles.list}
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this.renderSingleTodo.bind(this)} />
    );
  }

  renderSingleTodo(todo) {
    let rowStyles = todo.complete ? [styles.listItem, styles.complete] : styles.listItem;
    return (
        <View style={rowStyles}>
          <TouchableHighlight
            underlayColor='transparent'
            style={styles.updateTodo}
            onPress={this.updateTodo.bind(this, todo)}>
            <Text style={styles.listItemText}>{todo.complete ? '✓' : '-'}</Text>
          </TouchableHighlight>
          <Text style={styles.listItemText}>{todo.text}</Text>
          <TouchableHighlight
            style={styles.deleteTodo}
            onPress={this.deleteTodo.bind(this, todo)}>
            <Text style={styles.listItemText}>X</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    alignSelf: 'stretch',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#272625',
    padding: 20,
    flexDirection: 'row',
    position: 'relative',
  },
  listItemText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  deleteTodo: {
    position: 'absolute',
    right: 10,
  },
  updateTodo: {
    width: 30,
  },
  complete: {
    opacity: 0.3,
  },
});
