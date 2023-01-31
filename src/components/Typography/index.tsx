import * as S from './styles';

const Typography = ({ children, ...rest }: S.TypographyProps) => {
  return <S.Typography {...rest}>{children}</S.Typography>;
};

export default Typography;
