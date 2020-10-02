import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  showAlert = () => {
    Alert.alert(
      'Midterm Examinatio',
      'CoE',
      [
        {text: 'Warodom  React Native', onPress: () => console.log('React Native')},
        {text: 'Kullawat Hardware IoT', onPress: () => console.log('Hardware IoT'), style: 'cancel'},
        {text: 'Thitinun Image processing', onPress: () => console.log('Image processing')},
      ],
      { cancelable: false }
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to CoC</Text>
        <Button
          onPress={this.showAlert}
          title="sec2"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
