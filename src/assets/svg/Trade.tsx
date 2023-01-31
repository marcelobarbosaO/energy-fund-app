import Svg, { Path } from 'react-native-svg';

const Trade = (props: any) => {
  return (
    <Svg
      width={19}
      height={20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.55 10l4.95 4.95-4.95 4.95-1.414-1.414 2.536-2.537L1.5 15.95v-2h13.172l-2.536-2.536L13.55 10zM5.45 0l1.414 1.414L4.328 3.95H17.5v2H4.328l2.536 2.536L5.45 9.9.5 4.95 5.45 0z"
        fill={props.color || '#000'}
      />
    </Svg>
  );
};

export default Trade;
