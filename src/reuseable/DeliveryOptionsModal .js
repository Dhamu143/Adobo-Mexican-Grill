import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from 'react-native';

const DeliveryOptionsModal = ({visible, onClose}) => {
  const [activeTab, setActiveTab] = useState('Pickup');

  const renderPickupContent = () => (
    <View style={styles.section}>
      <View style={styles.item}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/location.png')}
              style={styles.icon}
            />
            <View>
              <Text style={styles.title}>Location</Text>
              <Text style={styles.subtitle}>
                Adobo Mexican Grill - Selden, 89 College Plaza, Selden
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.icon}
              source={require('../assets/rightArrow.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.item}>
        {/* <Image source={require('../assets/clock.png')} style={styles.icon} /> */}
        <View>
          <Text style={styles.title}>Date & Time</Text>
          <Text style={styles.subtitle}>ASAP</Text>
        </View>
      </View>
    </View>
  );

  const renderDeliveryContent = () => (
    <View style={styles.section}>
      <View style={styles.item}>
        {/* <Image source={require('../assets/home.png')} style={styles.icon} /> */}
        <View>
          <Text style={styles.title}>Delivery Address</Text>
          <Text style={styles.subtitle}>
            Provide address to confirm delivery availability
          </Text>
        </View>
      </View>
      {renderPickupContent()}
    </View>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.tabBar}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'Pickup' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('Pickup')}>
              {/* <Image
                source={require('../assets/pickup.png')}
                style={styles.tabIcon}
              /> */}
              <Text style={styles.tabLabel}>Pickup</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'Delivery' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('Delivery')}>
              {/* <Image
                source={require('../assets/delivery.png')}
                style={styles.tabIcon}
              /> */}
              <Text style={styles.tabLabel}>Delivery</Text>
            </TouchableOpacity>
          </View>
          {activeTab === 'Pickup'
            ? renderPickupContent()
            : renderDeliveryContent()}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#f0f0f0',
  },
  tabIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  tabLabel: {
    fontWeight: '600',
  },
  section: {
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 12,
    resizeMode: 'contain',
    marginTop: 4,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
  },
});

export default DeliveryOptionsModal;
