import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import {
  FlatList,
  type StyleProp,
  StyleSheet,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import SelectableButton, { type ButtonStyleModel } from './SelectableButton';

const screenWidth = Dimensions.get('window').width;

interface SelectableButtonModel {
  text: string;
  selected?: boolean;
  onSelected?: (state: boolean) => void;
}

interface Props {
  items: Array<SelectableButtonModel>;
  numColumns?: number;
  itemSize?: number;
  itemHeight?: number;
  itemWidth?: number;
  containerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  itemWrapperStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  activeStyle?: ButtonStyleModel;
  passiveStyle?: ButtonStyleModel;
  applyParent?: boolean;
  margin?: number;
}

const SelectableList = ({
  items,
  numColumns = items.length,
  itemSize = 0,
  itemHeight = 0,
  itemWidth = 0,
  containerStyle,
  itemContainerStyle,
  itemWrapperStyle,
  itemTextStyle,
  activeStyle,
  passiveStyle,
  applyParent = true,
  margin = 4,
}: Props) => {
  const [colSize, setColSize] = useState(0);
  const [colLength, setColLength] = useState(numColumns);

  useEffect(() => {
    let _colSize = 0;
    let _colLength = 0;
    if (itemWidth) {
      _colSize = itemWidth;
      _colLength = Math.floor((screenWidth - margin * 2) / _colSize);
    } else if (itemSize) {
      _colSize = itemSize;
      _colLength = Math.floor((screenWidth - margin * 2) / _colSize);
    } else if (numColumns) {
      _colSize = Math.floor((screenWidth - margin * 2) / numColumns);
      _colLength = numColumns;
    }

    setColLength(_colLength);
    setColSize(_colSize);
  }, [itemSize, itemWidth, margin, numColumns]);

  if (colSize <= 0) {
    return null;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <SelectableButton
            text={item.text}
            selected={item.selected}
            containerStyle={[
              applyParent
                ? {
                    width: itemWidth ? itemWidth : colSize,
                    height: itemHeight ? itemHeight : colSize,
                    padding: margin,
                  }
                : undefined,
              itemContainerStyle,
            ]}
            wrapperStyle={[
              !applyParent
                ? {
                    width: itemWidth ? itemWidth : colSize,
                    height: itemHeight ? itemHeight : colSize,
                    margin,
                  }
                : undefined,
              itemWrapperStyle,
            ]}
            textStyle={itemTextStyle}
            activeStyle={activeStyle}
            passiveStyle={passiveStyle}
          />
        )}
        numColumns={colLength}
        scrollEnabled={false}
        key={colLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
});

export default SelectableList;
