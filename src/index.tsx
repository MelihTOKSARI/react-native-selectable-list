import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  type FlatListProps,
  type StyleProp,
  StyleSheet,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native';
import SelectableButton, { type ButtonStyleModel } from './SelectableButton';

const screenWidth = Dimensions.get('window').width;

interface SelectableButtonModel {
  id?: number;
  text: string;
  selected?: boolean;
  onSelected?: (state: boolean) => void;
}

interface Props
  extends Omit<FlatListProps<SelectableButtonModel>, 'data' | 'renderItem'> {
  items: Array<SelectableButtonModel>;
  numColumns?: number;
  itemSize?: number;
  itemHeight?: number;
  itemWidth?: number;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  itemWrapperStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  activeStyle?: ButtonStyleModel;
  passiveStyle?: ButtonStyleModel;
  applyParent?: boolean;
  margin?: number;
  auto?: boolean;
  handleItemSelected?: (state: boolean, index: number) => void;
  disabled?: boolean;
  singleSelection?: boolean;
  preventDeselect?: boolean;
}

const SelectableList = ({
  items,
  numColumns = items.length,
  itemSize = 0,
  itemHeight = 0,
  itemWidth = 0,
  containerStyle,
  contentContainerStyle,
  itemContainerStyle,
  itemWrapperStyle,
  itemTextStyle,
  activeStyle,
  passiveStyle,
  applyParent = true,
  margin = 4,
  auto = false,
  handleItemSelected,
  disabled = false,
  singleSelection = false,
  scrollEnabled = false,
  preventDeselect = false,
  ...flatListProps
}: Props) => {
  const [colSize, setColSize] = useState<number | 'auto'>(0);
  const [colLength, setColLength] = useState(numColumns);
  const [currentSelected, setCurrentSelected] = useState<
    SelectableButtonModel | undefined
  >(items.find((t) => t.selected));

  useEffect(() => {
    setCurrentSelected(items.find((t) => t.selected));
  }, [items]);

  useEffect(() => {
    let _colSize: number | 'auto' = 0;
    let _colLength = 0;
    if (itemWidth) {
      _colSize = itemWidth;
      _colLength = Math.floor((screenWidth - margin * 2) / _colSize);
    } else if (itemSize) {
      _colSize = itemSize;
      _colLength = Math.floor((screenWidth - margin * 2) / _colSize);
    } else if (auto) {
      _colSize = 'auto';
    } else if (numColumns) {
      _colSize = Math.floor((screenWidth - margin * 2) / numColumns);
      _colLength = numColumns;
    }

    setColLength(_colLength);
    setColSize(_colSize);
  }, [auto, itemSize, itemWidth, margin, numColumns]);

  if (
    (typeof colSize === 'number' && colSize <= 0) ||
    (typeof colSize === 'string' && colSize !== 'auto')
  ) {
    return null;
  }

  const onItemSelected = (
    state: boolean,
    index: number,
    itemOnSelected?: (state: boolean) => void
  ) => {
    setCurrentSelected(items[index]);
    if (itemOnSelected) {
      itemOnSelected(state);
    }
    if (handleItemSelected) {
      handleItemSelected(state, index);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <SelectableButton
            onSelect={(state: boolean) =>
              onItemSelected(state, index, item.onSelected)
            }
            id={item.id}
            text={item.text}
            selected={
              singleSelection ? currentSelected?.id === item.id : item.selected
            }
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
            disabled={disabled}
            preventDeselect={preventDeselect}
          />
        )}
        numColumns={colLength}
        scrollEnabled={scrollEnabled}
        key={colLength}
        contentContainerStyle={[
          auto ? styles.autoWrapper : undefined,
          contentContainerStyle,
        ]}
        {...flatListProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  autoWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default SelectableList;
