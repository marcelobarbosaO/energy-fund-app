// declare interface PageProps {NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;
declare type AppStackNavigatorParamList = {
  tabs: undefined;
  splash: undefined;
  signin: undefined;
  register: undefined;
  terms: undefined;
  privacity: undefined;
  assetDetail: {
    item: Fund;
  };
};

declare type PageProps = NativeStackScreenProps<RootStackParamList, 'splash'>;
declare type AssetDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'assetDetail'
>;
