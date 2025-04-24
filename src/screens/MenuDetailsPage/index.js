import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const baseOptions = [
  'Mexican Rice',
  'Cilantro Lime Rice',
  'Black Beans',
  'Pinto Beans',
];

const sauceOptions = [
  'Chipoyle Sauce',
  'Cilantro Sauce',
  'Sour Cream Sauce',
  'Sweet Mango Verde Sauce',
  'Habanero Sauce',
  'No Sauces',
];

const proteinOptions = [
  {label: 'Tofu', price: 2.0},
  {label: 'Grilled Chicken', price: 2.0},
  {label: 'Shredded Chicken', price: 2.0},
  {label: 'Honey Chipotle Chicken', price: 2.49},
  {label: 'Steak', price: 3.0},
  {label: 'Ground Beef', price: 3.0},
  {label: 'Sweet & Spicy Grilled Shrimp', price: 3.0},
];

const proteinAddition = [
  {label: 'Tofu', price: 2.0},
  {label: 'Grilled Chicken', price: 2.0},
  {label: 'Shredded Chicken', price: 2.0},
  {label: 'Honey Chipotle Chicken', price: 2.49},
  {label: 'Steak', price: 3.0},
  {label: 'Ground Beef', price: 3.0},
  {label: 'Sweet & Spicy Grilled Shrimp', price: 3.0},
];

const quesoOptions = ['Queso', 'Spicy Queso'];

const guacamoleOptions = [
  {label: 'Guacamole', price: 0.99},
  {label: 'Spicy Guacamole', price: 0.99},
];

const toppingOptions = [
  'Pico Salsa',
  'Spicy Salsa',
  'Corm Salsa',
  'Red Chopped Onion',
  'Mexican Cheese (Yellow and White)',
  'Monte Jack Cheese (White)',
  'Romain Lettuce',
];

const MenuDetailsPage = () => {
  const [selectedBases, setSelectedBases] = useState([]);
  const [selectedProtein, setSelectedProtein] = useState(null);
  const [selectedQueso, setSelectedQueso] = useState(null);
  const [selectedGuacamole, setSelectedGuacamole] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const toggleBaseSelection = item => {
    if (selectedBases.includes(item)) {
      setSelectedBases(prev => prev.filter(i => i !== item));
    } else if (selectedBases.length < 2) {
      setSelectedBases(prev => [...prev, item]);
    }
  };

  const toggleTopping = item => {
    if (selectedToppings.includes(item)) {
      setSelectedToppings(prev => prev.filter(i => i !== item));
    } else if (selectedToppings.length < 5) {
      setSelectedToppings(prev => [...prev, item]);
    }
  };

  const renderCheckbox = (label, selected, onPress) => (
    <TouchableOpacity style={styles.checkboxRow} onPress={onPress}>
      <View style={styles.customCheckbox}>
        {selected && <View style={styles.checkboxTick} />}
      </View>
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );

  const renderRadio = (label, selected, onPress, price = null) => (
    <TouchableOpacity style={styles.radioRow} onPress={onPress}>
      <View style={styles.leftRow}>
        <View style={styles.customRadio}>
          {selected && <View style={styles.radioSelected} />}
        </View>
        <Text style={styles.checkboxLabel}>{label}</Text>
      </View>
      {price !== null && (
        <Text style={styles.priceText}>+${price.toFixed(2)}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Header Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/food-backgroun.png')}
              style={styles.image}
            />
            <TouchableOpacity style={styles.closeIcon}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/close.png')}
              />
            </TouchableOpacity>
          </View>

          {/* Info Section */}
          <View style={styles.infoSection}>
            <Text style={styles.title}>Burrito Bowl</Text>
            <Text style={styles.description}>
              Burrito bowl filled with toppings and condiments of your selection
            </Text>
            <Text style={styles.likeText}>❤️ 48</Text>
          </View>

          {/* Base Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Base</Text>
            <Text style={styles.sectionSubtitle}>
              Select between 1 and 2 options
            </Text>
            {baseOptions.map(item =>
              renderCheckbox(item, selectedBases.includes(item), () =>
                toggleBaseSelection(item),
              ),
            )}
          </View>

          {/* Protein Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Protein</Text>
            <Text style={styles.sectionSubtitle}>Select an option</Text>
            {proteinOptions.map(item =>
              renderRadio(
                item.label,
                selectedProtein === item.label,
                () => setSelectedProtein(item.label),
                item.price,
              ),
            )}
          </View>

          {/* Queso Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Queso option</Text>
            <Text style={styles.sectionSubtitle}>
              Select at most one option
            </Text>
            {quesoOptions.map(item =>
              renderRadio(item, selectedQueso === item, () =>
                setSelectedQueso(item),
              ),
            )}
          </View>

          {/* Guacamole Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Guacamole option</Text>
            <Text style={styles.sectionSubtitle}>
              Select at most one option
            </Text>
            {guacamoleOptions.map(item =>
              renderRadio(
                item.label,
                selectedGuacamole === item.label,
                () => setSelectedGuacamole(item.label),
                item.price,
              ),
            )}
          </View>

          {/* Toppings Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Topping</Text>
            <Text style={styles.sectionSubtitle}>Free toppings (5 max)</Text>
            {toppingOptions.map(item =>
              renderCheckbox(item, selectedToppings.includes(item), () =>
                toggleTopping(item),
              ),
            )}
          </View>

          {/* Protein Addition */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Protein Addition</Text>
            <Text style={styles.sectionSubtitle}>
              Select at most one option
            </Text>
            {proteinAddition.map(item =>
              renderRadio(
                item.label,
                selectedProtein === item.label,
                () => setSelectedProtein(item.label),
                item.price,
              ),
            )}
          </View>

          {/* Sauce */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sauce</Text>
            <Text style={styles.sectionSubtitle}>Select Up to 2 options</Text>
            {baseOptions.map(item =>
              renderCheckbox(item, selectedBases.includes(item), () =>
                toggleBaseSelection(item),
              ),
            )}
          </View>

          {/*  Preparation Addition */}
          <View style={styles.topContainer}>
            <Text
              style={[
                styles.sectionTitle,
                {paddingHorizontal: 16, paddingTop: 10},
              ]}>
              Preparation Addition
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                paddingHorizontal: 16,
                paddingVertical: 15,
                marginTop: 10,
              }}>
              <TouchableOpacity style={styles.roundContainer}>
                <Text style={{fontSize: 17, textAlign: 'center'}}>+</Text>
              </TouchableOpacity>
              <Text style={{marginHorizontal: 15}}>1</Text>
              <TouchableOpacity style={styles.roundContainer}>
                <Text style={{fontSize: 17, textAlign: 'center'}}>-</Text>
              </TouchableOpacity>
              <Text style={{fontSize: 16, marginLeft: 20}}>Sauce on Side</Text>
            </View>
          </View>

          {/* Special Instructions */}
          <View style={styles.topContainer}>
            <Text
              style={[
                styles.sectionTitle,
                {paddingHorizontal: 16, paddingTop: 10},
              ]}>
              Special Instructions
            </Text>
            <Text style={{paddingHorizontal: 16, color: 'gray', fontSize: 16}}>
              We cannot accept price-altering changes here.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                paddingHorizontal: 16,
                paddingVertical: 10,
                marginTop: 10,
              }}>
              <TextInput
                placeholder="Enter special requests"
                multiline
                style={{
                  flex: 1,
                  fontSize: 16,
                  padding: 10,
                  //  backgroundColor: '#f4f4f4',
                  borderRadius: 8,
                  textAlignVertical: 'top',
                  minHeight: 50,
                }}
              />
            </View>
          </View>

          <View style={styles.topContainer}>
            <Text
              style={[
                styles.sectionTitle,
                {paddingHorizontal: 16, paddingTop: 10, marginBottom: 10},
              ]}>
              Quantity
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                paddingHorizontal: 16,
                paddingVertical: 25,
                justifyContent: 'center',
              }}>
              <TouchableOpacity style={styles.plusContainer}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>+</Text>
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <TouchableOpacity style={styles.plusContainer}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>-</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*  pay with Points */}
          <View style={{marginBottom: 50}}>
            <View style={styles.topContainer}>
              <Text
                style={[
                  styles.sectionTitle,
                  {paddingHorizontal: 16, paddingTop: 10, marginBottom: 10},
                ]}>
                pay with Points
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  paddingHorizontal: 16,
                  paddingVertical: 25,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={[styles.plusContainer, {width: '100%'}]}>
                  <Text
                    style={{
                      fontSize: 17,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Log in to pay with points
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Bar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.addToOrderButton}>
            <Text style={styles.addToOrderText}>Add to Order</Text>
            <Text style={styles.buttonPrice}>$13.98</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MenuDetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 270,
    resizeMode: 'cover',
  },
  closeIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 4,
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginVertical: 6,
  },
  likeText: {
    fontSize: 15,
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  customCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxTick: {
    width: 12,
    height: 12,
    backgroundColor: '#f44336',
    borderRadius: 2,
  },
  customRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioSelected: {
    width: 12,
    height: 12,
    backgroundColor: '#f44336',
    borderRadius: 6,
  },
  checkboxLabel: {
    fontSize: 15,
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 15,
    color: '#333',
  },
  bottomBar: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },
  addToOrderButton: {
    backgroundColor: '#f44336',
    paddingVertical: 14,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  addToOrderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonPrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  roundContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#CECECE',
  },
  plusContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CECECE',
  },
  topContainer: {
    marginTop: 20,
  },
});
