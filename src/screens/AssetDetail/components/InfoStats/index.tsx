import { Typography } from '#components';

import * as S from '../../styles';

const InfoStats = () => (
  <>
    <Typography fontSize={17} bold>
      Info & Stats
    </Typography>

    <S.Row pt={20}>
      <S.Column isFlex>
        <S.Column style={{ marginBottom: 18 }}>
          <Typography fontSize={14} grey>
            AUM
          </Typography>

          <Typography fontSize={14}>$430.88m</Typography>
        </S.Column>

        <S.Column style={{ marginBottom: 18 }}>
          <Typography fontSize={14} grey>
            Vintage Range
          </Typography>

          <Typography fontSize={14}>2019 – 2022</Typography>
        </S.Column>

        <S.Column style={{ marginBottom: 18 }}>
          <Typography fontSize={14} grey>
            Price at Close
          </Typography>

          <Typography fontSize={14}>$17.68</Typography>
        </S.Column>
      </S.Column>

      <S.Column isFlex>
        <S.Column style={{ marginBottom: 18 }}>
          <Typography fontSize={14} grey>
            AUM
          </Typography>

          <Typography fontSize={14}>$430.88m</Typography>
        </S.Column>

        <S.Column style={{ marginBottom: 18 }}>
          <Typography fontSize={14} grey>
            TER
          </Typography>

          <Typography fontSize={14}>0.15%</Typography>
        </S.Column>

        <S.Column style={{ marginBottom: 18 }}>
          <Typography fontSize={14} grey>
            Price at Open
          </Typography>

          <Typography fontSize={14}>$17.74</Typography>
        </S.Column>
      </S.Column>
    </S.Row>
  </>
);

export default InfoStats;
