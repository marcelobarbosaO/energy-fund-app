import styled from 'styled-components/native';
import { Button as BTN, ButtonProps } from 'react-native-paper';

export interface ButtonAppProps extends Omit<ButtonProps, 'theme'> {
  mt?: number;
  mb?: number;
}

export const Button = styled(BTN)<ButtonAppProps>`
  border-radius: 4px;
  padding: 10px 0;

  margin-bottom: ${({ mb }) => mb || 0}px;
  margin-top: ${({ mt }) => mt || 0}px;
`;
