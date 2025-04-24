import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const LoginPage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          <TextInput
            keyboardType="numeric"
            placeholder="Mobile number"
            style={styles.input}
          />
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Send Login Code</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>
            Don't have an account? <Text style={styles.link}>Sign up</Text>
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
  },
  container: {
    padding: 20,
  },
  signUpButton: {
    backgroundColor: '#ef4444',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ef4444',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  loginText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ef4444',
  },
  link: {
    color: '#ef4444',
    fontWeight: '500',
  },
});

export default LoginPage;
