import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Main from './src/components/Main';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;