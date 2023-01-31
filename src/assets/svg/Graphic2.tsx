import Svg, { Path } from 'react-native-svg';

const Graphic1 = (props: any) => {
  return (
    <Svg
      width={82}
      height={42}
      viewBox="0 0 82 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1c2.029.754 7.652 8.143 13.913 31.667.29 1.257 1.74 3.016 5.217 0 .87-.502 2.957-.452 4.348 3.77.58 1.006 2.435 1.358 5.218-5.278.58-1.005 2.087-1.658 3.478 3.77 1.391 5.429 2.898 6.284 3.478 6.032.58 0 2.609-1.508 6.087-7.54.579-1.003 2.254-1.655 4.334 3.734m.014.036a5.408 5.408 0 01-.014-.036m0 0c.538 1.394 4.362 2.298 7.84-15.797.29-1.76 1.74-4.524 5.217-1.508.58.754 2.61 1.508 6.087-1.508 1.16-.754 3.826-.754 5.218 5.278.29 1.005 2.608 2.865 9.565 2.261"
        stroke={props.color || '#EE8688'}
        strokeWidth={2}
      />
    </Svg>
  );
};

export default Graphic1;
