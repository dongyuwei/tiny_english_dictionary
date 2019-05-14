import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList
} from "react-native";

let getSuggestions;

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestions: [],
    loaded: false
  };
  onChangeText = text => {
    const suggestions = getSuggestions(text.trim().toLowerCase());
    this.setState({
      suggestions: suggestions
    });
  };

  keyExtractor = item => item.word;

  componentDidMount() {
    if (!this.state.loaded) {
      getSuggestions = require("./trie-service.js");
      console.log("loaded", getSuggestions);

      this.setState({
        loaded: true
      });
    }
  }

  render() {
    const suggestions = this.state.suggestions;
    return (
      <View style={styles.container}>
        <Text>Tiny english dictionary</Text>
        <View style={{ display: this.state.loaded ? "none" : "flex" }}>
          <Text>loading dictionary...</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
          autoFocus={true}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Input the word..."
          editable={this.state.loaded}
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
    marginTop: 50
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
