import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ballStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black',
  },
});

class Ball extends Component {
  render() {
    const { ballStyle } = styles;
    return (
      <View style={ballStyle} />
    );
  }
}

export default Ball;
