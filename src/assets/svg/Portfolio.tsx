import Svg, { Path } from 'react-native-svg';

const Portfolio = (props: any) => {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.5 20c-5.523 0-10-4.477-10-10 0-4.478 2.943-8.268 7-9.542v2.124A8.003 8.003 0 0010.5 18a8.002 8.002 0 007.418-5h2.124c-1.274 4.057-5.064 7-9.542 7zm9.95-9H9.5V.05c.329-.033.663-.05 1-.05 5.523 0 10 4.477 10 10 0 .337-.017.671-.05 1zM11.5 2.062V9h6.938A8.004 8.004 0 0011.5 2.062z"
        fill={props.color || '#000'}
      />
    </Svg>
  );
};

export default Portfolio;
