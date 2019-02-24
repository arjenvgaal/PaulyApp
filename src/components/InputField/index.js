import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class InputField extends Component {
  state = {
    text: this.props.text || '',
  };

  render = () => (
    <View style={[styles.containerStyle, this.props.styleOptions]}>
      <TextInput
        value={this.state.text}
        style={[styles.inputStyle, ]}
        placeholder={this.props.placeholder}
        onChangeText={(text) => this.setState({text})}
        {...this.props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '74%',
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: '#fff',
  },
  inputStyle: {
    paddingVertical: 10,
    color: '#121212',
  },
});