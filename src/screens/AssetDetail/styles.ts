import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  justify-content: center;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const Section = styled.View`
  padding: 20px;
`;

export const Separator = styled.View`
  width: 20px;
`;

export const Info = styled.View`
  padding: 10px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background_light};
  margin: 20px 0;
`;

export const List = styled.FlatList`
  margin: 20px 0px;
`;

export const Box = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  height: 280px;
  width: 220px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  flex-direction: column;
  margin-right: 15px;
`;

export const ContentBox = styled.View`
  padding: 10px;
`;

export const ImageView = styled.Image`
  width: 220px;
  height: 106px;
`;

export const ButtonText = styled.TouchableOpacity<{ active: boolean }>`
  align-items: center;
  margin-right: 20px;
  height: 30px;

  border-bottom-width: 2px;
  border-bottom-color: ${({ active, theme }) =>
    active ? theme.colors.primary : 'transparent'};
`;

interface Flex {
  align?: string;
  justify?: string;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  isFlex?: boolean;
}

export const Row = styled.View<Flex>`
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  padding-left: ${({ pl }) => pl || 0}px;
  padding-right: ${({ pr }) => pr || 0}px;
  padding-top: ${({ pt }) => pt || 0}px;
  padding-bottom: ${({ pb }) => pb || 0}px;

  ${({ isFlex }) => {
    if (isFlex)
      return css`
        flex: 1;
      `;
  }}
`;

export const Column = styled.View<Flex>`
  flex-direction: column;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  padding-left: ${({ pl }) => pl || 0}px;
  padding-right: ${({ pr }) => pr || 0}px;
  padding-top: ${({ pt }) => pt || 0}px;
  padding-bottom: ${({ pb }) => pb || 0}px;

  ${({ isFlex }) => {
    if (isFlex)
      return css`
        flex: 1;
      `;
  }}
`;
