import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RandomNumberApp = () => {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [randomNumber, setRandomNumber] = useState('');

  const generateRandomNumber = () => {
    const min = parseInt(minValue);
    const max = parseInt(maxValue);

    if (isNaN(min) || isNaN(max) || min >= max) {
      setRandomNumber('Entrada inválida. Por favor, insira números válidos.');
    } else {
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(`Número aleatório: ${random}`);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Digite o valor mínimo"
        onChangeText={text => setMinValue(text)}
        value={minValue}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite o valor máximo"
        onChangeText={text => setMaxValue(text)}
        value={maxValue}
        keyboardType="numeric"
      />
      <Button title="Gerar Número Aleatório" onPress={generateRandomNumber} />
      <Text style={{ marginTop: 20 }}>{randomNumber}</Text>
    </View>
  );
};

export default RandomNumberApp;