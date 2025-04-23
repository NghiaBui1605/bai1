import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('red');

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    return phoneRegex.test(phone);
  };

  const handleContinue = () => {
    if (phoneNumber.trim() === '') {
      setMessage('Vui lòng nhập số điện thoại!');
      setMessageColor('red');
    } else if (!validatePhoneNumber(phoneNumber)) {
      setMessage('Số điện thoại không hợp lệ!');
      setMessageColor('red');
    } else {
      setMessage(`Số điện thoại hợp lệ!`);
      setMessageColor('green');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subTitle}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro 
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        onChangeText={(text) => {
          setPhoneNumber(text);
          setMessage('');
        }}
        value={phoneNumber}
      />
      {message ? <Text style={[styles.messageText, { color: messageColor }]}>{message}</Text> : null}
      <TouchableOpacity style={styles.buttonInput} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 35,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
    borderBottomWidth: 2,
    paddingBottom: 15,
    borderBottomColor: 'gray',
  },
  subTitle: {
    marginTop: 50,
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    marginTop: 20,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    padding: 5,
  },
  messageText: {
    marginTop: 5,
    fontSize: 14,
  },
  buttonInput: {
    marginTop: 20,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
