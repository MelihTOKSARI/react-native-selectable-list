import React, { useState } from 'react';
import {
  type StyleProp,
  StyleSheet,
  Text,
  type TextStyle,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';

export interface ButtonStyleModel {
  backgroundColor: string;
  borderColor: string;
}

interface Props {
  text: string;
  selected?: boolean;
  onSelect?: (state: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeStyle?: ButtonStyleModel;
  passiveStyle?: ButtonStyleModel;
  wrapperStyle?: StyleProp<ViewStyle>;
}

const SelectableButton = ({
  selected = false,
  text,
  onSelect,
  containerStyle,
  textStyle,
  activeStyle,
  passiveStyle,
  wrapperStyle,
}: Props) => {
  const [isSelected, setIsSelected] = useState(selected);
  const onPressed = () => {
    setIsSelected((prev) => {
      if (onSelect) {
        onSelect(!prev);
      }

      return !prev;
    });
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPressed}
    >
      <View
        style={[
          styles.wrapper,
          wrapperStyle,
          isSelected
            ? activeStyle || styles.selected
            : passiveStyle || styles.notSelected,
        ]}
      >
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
  },
  selected: {
    backgroundColor: '#E5EDFF',
    borderColor: '#1D4DC9',
  },
  notSelected: {
    backgroundColor: 'transparent',
    borderColor: '#D4DCEC',
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 28,
  },
});

export default SelectableButton;
