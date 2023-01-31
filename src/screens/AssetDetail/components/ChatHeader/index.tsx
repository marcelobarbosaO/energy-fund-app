import { LineChart } from 'react-native-chart-kit';

import theme from '#theme';
import { Typography } from '#components';
import { DiagonalArrow, DiagonalArrowDown } from '#assets/svg';
import { ScreenWidth } from '#utils/native';

import * as S from '../../styles';

const ChartHeader = ({ item }: { item: Fund }) => (
  <>
    <S.Section>
      <S.Row justify="space-between">
        <S.Column>
          <Typography fontSize={24} bold>
            {item?.value}
          </Typography>

          <S.Row align="center">
            {item?.positive ? (
              <DiagonalArrow style={{ marginTop: 5, marginRight: 5 }} />
            ) : (
              <DiagonalArrowDown style={{ marginTop: 5, marginRight: 5 }} />
            )}

            <Typography
              fontSize={14}
              danger={!item.positive}
              secondary={item.positive}
            >
              {item.percent} ($1.21)
            </Typography>
          </S.Row>
        </S.Column>

        <Typography fontSize={24} bold>
          2022
        </Typography>
      </S.Row>
    </S.Section>

    <LineChart
      data={{
        labels: [],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={ScreenWidth} // from react-native
      height={153}
      chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) =>
          `${item.positive ? theme.colors.secondary : theme.colors.danger}`,
        style: {
          borderRadius: 16,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
      }}
    />
  </>
);

export default ChartHeader;
