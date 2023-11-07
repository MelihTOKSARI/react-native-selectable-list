import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import SelectableList from 'rn-selectable-list';

const items = [
  {
    text: 'A',
    selected: false,
    onSelected: (state: boolean) => console.log('A state:', state),
  },
  {
    text: 'B',
    selected: false,
    onSelected: (state: boolean) => console.log('B state:', state),
  },
  {
    text: 'Monday',
    selected: false,
    onSelected: (state: boolean) => console.log('Monday state:', state),
  },
  {
    text: 'Tuesday',
    selected: false,
    onSelected: (state: boolean) => console.log('Tuesday state:', state),
  },
  {
    text: 'Wednasday',
    selected: true,
    onSelected: (state: boolean) => console.log('Wednasday state:', state),
  },
  {
    text: 'C',
    selected: false,
    onSelected: (state: boolean) => console.log('C state:', state),
  },
  {
    text: 'Thursday',
    selected: false,
    onSelected: (state: boolean) => console.log('Thursday state:', state),
  },
  {
    text: 'Friday',
    selected: false,
    onSelected: (state: boolean) => console.log('Friday state:', state),
  },
  {
    text: 'D',
    selected: false,
    onSelected: (state: boolean) => console.log('D state:', state),
  },
  {
    text: 'Saturday',
    selected: false,
    onSelected: (state: boolean) => console.log('A state:', state),
  },
  {
    text: 'Sunday',
    selected: false,
    onSelected: (state: boolean) => console.log('Saturday state:', state),
  },
  {
    text: 'E',
    selected: false,
    onSelected: (state: boolean) => console.log('E state:', state),
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SelectableList
        numColumns={2}
        items={items}
        itemHeight={64}
        handleItemSelected={(state: boolean, index: number) =>
          console.log('state:', state, ' - index:', index)
        }
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
