import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCropRotateBl(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M4 14v3a4 4 0 004 4h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.5 16.5L4 14l2.5 2.5M20 11V5a1 1 0 00-1-1h-6M8 4h2M20 16v-2M10 2v11a1 1 0 001 1h11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgCropRotateBl);
export default ForwardRef;
