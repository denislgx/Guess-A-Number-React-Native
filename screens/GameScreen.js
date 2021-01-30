import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (max - min)); // + min;
  return randomNumber !== exclude
    ? randomNumber
    : generateRandomBetween(min, max, exclude);
};

const GameScreen = ({ userNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 99, userNumber)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponet's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => {}} />
        <Button title="Greater" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
