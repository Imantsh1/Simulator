import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputBar = () => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = text => {
    setInputValue(text);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Type something..."
      onChangeText={handleInputChange}
      value={inputValue}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});

export default InputBar;
