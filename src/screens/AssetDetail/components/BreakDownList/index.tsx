import React from 'react';

import { Typography } from '#components';
import { DiagonalArrow, DiagonalArrowDown } from '#assets/svg';

import * as S from '../../styles';

const cards = [
  [
    { id: 1, company: 'aaa', title: 'asasasa', image: '' },
    { id: 2, company: 'aaa', title: 'asasasa', image: '' },
    { id: 3, company: 'aaa', title: 'asasasa', image: '' },
    { id: 4, company: 'aaa', title: 'asasasa', image: '' },
  ],

  [
    { id: 5, company: 'aaa', title: 'asasasa', image: '' },
    { id: 6, company: 'aaa', title: 'asasasa', image: '' },
    { id: 7, company: 'aaa', title: 'asasasa', image: '' },
    { id: 8, company: 'aaa', title: 'asasasa', image: '' },
  ],

  [
    { id: 9, company: 'aaa', title: 'asasasa', image: '' },
    { id: 10, company: 'aaa', title: 'asasasa', image: '' },
    { id: 11, company: 'aaa', title: 'asasasa', image: '' },
    { id: 12, company: 'aaa', title: 'asasasa', image: '' },
  ],

  [
    { id: 13, company: 'aaa', title: 'asasasa', image: '' },
    { id: 14, company: 'aaa', title: 'asasasa', image: '' },
    { id: 15, company: 'aaa', title: 'asasasa', image: '' },
    { id: 16, company: 'aaa', title: 'asasasa', image: '' },
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
  const renderItem = ({ item, index }) => {
    return (
      <S.Box>
        {/* {item.icon}
        <Typography fontSize={12} bold style={{ marginVertical: 10 }}>
          {item.name}
        </Typography> */}

        {/* {item.image} */}

        <S.Row justify="space-between" align="center">
          <Typography fontSize={14} style={{ marginTop: 7 }}>
            {item.id} - {item.company}
          </Typography>

          <S.Row align="center">
            <Typography
              fontSize={12}
              bold
              danger={!item.positive}
              secondary={item.positive}
            >
              {item.title}
            </Typography>
          </S.Row>
        </S.Row>
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
