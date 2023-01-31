import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Typography from '../Typography';

import * as S from './styles';

interface HeaderProps {
  canBack?: boolean;
  title?: string;
  subTitle?: string;
}

const Header = ({ canBack, subTitle, title }: HeaderProps) => {
  if (!canBack && !title) return <S.Container />;

  const navigation = useNavigation();

  return (
    <S.Container>
      {canBack ? (
        <S.ButtonIcon onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" color="#000" size={30} />
        </S.ButtonIcon>
      ) : null}
      <S.CenterContent>
        {title ? (
          <Typography fontSize={17} bold>
            {title}
          </Typography>
        ) : null}
        {subTitle ? (
          <Typography fontSize={14} grey>
            {subTitle}
          </Typography>
        ) : null}
      </S.CenterContent>
    </S.Container>
  );
};

export default Header;
