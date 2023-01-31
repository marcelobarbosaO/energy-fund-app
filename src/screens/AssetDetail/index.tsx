import { Typography, Button, Header } from '#components';

import BreakDownList from './components/BreakDownList';
import InfoStats from './components/InfoStats';
import Portfolio from './components/Portfolio';
import ChartHeader from './components/ChatHeader';

import * as S from './styles';

const AssetDetail = ({ route: { params } }: AssetDetailProps) => {
  const item = params.item as Fund;

  return (
    <S.Container>
      <Header canBack title={item?.name} subTitle={item?.sigla} />

      <S.Scroll>
        <ChartHeader item={item} />

        <S.Content>
          <InfoStats />

          <BreakDownList item={item} />

          <Portfolio />

          <S.Info>
            <Typography fontSize={12} grey>
              Please note that prices are for reference only and may vary at the
              time of excecuting a buy or sell order. {'\n\n'}The information
              provided is not investment advice, and should not be used as a
              recommendation to buy or sell assets.
            </Typography>
          </S.Info>

          <Button mode="contained" style={{ marginBottom: 20 }}>
            Buy
          </Button>
        </S.Content>
      </S.Scroll>
    </S.Container>
  );
};

export default AssetDetail;
