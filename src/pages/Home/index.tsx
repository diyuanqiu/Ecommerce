import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CarouselImage from '../../component/Carousel.tsx';
import axios from 'axios';
import ProductItem from '../../component/ProductItem.tsx';
import DropPicker from 'react-native-dropdown-picker';
import {NaviProps, ProductType} from '../type.ts';

function HomePage({navigation}: NaviProps) {
  const list = [
    {
      id: '0',
      image: require('../../assets/baiquan1.png'),
      name: 'Home',
    },
    {
      id: '1',
      image: require('../../assets/baiquan2.png'),
      name: 'Deals',
    },
    {
      id: '2',
      image: require('../../assets/baiquan3.png'),
      name: 'Electronics',
    },
    {
      id: '3',
      image: require('../../assets/baiquan4.png'),
      name: 'Mobiles',
    },
    {
      id: '4',
      image: require('../../assets/baiquan5.jpeg'),
      name: 'Music',
    },
    {
      id: '5',
      image: require('../../assets/baiquan6.jpeg'),
      name: 'Education',
    },
    {
      id: '6',
      image: require('../../assets/baiquan7.jpeg'),
      name: 'Sports',
    },
    {
      id: '7',
      image: require('../../assets/baiquan9.jpeg'),
      name: 'Food',
    },
  ];

  const deals = [
    {
      id: '20',
      title: 'OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)',
      oldPrice: 25000,
      price: 19000,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg',
        'https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg',
      ],
      color: 'Stellar Green',
      size: '6 GB RAM 128GB Storage',
    },
    {
      id: '30',
      title:
        'Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers',
      oldPrice: 74000,
      price: 26000,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg',
        'https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg',
      ],
      color: 'Cloud Navy',
      size: '8 GB RAM 128GB Storage',
    },
    {
      id: '40',
      title:
        'Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger',
      oldPrice: 16000,
      price: 14000,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg',
        'https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg',
      ],
      color: 'Icy Silver',
      size: '6 GB RAM 64GB Storage',
    },
    {
      id: '40',
      title:
        'realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera',
      oldPrice: 12999,
      price: 10999,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg',
      ],
    },
  ];

  const offers = [
    {
      id: '0',
      title:
        'Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)',
      offer: '72% off',
      oldPrice: 7500,
      price: 4500,
      image:
        'https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg',
      ],
      color: 'Green',
      size: 'Normal',
    },
    {
      id: '1',
      title:
        'Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery',
      offer: '40%',
      oldPrice: 7955,
      price: 3495,
      image: 'https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg',
      ],
      color: 'black',
      size: 'Normal',
    },
    {
      id: '2',
      title: 'Aishwariya System On Ear Wireless On Ear Bluetooth Headphones',
      offer: '40%',
      oldPrice: 7955,
      price: 3495,
      image: 'https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg',
      carouselImages: ['https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg'],
      color: 'black',
      size: 'Normal',
    },
    {
      id: '3',
      title:
        'Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery',
      offer: '40%',
      oldPrice: 24999,
      price: 19999,
      image: 'https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg',
      ],
      color: 'Norway Blue',
      size: '8GB RAM, 128GB Storage',
    },
  ];

  const [products, setProducts] = useState<ProductType[]>([]);
  const [category, setCategory] = useState('jewelery');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: "Men's clothing", value: "men's clothing"},
    {label: 'jewelery', value: 'jewelery'},
    {label: 'electronics', value: 'electronics'},
    {label: "women's clothing", value: "women's clothing"},
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (err) {
        console.log('error fetching data', err);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.searchContainer}>
          <Pressable style={styles.searchBox}>
            <AntDesign name="search1" size={24} style={styles.searchIcon} />
            <TextInput placeholder="Search Amazon.in" />
          </Pressable>
          <Feather name="mic" size={24} />
        </View>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={24} />
          <Pressable>
            <Text style={styles.locationText}>Deliver to Yana - Tokyo</Text>
          </Pressable>
          <MaterialIcons name="keyboard-arrow-down" size={24} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <Pressable key={index} style={styles.classContainer}>
              <Image source={item?.image} style={styles.classImage} />
              <Text style={styles.classText}>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <CarouselImage />
        <Text style={styles.trendingText}>Trending Deals of the week</Text>
        <View style={styles.trendingContainer}>
          {deals.map((item, index) => (
            <Pressable style={styles.imageContainer} key={index}>
              <Image source={{uri: item?.image}} style={styles.trendingImage} />
            </Pressable>
          ))}
        </View>
        <Text style={styles.grayBorder} />
        <Text style={styles.trendingText}>Today's Deals</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {offers.map((item, index) => (
            <Pressable
              key={index}
              style={styles.offerContainer}
              onPress={() => navigation.navigate('ProductInfo', item)}>
              <Image source={{uri: item?.image}} style={styles.offerImage} />
              <View style={styles.offerTextContainer}>
                <Text style={styles.offerText}>Upto {item?.offer}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={styles.grayBorder} />
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 15,
            width: '45%',
            marginBottom: open ? 50 : 0,
          }}>
          <DropPicker
            style={{
              borderColor: '#B7B7B7',
              height: 30,
              marginBottom: open ? 120 : 15,
            }}
            open={open}
            value={category}
            items={items}
            setOpen={setOpen}
            setValue={setCategory}
            setItems={setItems}
            placeholder="Select Category"
          />
        </View>
        <View style={styles.productContainer}>
          {products
            ?.filter(item => item.category === category)
            .map((item, index) => (
              <ProductItem item={item} key={index} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
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
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 5,
    backgroundColor: '#AFEEEE',
  },
  locationText: {
    fontSize: 14,
    fontWeight: '500',
  },
  classImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  classText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  classContainer: {
    margin: 12,
    alignItems: 'center',
  },
  carouselContainer: {
    height: 200,
    width: '100%',
    marginBottom: 20,
  },
  image: {
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 250,
    height: 300,
  },
  trendingText: {
    fontWeight: 'bold',
    padding: 15,
  },
  trendingImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  trendingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  grayBorder: {
    height: 1,
    borderColor: '#d0d0d0',
    borderWidth: 2,
    marginTop: 10,
  },
  offerImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  offerContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  offerTextContainer: {
    backgroundColor: '#E31837',
    width: 130,
    alignItems: 'center',
    paddingVertical: 3,
    marginTop: 10,
    borderRadius: 3,
  },
  offerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default HomePage;
