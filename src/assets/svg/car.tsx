import * as React from "react";
import { SVGProps } from "react";
const CarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2121_9144)">
      <path
        d="M7 19.5C8.10457 19.5 9 18.6046 9 17.5C9 16.3954 8.10457 15.5 7 15.5C5.89543 15.5 5 16.3954 5 17.5C5 18.6046 5.89543 19.5 7 19.5Z"
        stroke={props?.stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 19.5C18.1046 19.5 19 18.6046 19 17.5C19 16.3954 18.1046 15.5 17 15.5C15.8954 15.5 15 16.3954 15 17.5C15 18.6046 15.8954 19.5 17 19.5Z"
        stroke={props?.stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 17.5H3V13.5M2 5.5H13V17.5M9 17.5H15M19 17.5H21V11.5H13M13 6.5H18L21 11.5"
        stroke={props?.stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9.5H7"
        stroke={props?.stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2121_9144">
        <rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default CarIcon;

