import Svg, { Path } from 'react-native-svg';

const DiagonalArrowDown = (props: any) => {
  return (
    <Svg
      width={9}
      height={9}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.727 8.706V2.873H7.489v3.77L1.686.84l-.825.825 5.804 5.803h-3.77v1.238h5.832z"
        fill={props.color || '#EE8688'}
      />
    </Svg>
  );
};

export default DiagonalArrowDown;
