import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const ClosedModal = ({visible, onClose, onSchedule, text1, text2}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Image
            source={require('../assets/food-backgroun.png')}
            style={styles.modalImage}
            resizeMode="contain"
          />
          <Text style={styles.mainText}>{text1}</Text>
          <Text style={styles.subText}>{text2}</Text>
          <TouchableOpacity style={styles.scheduleBtn} onPress={onSchedule}>
            <Text style={styles.scheduleText}>Schedule Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  scheduleBtn: {
    backgroundColor: '#EF4444',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  scheduleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeBtn: {
    backgroundColor: '#F5F5F5',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  closeText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mainText: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: '600',
  },
  subText: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default ClosedModal;
