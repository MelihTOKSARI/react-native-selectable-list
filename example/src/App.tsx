import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import SelectableList from 'react-native-selectable-list';

// const items = [
//   { text: 'M', selected: false },
//   { text: 'T', selected: false },
//   { text: 'W', selected: true },
//   { text: 'T', selected: false },
//   { text: 'F', selected: false },
//   { text: 'S', selected: false },
//   { text: 'S', selected: false },
// ];

const items = [
  { text: 'A', selected: false },
  { text: 'B', selected: false },
  { text: 'Monday', selected: false },
  { text: 'Tuesday', selected: false },
  { text: 'Wednasday', selected: true },
  { text: 'C', selected: false },
  { text: 'Thursday', selected: false },
  { text: 'Friday', selected: false },
  { text: 'D', selected: false },
  { text: 'Saturday', selected: false },
  { text: 'Sunday', selected: false },
  { text: 'E', selected: false },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SelectableList
        numColumns={2}
        items={items}
        itemHeight={64}
        // containerStyle={{ backgroundColor: 'grey' }}
        // itemWidth={64}
        // itemSize={64}
        // itemContainerStyle={{ width: 64, height: 64 }}
        // applyParent={true}
        // margin={2}
        // auto={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
