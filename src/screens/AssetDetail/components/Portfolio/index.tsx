import theme from '#theme';
import { Typography, Button } from '#components';
import { DiagonalArrow, Portfolio as PorfolioIcon } from '#assets/svg';

import * as S from '../../styles';

const Portfolio = () => (
  <>
    <S.Row align="center" pt={50}>
      <PorfolioIcon style={{ marginRight: 10 }} />

      <Typography fontSize={17} bold>
        Your Portfolio
      </Typography>
    </S.Row>

    <S.Row align="center" justify="space-between" pt={10}>
      <Typography fontSize={24} bold>
        18 credits
      </Typography>

      <Typography fontSize={24} bold>
        $328.14
      </Typography>
    </S.Row>

    <S.Row align="center" justify="space-between" pb={20}>
      <S.Row align="center">
        <DiagonalArrow style={{ marginRight: 5, marginTop: 4 }} />

        <Typography fontSize={14} secondary>
          8.41%
        </Typography>
      </S.Row>

      <Typography fontSize={14} grey>
        Last purchase 28d ago
      </Typography>
    </S.Row>

    <S.Column pb={20}>
      <S.Row pb={10}>
        <Button style={{ flex: 1 }} mode="outlined">
          Sell
        </Button>

        <S.Separator />

        <Button
          buttonColor={theme.colors.secondary}
          style={{ flex: 1 }}
          mode="contained"
        >
          Retire Credits
        </Button>
      </S.Row>

      <Typography fontSize={11} grey>
        You’ve previously retired 28 credits of this asset
      </Typography>
    </S.Column>
  </>
);

export default Portfolio;
