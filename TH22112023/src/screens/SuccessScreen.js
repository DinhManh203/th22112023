import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image
          source={require('../img/tron.png')}
          style={styles.image1}
        />
        <Image
          source={require('../img/phone.png')}
          style={styles.image2}
        />
      </View>
      <View style={styles.textCenter}>
        <Text style={styles.firstTitle}>Payment Success, Yayy!</Text>
        <View style={styles.secondTitle}>
          <Text>We will send order details and invoice in</Text>
          <Text style={styles.setext}>your contact no and registered email</Text>
        </View>
      </View>
      <View style={styles.checkDetail}>
  <TouchableOpacity style={styles.checkDetailContainer}>
    <Text style={styles.checkText}>Check details</Text>
    <View style={styles.iconContainer}>
      <Image
        source={require('../img/ArrowRight.png')}
        style={styles.imageIcon}
      />
    </View>
  </TouchableOpacity>
</View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('')} 
        >
          <Text style={styles.btnDow}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  firstTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  secondTitle: {
    color: '#7a7a7a',
    marginTop: 10,
  },
  setext: {
    marginLeft: 10,
  },
  image1: {
    resizeMode: 'cover',
    position: 'absolute',
  },
  image2: {
    resizeMode: 'cover',
  },
  imageCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  checkDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: 10, 
  },
  checkText: {
    fontSize: 18,
    color: '#0989ff',
  },
  checkDetail: {
    marginTop: 60,
  },
  getStartedButton: {
    backgroundColor: '#5A6CF3',
    padding: 20,
    borderRadius: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    padding: 50,
  },
  btnDow: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SuccessScreen;
