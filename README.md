## tiny english dictionary

Built by react-native.

### features

1. instant translate english to chinese when typing
2. instant spell-check when typing
3. show IPA of inputed word
4. 成语接龙

### dev

- Android: `yarn run-android` or 
- iOS: `yarn run-ios`

### dev log 
- Android: `yarn react-native log-android` or 
- iOS: `yarn react-native log-ios`


### what I learned from this project?
1. config react native metro bundler as following can speedup app startup time dramatically:
```js
experimentalImportSupport: true,
inlineRequires: true

```
see: https://github.com/dongyuwei/tiny_english_dictionary/blob/master/metro.config.js

2. RN's javascriptCore engine does not support `console.time` api. It can crash app on Android.
3. [dawg-lookup](https://github.com/mckoss/dawg) is awesome, it can build trie from packed/serialized file quickly. But it does not support UTF-8 characters, so for 成语接龙, I need another trie data structure implementation, which is [node-ternary-search-trie](https://github.com/jakwings/node-ternary-search-trie), it's speedy.
4. I use [Typo.js](https://github.com/cfinke/Typo.js/) to implement the spell-check feature.
5. [flatbuff](https://github.com/google/flatbuffers) and [schemapack](https://github.com/phretaddin/schemapack) are awesome. I have tried them, but they are difficult to integrate with react native. RN does not have proper/easy way to consume binary file. Fix me if I'm wrong. I have tried https://github.com/jidibingren/FlatBuffers-ObjC in this branch https://github.com/dongyuwei/hallelujahIM/tree/flatbuffer, but the performance gain is not so good as using json. 
6. Using react-native to develop mobile app is really easy and fast, however you need to pay attention to app performance issue.

