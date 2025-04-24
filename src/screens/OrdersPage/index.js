import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const OrdersPage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <View style={{alignSelf: 'flex-end'}}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/user.png')}
          />
        </View>
        <Text style={styles.cartText}>Orders</Text>
        <View style={styles.addToCart}>
          <Image
            style={styles.logo}
            source={require('../../assets/spoon-and-fork.png')}
          />
          <Text
            style={{
              fontSize: 17,
              marginTop: 10,
              color: 'gray',
            }}>
            Log in to view your past orders.
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

export default OrdersPage;
