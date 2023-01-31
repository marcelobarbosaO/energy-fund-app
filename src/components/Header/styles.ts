import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 95px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-bottom-width: 1px;
  border-bottom-color: #f4f4f4;
`;
