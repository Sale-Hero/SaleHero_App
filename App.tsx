import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/constants/theme';
import RootNavigator from './src/navigations/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
