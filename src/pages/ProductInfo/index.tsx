import React from 'react';
import {Pressable, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

function ProductInfo() {
  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <Pressable style={styles.searchBox}>
          <AntDesign name="search1" size={24} style={styles.searchIcon} />
          <TextInput placeholder="Search Amazon.in" />
        </Pressable>
        <Feather name="mic" size={24} />
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
});

export default ProductInfo;
