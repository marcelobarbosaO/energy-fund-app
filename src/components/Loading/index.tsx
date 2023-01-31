import { ActivityIndicator, ActivityIndicatorProps } from 'react-native-paper';

import theme from '#theme';

interface LoadingProps extends ActivityIndicatorProps {}

const Loading = (props: LoadingProps) => (
  <ActivityIndicator animating={true} color={theme.colors.primary} {...props} />
);

export default Loading;
