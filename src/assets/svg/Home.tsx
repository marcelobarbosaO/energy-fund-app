import Svg, { Path } from 'react-native-svg';

const Home = (props: any) => {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.5 17.733a1 1 0 01-1 1h-16a1 1 0 01-1-1V7.223a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79v10.51zm-10-7v6h2v-6h-2z"
        fill={props.color || '#770FDF'}
      />
    </Svg>
  );
};

export default Home;
