import React from 'react';
import styled, { useTheme } from 'styled-components';
import { GlobalSpinner } from './GlobalSpinner';

interface LoadingProps {
  size?: string;
  color?: string;
}

export const Loading: React.FC<LoadingProps> = ({ size, color }) => {
  const theme = useTheme();
  console.log(theme);
  const spinnerColor = color || theme.colors.main.spinnerBase;

  return (
    <SpinnerContainer>
      <GlobalSpinner size={size} color={spinnerColor} />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
