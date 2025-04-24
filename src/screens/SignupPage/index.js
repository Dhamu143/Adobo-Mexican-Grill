import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const SignupPage = () => {
  const [emailChecked, setEmailChecked] = useState(true);
  const [textChecked, setTextChecked] = useState(false);

  const renderCheckbox = (checked, onPress) => (
    <TouchableOpacity onPress={onPress} style={styles.checkbox}>
      {checked && <View style={styles.checkboxTick} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.benefitCard}>
            <Text style={styles.benefitText}>
              {' '}
              Earn points with every order
            </Text>
          </View>

          <View style={styles.benefitCard}>
            <Text style={styles.benefitText}> Redeem points for free food</Text>
          </View>

          <View style={styles.benefitCard}>
            <Text style={styles.benefitText}> Receive exclusive discounts</Text>
          </View>

          <View style={styles.inputRow}>
            <TextInput placeholder="First name" style={styles.inputHalf} />
            <TextInput placeholder="Last name" style={styles.inputHalf} />
          </View>

          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Mobile number" style={styles.input} />

          <View style={{marginVertical: 10}}>
            <View style={styles.checkboxRow}>
              {renderCheckbox(emailChecked, () =>
                setEmailChecked(!emailChecked),
              )}
              <Text style={styles.checkboxText}>
                Send me emails with exclusive offers and news
              </Text>
            </View>

            <View style={styles.checkboxRow}>
              {renderCheckbox(textChecked, () => setTextChecked(!textChecked))}
              <Text style={styles.checkboxText}>
                Send me texts with exclusive offers and news
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.consentText}>
            By signing up, you agree to receive email and SMS marketing
            communications from Adobo Mexican Grill and our technology partner
            <Text style={styles.link}> Owner.com </Text>
            and consent to our
            <Text style={styles.link}> Platform Terms </Text>
            and
            <Text style={styles.link}> Privacy Policy</Text>.
          </Text>

          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.link}>Log in</Text>
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    padding: 20,
    //backgroundColor: '#fff',
  },
  benefitCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  benefitText: {
    fontSize: 16,
    marginLeft: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  inputHalf: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    width: '48%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxTick: {
    width: 15,
    height: 15,
    backgroundColor: '#ef4444',
    borderRadius: 2,
  },
  checkboxText: {
    fontSize: 13,
    flex: 1,
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
  consentText: {
    fontSize: 13,
    color: '#888',
    marginTop: 15,
  },
  loginText: {
    // textAlign: 'center',
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

export default SignupPage;
