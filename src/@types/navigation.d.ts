// declare interface PageProps {NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;
declare type AppStackNavigatorParamList = {
  tabs: undefined;
  splash: undefined;
  signin: undefined;
  register: undefined;
  assetDetail: {
    item: {
      id: number;
      name: string;
      value: string;
      percent: string;
      positive: boolean;
      icon: React.ReactNode;
      image: React.ReactNode;
    };
  };
};

declare type PageProps = NativeStackScreenProps<RootStackParamList, 'splash'>;
declare type AssetDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'assetDetail'
>;
