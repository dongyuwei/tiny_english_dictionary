import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList
} from "react-native";

import getSuggestions from "./trie-service.js";

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestions: []
  };
  onChangeText = text => {
    const suggestions = getSuggestions(text.trim().toLowerCase());
    this.setState({
      suggestions: suggestions
    });
  };

  keyExtractor = item => item.word;

  render() {
    console.log("render");
    const suggestions = this.state.suggestions;
    return (
      <View style={styles.container}>
        <Text>Tiny english dictionary</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
          autoFocus={true}
          autoCorrect={false}
          placeholder="Input the word..."
        />
        <FlatList
          style={styles.list}
          data={suggestions}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>
                {item.word}: [ {item.ipa}]
                {item.translation && item.translation.join(" ")}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 30
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    margin: 10
  },
  list: {
    marginTop: 5,
    marginRight: 5,
    marginBottom: 30,
    marginLeft: 5
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 3,
    marginBottom: 5
  }
});
