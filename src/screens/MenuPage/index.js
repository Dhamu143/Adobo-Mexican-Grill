import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DeliveryOptionsModal from '../../reuseable/DeliveryOptionsModal ';

const {width} = Dimensions.get('window');

const images = [
  require('../../assets/food-backgroun.png'),
  require('../../assets/food-backgroun.png'),
  require('../../assets/food-backgroun.png'),
];

const menuItems = [
  {
    id: '1',
    title: 'Burrito Bowl',
    description:
      'Burrito bowl filled with toppings and condiments of your selection',
    price: '$9.99',
    likes: 48,
    image: require('../../assets/food-backgroun.png'),
  },
  {
    id: '2',
    title: 'Burrito Bowl',
    description:
      'Burrito bowl filled with toppings and condiments of your selection',
    price: '$9.99',
    likes: 48,
    image: require('../../assets/food-backgroun.png'),
  },
  {
    id: '3',
    title: 'Burrito Bowl',
    description:
      'Burrito bowl filled with toppings and condiments of your selection',
    price: '$9.99',
    likes: 48,
    image: require('../../assets/food-backgroun.png'),
  },
  {
    id: '4',
    title: 'Burrito Bowl',
    description:
      'Burrito bowl filled with toppings and condiments of your selection',
    price: '$9.99',
    likes: 48,
    image: require('../../assets/food-backgroun.png'),
  },
  {
    id: '5',
    title: 'Burrito Bowl',
    description:
      'Burrito bowl filled with toppings and condiments of your selection',
    price: '$9.99',
    likes: 48,
    image: require('../../assets/food-backgroun.png'),
  },
  {
    id: '6',
    title: 'Burrito Bowl',
    description:
      'Burrito bowl filled with toppings and condiments of your selection',
    price: '$9.99',
    likes: 48,
    image: require('../../assets/food-backgroun.png'),
  },
  {
    id: '7',
    title: 'Burrito Bowl',
    description:
      'Burrito bowl filled with toppings and condiments of your selection',
    price: '$9.99',
    likes: 48,
    image: require('../../assets/food-backgroun.png'),
  },
  {
    id: '8',
    title: 'Burrito Bowl',
    description:
      'Burrito bowl filled with toppings and condiments of your selection',
    price: '$9.99',
    likes: 48,
    image: require('../../assets/food-backgroun.png'),
  },
];

const MenuPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const scrollRef = useRef();

  const handleScroll = event => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / width);
    if (slide !== activeIndex) {
      setActiveIndex(slide);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <ScrollView>
          <View style={styles.bannerContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              ref={scrollRef}>
              {images.map((img, index) => (
                <Image key={index} source={img} style={styles.bannerImage} />
              ))}
            </ScrollView>

            <TouchableOpacity
              style={styles.overlay}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.overlayText}>
                Adobo Mexican Grill - Selden
              </Text>
              <Text style={styles.overlaySubtext}>Closed until 8:00 PM</Text>
            </TouchableOpacity>
            <View style={styles.dotsContainer}>
              {images.map((_, i) => (
                <View
                  key={i}
                  style={[styles.dot, activeIndex === i && styles.activeDot]}
                />
              ))}
            </View>
          </View>

          <View style={styles.horizontalScrollContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollItemsWrapper}>
              <View style={styles.scrollItem}>
                <Image
                  source={require('../../assets/search.png')}
                  style={styles.searchIcon}
                />
              </View>
              <View style={styles.scrollItem}>
                <Text style={styles.scrollText}>Select Your Style</Text>
              </View>
              <View style={styles.scrollItem}>
                <Text style={styles.scrollText}>Birria Tacos</Text>
              </View>
              <View style={styles.scrollItem}>
                <Text style={styles.scrollText}>Kid's Corner</Text>
              </View>
              <View style={styles.scrollItem}>
                <Text style={styles.scrollText}>Sides / Extra</Text>
              </View>
            </ScrollView>
          </View>

          <ScrollView contentContainerStyle={{paddingBottom: 100}}>
            {menuItems.map(item => (
              <View key={item.id} style={styles.menuItem}>
                <View style={{flex: 1}}>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                  <Text style={styles.menuDescription}>{item.description}</Text>
                  <Text style={styles.menuPrice}>
                    {item.price} ❤️ {item.likes}
                  </Text>
                </View>
                <Image source={item.image} style={styles.menuImage} />
              </View>
            ))}
          </ScrollView>
        </ScrollView>
        <DeliveryOptionsModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: '#fff'},
  bannerContainer: {
    position: 'relative',
  },
  bannerImage: {
    width,
    height: 400,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 30,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },
  overlayText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlaySubtext: {
    textAlign: 'center',
    fontSize: 12,
    color: '#555',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#aaa',
    margin: 4,
  },
  activeDot: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },

  actionBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  actionItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    resizeMode: 'contain',
  },
  actionLabel: {
    fontSize: 14,
  },

  menuItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  menuTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuDescription: {
    color: '#555',
    fontSize: 14,
    marginVertical: 4,
  },
  menuPrice: {
    color: '#000',
    fontWeight: 'bold',
  },
  menuImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  horizontalScrollContainer: {
    marginTop: 10,
    paddingVertical: 10,
  },

  scrollItemsWrapper: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },

  scrollItem: {
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  scrollText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },

  searchIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});

export default MenuPage;
