import { StyleSheet, Text, View } from 'react-native';

import * as ExpoApplePay from 'expo-apple-pay';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoApplePay.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
