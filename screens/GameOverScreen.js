import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = ({ guessRounds, userNumber, newGameHandler }) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Text>Numbers of rounds: {guessRounds}</Text>
      <Text>The number was: {userNumber}</Text>
      <Button onPress={newGameHandler} title="Play again!" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
