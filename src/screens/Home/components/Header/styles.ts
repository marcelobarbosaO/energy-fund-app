import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 100px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-bottom-width: 1px;
  border-bottom-color: #f4f4f4;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  padding: 20px 20px 30px 20px;
`;
export const Content = styled.View`
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 25px;
`;

interface Flex {
  align?: string;
  justify?: string;
}

export const Column = styled.View<Flex>`
  flex-direction: column;
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
`;

export const Row = styled.View<Flex>`
  flex-direction: row;
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
`;

export const PercentView = styled.View`
  padding-bottom: 10px;
  margin-left: 5px;
  flex-direction: row;
  align-items: flex-end;
`;

export const ButtonIcon = styled.TouchableOpacity<{ pl?: number; pr?: number }>`
  position: relative;
  padding-left: ${({ pl }) => pl || 0}px;
  padding-right: ${({ pr }) => pr || 0}px;
  z-index: 1;
`;

export const ButtonText = styled.TouchableOpacity`
  position: relative;
  background: #f7efff;
  border-radius: 4px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
`;
