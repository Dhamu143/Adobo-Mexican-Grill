import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Modal,
} from 'react-native';
import ClosedModal from '../../reuseable/ClosedModal';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;

const recommendedItems = [
  {
    id: '1',
    title: 'Nachos',
    price: '$9.99',
    likes: 10,
    image: require('../../assets/food-backgroun.png'),
  },
  {
    id: '2',
    title: 'Burrito',
    price: '$9.99',
    likes: 8,
    image: require('../../assets/food-backgroun.png'),
  },
  {
    id: '3',
    title: 'Nachos',
    price: '$9.99',
    likes: 10,
    image: require('../../assets/food-backgroun.png'),
  },
  {
    id: '4',
    title: 'Burrito',
    price: '$9.99',
    likes: 8,
    image: require('../../assets/food-backgroun.png'),
  },
];

const HomePage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSchedule = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <ImageBackground
            source={require('../../assets/food-backgroun.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <View style={styles.overlay}>
              <View style={{flex: 1, justifyContent: 'space-around'}}>
                <TouchableOpacity
                  style={styles.headerBox}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.title}>Adobo Mexican Grill - Selden</Text>
                  <Text style={styles.subtitle}>Closed until 8:00 PM</Text>
                </TouchableOpacity>
                <View style={{alignSelf: 'center'}}>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bullet}>
                      🎁 Earn points with every order
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bullet}>
                      🍴 Redeem points for free food
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bullet}>
                      ⭐ Receive exclusive discounts
                    </Text>
                  </View>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.signUpBtn}
                    onPress={() => navigation.navigate('SignupPage')}>
                    <Text style={styles.signUpText}> Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate('LoginPage')}>
                    <Text style={styles.loginText}>Log In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommended</Text>
            <FlatList
              data={recommendedItems}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.card}>
                  <View style={{flex: 1}}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <View style={styles.likesRow}>
                      <Text style={styles.cardPrice}>{item.price}</Text>
                      <Text style={styles.cardPrice}>❤️ {item.likes}</Text>
                    </View>
                  </View>
                  <Image source={item.image} style={styles.cardImage} />
                </View>
              )}
            />
          </View>

          <View style={styles.featured}>
            <Text style={styles.featuredTitle}>Featured</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                paddingVertical: 20,
                paddingHorizontal: 16,
              }}>
              <View>
                <Text style={styles.notificationTitle}>🔔 Notification</Text>
                <Text style={styles.notificationDesc}>
                  Meet our most popular items
                </Text>
              </View>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/rightArrow.png')}
              />
            </View>
          </View>
        </View>
        <ClosedModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSchedule={handleSchedule}
          text1="We're Closed"
          text2="Sorry we're closed untill 8:00 PM. Schedule an order or come back
        when we're open"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#E9E9E9'},
  backgroundImage: {height: 400},
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    height: 400,
    justifyContent: 'flex-end',
  },
  headerBox: {
    backgroundColor: 'rgba(154, 143, 143, 0.85)',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 10,
  },
  title: {color: '#fff', fontWeight: 'bold', fontSize: 16},
  subtitle: {color: '#fff', fontSize: 14},
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  bullet: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    lineHeight: 30,
  },
  signUpBtn: {
    backgroundColor: '#EF4444',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginBtn: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  section: {padding: 16},
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    width: screenWidth * 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FDFCFC',
  },
  cardTitle: {fontWeight: 'bold', fontSize: 16},
  cardPrice: {fontSize: 14, marginTop: 4, marginHorizontal: 5},
  likesRow: {flexDirection: 'row', alignItems: 'center', marginTop: 4},
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 8,
    marginLeft: 12,
  },
  featured: {paddingTop: 10},
  featuredTitle: {
    paddingHorizontal: 16,
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
  },
  notificationTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  notificationDesc: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    fontWeight: '400',
  },
});

export default HomePage;
