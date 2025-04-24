import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const AddToCartPage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <Text style={styles.cartText}>Cart</Text>
        <View style={styles.addToCart}>
          <Image
            style={styles.logo}
            source={require('../../assets/cart.png')}
          />
          <Text
            style={{
              fontSize: 17,
              marginTop: 10,
              color: 'gray',
            }}>
            Item you add to your cart will appear here
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  cartText: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
  addToCart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
});

export default AddToCartPage;
