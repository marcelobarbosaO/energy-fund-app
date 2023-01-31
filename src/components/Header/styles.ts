import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 95px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-bottom-width: 1px;
  border-bottom-color: #f4f4f4;
  align-items: flex-end;
  flex-direction: row;
  padding: 20px;
`;

export const CenterContent = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 5px;
  left: 20px;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

export const ButtonIcon = styled.TouchableOpacity`
  position: relative;
  z-index: 1;
`;
