import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Ball from './src/Ball';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: {
        x: 200,
        y: 300,
      },
    }).start();
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.container}>
          <Ball />
        </View>
      </Animated.View>
    );
  }
}
