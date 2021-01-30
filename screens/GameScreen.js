import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
  return;
};

const styles = StyleSheet.create({});

export default GameScreen;
