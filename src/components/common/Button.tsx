import React from 'react';
import styled, { css } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import Text from './Text';
import { theme } from '../../constants/theme';

type ButtonVariant = 'primary' | 'secondary';

const Container = styled.TouchableOpacity<{
  variant: ButtonVariant;
  disabled?: boolean;
}>`
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0 16px;

  ${({ theme, variant }) =>
    variant === 'primary'
      ? css`
          background-color: ${theme.colors.primary};
        `
      : css`
          background-color: ${theme.colors.white};
          border: 1px solid ${theme.colors.gray3};
        `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;

interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

function Button({
  label,
  variant = 'primary',
  loading = false,
  disabled = false,
  onPress,
}: ButtonProps) {
  const textColor = variant === 'primary' ? theme.colors.white : theme.colors.black;

  return (
    <Container
      variant={variant}
      disabled={disabled || loading}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text weight="bold" color={textColor}>
          {label}
        </Text>
      )}
    </Container>
  );
}

export default Button; 