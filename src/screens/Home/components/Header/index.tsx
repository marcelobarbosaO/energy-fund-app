import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import useUserStore from '#hooks/useStore';
import { Typography } from '#components';
import { User, Coin, DiagonalArrow } from '#assets/svg';

import * as S from './styles';

const Header = () => {
  const setLogged = useUserStore((state) => state.setLogged);
  const navigation = useNavigation();

  const handleLogOut = () => {
    setLogged(false);

    navigation.reset({
      index: 0,
      // @ts-ignore
      routes: [{ name: 'signin' }],
    });
  };

  return (
    <S.Container>
      <S.Content>
        <S.ButtonIcon onPress={() => navigation.goBack()} pr={15}>
          <User />
        </S.ButtonIcon>

        <S.Row>
          <Typography fontSize={14} bold>
            Account: $ 1,457.23
          </Typography>
          <MaterialIcons name="keyboard-arrow-down" color="#000" size={23} />
        </S.Row>

        <S.ButtonIcon onPress={handleLogOut} pl={15}>
          <AntDesign name="logout" color="#000" size={22} />
        </S.ButtonIcon>
      </S.Content>

      <S.Content>
        <S.Column>
          <Typography fontSize={12}>Portfolio</Typography>

          <S.Row align="flex-end">
            <Typography fontSize={24} bold>
              $1,245.23
            </Typography>

            <S.PercentView>
              <DiagonalArrow />
              <Typography
                fontSize={14}
                secondary
                style={{ marginBottom: -5, marginLeft: 5 }}
              >
                31.82%
              </Typography>
            </S.PercentView>
          </S.Row>
        </S.Column>

        <S.ButtonText>
          <Coin />
          <Typography fontSize={11} bold primary style={{ marginLeft: 5 }}>
            Earn Rewards
          </Typography>
        </S.ButtonText>
      </S.Content>
    </S.Container>
  );
};

export default Header;
