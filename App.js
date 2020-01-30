import React, {Component} from 'react';

import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';

const getSuggestions = require('./trie-service.js');
const keysWithPrefix = require('./trie-from-idiom.js');

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestions: [],
  };
  onChangeText = text => {
    text = text.trim().toLowerCase();
    if (text) {
      const suggestions = getSuggestions(text);
      this.setState({
        suggestions: suggestions,
      });
    } else {
      this.setState({
        suggestions: [],
      });
    }
  };

  onChangeText2 = text => {
    text = text.trim().toLowerCase();
    if (text) {
      const suggestions = keysWithPrefix(text).map(item => {
        return {word: item};
      });
      this.setState({
        suggestions: suggestions,
      });
    } else {
      this.setState({
        suggestions: [],
      });
    }
  };

  keyExtractor = item => item.word;

  render() {
    const suggestions = this.state.suggestions;
    return (
      <View style={styles.container}>
        <Text>Tiny english dictionary</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
          autoFocus={true}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Input the word..."
        />
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText2}
          autoFocus={false}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="成语接龙..."
        />
        <FlatList
          style={styles.list}
          data={suggestions}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text>
                {item.word} {item.ipa ? ' [ ' + item.ipa + ' ]' : ' '}
                {item.translation && ' ' + item.translation.join(' ')}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 30,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    margin: 10,
  },
  list: {
    marginTop: 5,
    marginRight: 5,
    marginBottom: 30,
    marginLeft: 5,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 3,
    marginBottom: 5,
  },
});
