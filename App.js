import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

const image = require('./assets/concert.png')

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {

  const ticketPrice = 99.99;
  const [numTicket, setTickets] = useState(0);
  const [text, setText] = useState(' ');
  const total = ticketPrice * numTicket

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ticket Vault</Text>
      <TextInput style={styles.input} onChangeText={newTicket => setTickets(newTicket)} 
        placeholder='Number of Tickets'>
      </TextInput>
      <Pressable style={styles.button} onPress={newText => setText(`Ticket Cost: ${total.toFixed(2)}`) }>
        <Text style={styles.buttonText}>Find the Cost</Text>
      </Pressable>
      <Text style={styles.output}>{text}</Text>
      <Image source={image} style={styles.image} />
      <StatusBar style="auto" />
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
  header: {
    fontWeight: 'bold',
    fontSize: 40,
    alignItems: 'center',
    paddingVertical: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: '#f98b88'
  },
  buttonText: {
    fontSize: 30
  },
  image: {
    alignItems: 'center',
    marginTop: 100,
  },
  input: {
    fontSize: 30,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  output: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
});