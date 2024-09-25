import Carousel from 'react-native-reanimated-carousel';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {useCallback} from 'react';
import React from 'react';

const width = Dimensions.get('window').width;

function CarouselImage() {
  const images = [
    {
      title: '1',
      images: require('../assets/baiquan5.jpeg'),
    },
    {
      title: '2',
      images: require('../assets/baiquan6.jpeg'),
    },
    {
      title: '3',
      images: require('../assets/baiquan7.jpeg'),
    },
    {
      title: '4',
      images: require('../assets/baiquan8.jpeg'),
    },
  ];

  const renderItem = useCallback(
    ({item}: {item: {title: string; images: any}}) => {
      return (
        <View style={styles.imageContainer}>
          <Image source={item.images} />
        </View>
      );
    },
    [],
  );

  return (
    <View style={{flex: 1}}>
      <Carousel
        width={width}
        height={width / 2}
        data={images}
        renderItem={renderItem}
        loop={true}
        style={styles.carouselContainer}
        autoPlay={true}
        autoPlayInterval={4000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    width: '100%',
  },
});

export default CarouselImage;
