import { StyleSheet, Text, View } from 'react-native';

import * as Timeandroidactions from 'timeandroidactions';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Timeandroidactions.hello()}</Text>
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
