import React from 'react';

import useUserStore from '#hooks/useStore';

import { Loading } from '#components';

import * as S from './styles';

const SplashScreen = ({ navigation }: PageProps) => {
  const isLogged = useUserStore((state) => state.isLogged);

  React.useEffect(() => {
    console.log(isLogged);
    return navigation.navigate(isLogged ? 'tabs' : 'signin');
  }, [isLogged]);

  return (
    <S.Container>
      <Loading size="large" />
    </S.Container>
  );
};

export default SplashScreen;
