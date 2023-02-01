import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Form = styled.View`
  margin-top: 34px;
`;

export const ButtonText = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
`;
