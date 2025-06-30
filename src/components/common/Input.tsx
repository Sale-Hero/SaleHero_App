import React from 'react';
import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';

const StyledInput = styled.TextInput`
  height: 52px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 8px;
  padding: 0 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

function Input(props: TextInputProps) {
  return <StyledInput {...props} />;
}

export default Input; 