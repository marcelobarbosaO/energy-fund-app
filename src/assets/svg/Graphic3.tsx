import Svg, { Path } from 'react-native-svg';

const Graphic1 = (props: any) => {
  return (
    <Svg
      width={36}
      height={42}
      viewBox="0 0 36 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 7.355c.88-3.55 3.34-9.408 6.154-4.438 2.813 4.97 8.205 26.925 10.55 37.28.585 1.184 2.285 1.953 4.395-4.438 2.11-6.39 3.223-7.988 3.516-7.988.587 0 1.934.177 2.638.887.703.71 2.637-3.846 3.516-6.213.293-1.775 1.231-5.503 2.638-6.213 1.758-.888 6.153-3.55 7.912-7.989 1.406-3.55 3.516 2.071 4.395 5.326.293 1.48 1.583 1.775 4.396-8.876.586-1.48 2.11-3.728 3.516-.888 1.759 3.55 3.517 8.876 6.154 7.989 2.11-.71 3.81-6.214 4.396-8.877.586-1.479 2.11-3.018 3.516 2.663C70.451 12.681 73.967 21.558 81 21.558"
        stroke={props.color || '#0FDF8F'}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Graphic1;
