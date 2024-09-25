import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ProductType} from '../pages/type.ts';

function ProductItem({item}: {item: ProductType}) {
  return (
    <Pressable style={styles.container}>
      <Image source={{uri: item?.image}} style={styles.image} />
      <Text numberOfLines={1} style={styles.text}>
        {item?.title}
      </Text>
      <View style={styles.bottom}>
        <Text style={styles.price}>₹ {item?.price}</Text>
        <Text style={styles.rate}>{item?.rating?.rate} ratings</Text>
      </View>
      <Pressable style={styles.cartButton}>
        <Text>Add to Cart</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 25,
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    width: 150,
    marginTop: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  price: {
    fontWeight: 'bold',
  },
  rate: {
    color: '#FFC72C',
    fontWeight: '500',
  },
  cartButton: {
    backgroundColor: '#FFC72C',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ProductItem;
