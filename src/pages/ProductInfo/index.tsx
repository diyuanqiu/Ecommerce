import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

function ProductInfo({route}: {route: any}) {
  const product = route.params.item;
  const {width} = Dimensions.get('window');
  const height = (width * 100) / 100;

  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <Pressable style={styles.searchBox}>
          <AntDesign name="search1" size={24} style={styles.searchIcon} />
          <TextInput placeholder="Search Amazon.in" />
        </Pressable>
        <Feather name="mic" size={24} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {product.carouselImages.map((item: string, index: number) => (
          <ImageBackground
            source={{uri: item}}
            key={index}
            style={[{width, height}, styles.carouselImage]}>
            <View style={styles.productContainer}>
              <View style={styles.offContainer}>
                <Text style={styles.offText}>40% off</Text>
              </View>
              <View style={styles.shareContainer}>
                <AntDesign name="sharealt" size={24} />
              </View>
            </View>
            <View style={styles.likeContainer}>
              <AntDesign name="hearto" size={24} />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.price}>₹ {product?.price}</Text>
      </View>
      <Text style={styles.grayBorder} />
      <View style={styles.categoryContainer}>
        <Text>Color: </Text>
        <Text>{product?.color}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: '#00CED1',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    gap: 10,
    borderRadius: 3,
    height: 38,
    backgroundColor: 'white',
  },
  searchIcon: {
    paddingLeft: 10,
  },
  carouselImage: {
    marginTop: 25,
    resizeMode: 'contain',
  },
  offContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C60C30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  offText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  productContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shareContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 15,
    marginLeft: 15,
  },
  mainContainer: {
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
  },
  grayBorder: {
    height: 1,
    borderColor: '#d0d0d0',
    borderWidth: 2,
  },
});

export default ProductInfo;
