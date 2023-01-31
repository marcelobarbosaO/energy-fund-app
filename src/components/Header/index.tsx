import * as S from './styles';

const Header = ({ children }: { children?: any }) => (
  <S.Container>{children || null}</S.Container>
);

export default Header;
