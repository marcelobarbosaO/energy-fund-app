// declare interface PageProps {NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;
declare type AppStackNavigatorParamList = {
  tabs: undefined;
  splash: undefined;
  signin: undefined;
};

declare type PageProps = NativeStackScreenProps<RootStackParamList, 'splash'>;
