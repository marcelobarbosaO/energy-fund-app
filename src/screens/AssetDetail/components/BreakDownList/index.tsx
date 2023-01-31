import React from 'react';

import { Typography } from '#components';

import * as S from '../../styles';

const cards = [
  [
    {
      id: 1,
      company: 'AspiraDac',
      title:
        'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 2,
      company: 'climeworks',
      title:
        'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 3,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 4,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
  ],

  [
    {
      id: 5,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 6,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 7,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 8,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
  ],

  [
    {
      id: 9,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 10,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 11,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 12,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
  ],

  [
    {
      id: 13,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 14,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 15,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
    {
      id: 16,
      company: 'aaa',
      title: 'asasasa',
      image: 'https://picsum.photos/220/106',
    },
  ],
];

const BREAKDOWNS = {
  HIGHLIGHTED: 0,
  VALUE: 1,
  VINTAGE: 2,
  REGISTRY: 3,
};

const BreakDownList = ({ item }: { item: Fund }) => {
  const [activeBreakDown, setActiveBreakDown] = React.useState<number>(
    BREAKDOWNS.HIGHLIGHTED
  );

  // @ts-ignore
  const renderItem = ({ item }) => {
    return (
      <S.Box>
        <S.ImageView
          source={{ uri: `${item.image}?random=${item.id}` }}
          resizeMode="cover"
        />

        <S.ContentBox>
          <S.Column>
            <Typography fontSize={14} style={{ marginVertical: 7 }}>
              {item.company}
            </Typography>

            <S.Row align="center" pb={12}>
              <Typography fontSize={12}>{item.title}</Typography>
            </S.Row>

            <Typography fontSize={12}>Read more</Typography>
          </S.Column>
        </S.ContentBox>
      </S.Box>
    );
  };

  return (
    <S.Column pt={40}>
      <Typography fontSize={17} bold>
        Fund Breakdown
      </Typography>

      <S.Row pt={20}>
        <S.ButtonText
          onPress={() => setActiveBreakDown(BREAKDOWNS.HIGHLIGHTED)}
          active={activeBreakDown === BREAKDOWNS.HIGHLIGHTED}
        >
          <Typography
            fontSize={14}
            grey={activeBreakDown !== BREAKDOWNS.HIGHLIGHTED}
          >
            Highlighted
          </Typography>
        </S.ButtonText>

        <S.ButtonText
          onPress={() => setActiveBreakDown(BREAKDOWNS.VALUE)}
          active={activeBreakDown === BREAKDOWNS.VALUE}
        >
          <Typography fontSize={14} grey={activeBreakDown !== BREAKDOWNS.VALUE}>
            Value
          </Typography>
        </S.ButtonText>

        <S.ButtonText
          onPress={() => setActiveBreakDown(BREAKDOWNS.VINTAGE)}
          active={activeBreakDown === BREAKDOWNS.VINTAGE}
        >
          <Typography
            fontSize={14}
            grey={activeBreakDown !== BREAKDOWNS.VINTAGE}
          >
            Vintage
          </Typography>
        </S.ButtonText>

        <S.ButtonText
          onPress={() => setActiveBreakDown(BREAKDOWNS.REGISTRY)}
          active={activeBreakDown === BREAKDOWNS.REGISTRY}
        >
          <Typography
            fontSize={14}
            grey={activeBreakDown !== BREAKDOWNS.REGISTRY}
          >
            Registry
          </Typography>
        </S.ButtonText>
      </S.Row>

      <S.List
        horizontal
        data={cards[activeBreakDown]}
        showsHorizontalScrollIndicator={false}
        // @ts-ignore
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </S.Column>
  );
};

export default BreakDownList;
