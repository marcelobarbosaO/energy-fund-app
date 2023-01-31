import styled, { css } from 'styled-components/native';
import { Text, TextProps } from 'react-native-paper';

export interface TypographyProps extends Omit<TextProps, 'theme'> {
  children: React.ReactNode;
  fontSize?: number;
  bold?: boolean;
  grey?: boolean;
  green?: boolean;
  centerAlign?: boolean;
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
  white?: boolean;
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

  ${({ primary, white, danger, theme, secondary }) => {
    if (primary)
      return css`
        color: ${theme.colors.primary};
      `;

    if (danger)
      return css`
        color: ${theme.colors.danger};
      `;

    if (white)
      return css`
        color: ${theme.colors.white};
      `;

    if (secondary)
      return css`
        color: ${theme.colors.secondary};
      `;
  }};
`;
