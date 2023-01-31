import styled, { css } from 'styled-components/native';
import { Text, TextProps } from 'react-native-paper';

export interface TypographyProps extends Omit<TextProps, 'theme'> {
  children: React.ReactNode;
  fontSize?: number;
  bold?: boolean;
  grey?: boolean;
  centerAlign?: boolean;
}

export const Typography = styled(Text)<TypographyProps>`
  font-family: ${({ bold }) => (bold ? 'Sora_600SemiBold' : 'Sora_400Regular')};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  align-self: ${({ centerAlign }) => (centerAlign ? 'center' : 'auto')};
  color: ${({ grey, theme }) =>
    grey ? theme.colors.labelSection : theme.colors.black};

  ${({ fontSize }) => {
    if (fontSize)
      return css`
        font-size: ${fontSize}px;
      `;
  }};
`;
