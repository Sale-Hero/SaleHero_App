import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Main(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SaleHero App</Text>
      <Text style={styles.subtitle}>테스트</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default Main;