import { Dimensions } from 'react-native';

import Header from './components/Header';

import { Typography } from '#components';
import {
  Wind,
  Sun,
  Nature,
  Statistic,
  DiagonalArrowDown,
  DiagonalArrow,
  Graphic1,
  Graphic2,
  Graphic3,
} from '#assets/svg';

import * as S from './styles';

const funds: Fund[] = [
  {
    id: 1,
    name: 'Wind Fund',
    value: '$1032.23',
    percent: '3.51',
    positive: true,
    icon: <Wind />,
    image: <Graphic1 />,
    sigla: 'WFND',
  },
  {
    id: 2,
    name: 'Solar Fund',
    value: '$986.61',
    percent: '0.13',
    positive: false,
    icon: <Sun />,
    image: <Graphic2 />,
    sigla: 'SFND',
  },
  {
    id: 3,
    name: 'Nature',
    value: '$1122.95',
    percent: '0.00',
    positive: true,
    icon: <Nature />,
    image: <Graphic3 />,
    sigla: 'NFND',
  },
];

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;

const Home = ({ navigation }: PageProps) => {
  const goToItem = (item: Fund) => navigation.navigate('assetDetail', { item });

  // @ts-ignore
  const renderItem = ({ item, index }) => {
    return (
      <S.Box onPress={() => goToItem(item)}>
        {item.icon}
        <Typography fontSize={12} bold style={{ marginVertical: 10 }}>
          {item.name}
        </Typography>

        {item.image}

        <S.Row justify="space-between" align="center">
          <Typography fontSize={14} style={{ marginTop: 7 }}>
            {item.value}
          </Typography>

          <S.Row align="center">
            {item.positive ? (
              <DiagonalArrow style={{ marginTop: 5, marginRight: 5 }} />
            ) : (
              <DiagonalArrowDown style={{ marginTop: 5, marginRight: 5 }} />
            )}

            <Typography
              fontSize={12}
              bold
              danger={!item.positive}
              secondary={item.positive}
            >
              {item.percent}
            </Typography>
          </S.Row>
        </S.Row>
      </S.Box>
    );
  };

  return (
    <S.Container>
      <Header />

      <S.SectionFunds>
        <Typography fontSize={18} bold>
          Funds
        </Typography>

        <S.List
          horizontal
          data={funds}
          showsHorizontalScrollIndicator={false}
          // @ts-ignore
          keyExtractor={(item: Fund) => item.id}
          renderItem={renderItem}
        />
      </S.SectionFunds>

      <S.Content>
        <S.StatisticContent>
          <S.Column>
            <Typography fontSize={16} bold white>
              Learn more about {'\n'}carbon credits
            </Typography>

            <Typography fontSize={11} white style={{ marginTop: 10 }}>
              Check out our top tips!
            </Typography>
          </S.Column>

          <Statistic />
        </S.StatisticContent>
      </S.Content>
    </S.Container>
  );
};

export default Home;
