import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function InputField({
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  value,
  onChange,
}: {
  placeholder: string;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'url'
    | 'ascii-capable'
    | 'twitter'
    | 'web-search';
  secureTextEntry?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  input: {
    padding: 10,
  },
});

export default InputField;
