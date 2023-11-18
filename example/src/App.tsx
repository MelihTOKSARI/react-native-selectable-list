import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import SelectableList from 'rn-selectable-list';

const items = [
  {
    id: 1,
    text: 'A',
    selected: false,
    onSelected: (state: boolean) => console.log('A state:', state),
  },
  {
    id: 2,
    text: 'B',
    selected: false,
    onSelected: (state: boolean) => console.log('B state:', state),
  },
  {
    id: 3,
    text: 'Monday',
    selected: false,
    onSelected: (state: boolean) => console.log('Monday state:', state),
  },
  {
    id: 4,
    text: 'Tuesday',
    selected: false,
    onSelected: (state: boolean) => console.log('Tuesday state:', state),
  },
  {
    id: 5,
    text: 'Wednasday',
    selected: true,
    onSelected: (state: boolean) => console.log('Wednasday state:', state),
  },
  {
    id: 6,
    text: 'C',
    selected: false,
    onSelected: (state: boolean) => console.log('C state:', state),
  },
  {
    id: 7,
    text: 'Thursday',
    selected: false,
    onSelected: (state: boolean) => console.log('Thursday state:', state),
  },
  {
    id: 8,
    text: 'Friday',
    selected: false,
    onSelected: (state: boolean) => console.log('Friday state:', state),
  },
  {
    id: 9,
    text: 'D',
    selected: false,
    onSelected: (state: boolean) => console.log('D state:', state),
  },
  {
    id: 10,
    text: 'Saturday',
    selected: false,
    onSelected: (state: boolean) => console.log('A state:', state),
  },
  {
    id: 11,
    text: 'Sunday',
    selected: false,
    onSelected: (state: boolean) => console.log('Saturday state:', state),
  },
  {
    id: 12,
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
        // singleSelection={true}
        // auto={true}
        // scrollEnabled={true}
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        // disabled={true}
        // contentContainerStyle={{
        //   flexDirection: 'row',
        //   flexWrap: 'nowrap',
        //   justifyContent: 'flex-start',
        // }}
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
