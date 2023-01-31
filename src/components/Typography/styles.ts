import styled from 'styled-components/native';
import { Text, TextProps } from 'react-native-paper';

export interface TypographyProps extends Omit<TextProps, 'theme'> {
  children: React.ReactNode;
  fontSize?: number;
  bold?: boolean;
}

export const Typography = styled(Text)<TypographyProps>`
  font-family: ${({ bold }) => (bold ? 'Sora_600SemiBold' : 'Sora_400Regular')};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  font-size: ${({ fontSize }) => fontSize || 14}px;
`;
