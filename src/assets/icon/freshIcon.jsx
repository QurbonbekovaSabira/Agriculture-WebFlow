import React from "react";

export const FreshIcon = () => {
  return (
    <svg
      width={95}
      height={95}
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={95} height={95} rx={18} fill="#F9F8F8" />
      <circle cx="55.5" cy="39.5" r="14.5" fill="#FEF1C2" />
      <rect x={25} y={31} width={42} height={42} fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_2_14055" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2_14055"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
