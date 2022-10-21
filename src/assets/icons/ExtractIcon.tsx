import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from '../../@types/IconType';

const ExtractIcon: React.FC<IconType> = ({color}) => {
  return (
    <Svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.20003 2.33337L16.0236 2.33337C16.6736 2.33337 17.2941 2.60449 17.7357 3.08142L22.9121 8.67194C23.3115 9.10325 23.5334 9.66941 23.5334 10.2572V23.3334C23.5334 24.622 22.4887 25.6667 21.2 25.6667H7.20003C5.91137 25.6667 4.8667 24.622 4.8667 23.3334L4.8667 4.66671C4.8667 3.37804 5.91137 2.33337 7.20003 2.33337ZM16.0236 4.66671L7.20003 4.66671L7.20003 23.3334H21.2L21.2 10.2572L16.0236 4.66671Z"
        fill={color ?? "#A5A5AA"}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.5332 19.8333C9.5332 19.189 10.0555 18.6666 10.6999 18.6666H17.6999C18.3442 18.6666 18.8665 19.189 18.8665 19.8333C18.8665 20.4776 18.3442 21 17.6999 21H10.6999C10.0555 21 9.5332 20.4776 9.5332 19.8333Z"
        fill={color ?? "#A5A5AA"}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.5332 16.3333C9.5332 15.689 10.0555 15.1666 10.6999 15.1666H17.6999C18.3442 15.1666 18.8665 15.689 18.8665 16.3333C18.8665 16.9776 18.3442 17.5 17.6999 17.5H10.6999C10.0555 17.5 9.5332 16.9776 9.5332 16.3333Z"
        fill={color ?? "#A5A5AA"}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.3666 2.33337C16.0109 2.33337 16.5333 2.85571 16.5333 3.50004L16.5333 9.33337L22.3666 9.33337C23.011 9.33337 23.5333 9.85571 23.5333 10.5C23.5333 11.1444 23.011 11.6667 22.3666 11.6667H16.5333C15.2446 11.6667 14.2 10.622 14.2 9.33337L14.2 3.50004C14.2 2.85571 14.7223 2.33337 15.3666 2.33337Z"
        fill={color ?? "#A5A5AA"}
      />
    </Svg>
  );
};

export default ExtractIcon;
