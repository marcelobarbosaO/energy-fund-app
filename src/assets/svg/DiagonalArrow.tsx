import Svg, { Path } from 'react-native-svg';

const DiagonalArrow = (props: any) => {
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
        d="M8.727.252H2.894V1.49h3.77L.861 7.293l.825.825 5.803-5.803v3.77h1.238V.252z"
        fill={props.color || '#0FDF8F'}
      />
    </Svg>
  );
};

export default DiagonalArrow;
