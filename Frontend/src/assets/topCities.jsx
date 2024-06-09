import React from "react";

const TopCities = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g opacity="0.674208">
        <rect
          width="24"
          height="23.75"
          transform="translate(0.880127)"
          fill="url(#pattern0_6001_160)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0_6001_160"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_6001_160"
            transform="scale(0.0103093 0.0104167)"
          />
        </pattern>
        <image
          id="image0_6001_160"
          width="97"
          height="96"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default TopCities;
