# rn-selectable-list

Provides a bunch of selectable buttons for your list. It automatically wraps the screen horizontally.

## Installation

```sh
npm install rn-selectable-list
```

## Usage

```js
import SelectableList from 'rn-selectable-list';

const items = [
  { text: 'M', selected: false },
  { text: 'T', selected: false },
  { text: 'W', selected: true },
  { text: 'T', selected: false },
  { text: 'F', selected: false },
  { text: 'S', selected: false },
  { text: 'S', selected: false },
];

// ...

<SafeAreaView style={styles.container}>
  <SelectableList
    numColumns={7} // 3rd highest priority default is length of items
    items={items}
    // itemHeight={64} // highest priority
    // itemWidth={64} // highest priority
    // itemSize={64} // 2nd highest priority
    // margin={2} // default is 4
  />
</SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
