import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const StyledButton = ({ style, onPress, ...props }) => (
  <TouchableOpacity style={style} onPress={onPress} />
);

export default StyledButton;
