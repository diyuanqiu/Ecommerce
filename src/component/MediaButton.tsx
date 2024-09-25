import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

function MediaButton({image}: {image: number}) {
  return (
    <TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default MediaButton;
