import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

const Header = (props) => (
  <TouchableOpacity 
    style={styles.header}
    // onPress={() => alert('this is header')}
    // onLongPress={() => alert('this is header')}
    onPressOut={() => alert('this is header')}
  >
    <View >
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  }
});

export default Header;