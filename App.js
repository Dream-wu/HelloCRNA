import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    clickMe() {
        console.log("调试");
    }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.clickMe}>Hello World!1234</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
