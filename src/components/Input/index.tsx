import { useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import theme from '@theme/theme';

import { Container, TextInput } from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
}

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <Container>
      <Octicons name="person" color={theme.colors.red[500]} size={25} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray[500]}
        autoCapitalize="none"
        autoCorrect={false}
        {...rest}
      />
    </Container>
  );
}
