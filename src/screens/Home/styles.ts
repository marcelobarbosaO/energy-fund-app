import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const SectionFunds = styled.View`
  padding-left: 20px;
  padding-top: 20px;
`;

export const Box = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  height: 145px;
  width: 150px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  flex-direction: column;
  margin-right: 25px;
`;

export const ButtonText = styled.TouchableOpacity`
  align-items: center;
`;

export const List = styled.FlatList`
  margin: 20px 0px;
`;

interface Flex {
  align?: string;
  justify?: string;
}

export const Row = styled.View<Flex>`
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
`;

export const Column = styled.View<Flex>`
  flex-direction: column;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
`;

export const StatisticContent = styled.View`
  flex-direction: row;
  background: ${({ theme }) => theme.colors.primary};
  padding: 13px 20px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
`;
