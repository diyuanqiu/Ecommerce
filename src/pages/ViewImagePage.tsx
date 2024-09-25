import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import color from '../config/color';
function ViewImagePage() {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton} />
      <View style={styles.deleteButton} />
      <Image
        source={require('../assets/baiquan2.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  closeButton: {
    position: 'absolute',
    top: 90,
    left: 40,
    width: 30,
    height: 30,
    backgroundColor: color.primary,
  },
  deleteButton: {
    position: 'absolute',
    top: 90,
    right: 40,
    width: 30,
    height: 30,
    backgroundColor: color.secondary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImagePage;
