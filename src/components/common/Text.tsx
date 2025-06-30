import React from 'react';
import styled from 'styled-components/native';
import { ColorValue } from 'react-native';

const StyledText = styled.Text<{
  size: number;
  weight: 'normal' | 'bold';
  color: string;
}>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;

interface TextProps {
  children: React.ReactNode;
  size?: number;
  weight?: 'normal' | 'bold';
  color?: ColorValue;
}

function Text({
  children,
  size = 16,
  weight = 'normal',
  color = '#212529',
}: TextProps) {
  return (
    <StyledText size={size} weight={weight} color={String(color)}>
      {children}
    </StyledText>
  );
}

export default Text; 