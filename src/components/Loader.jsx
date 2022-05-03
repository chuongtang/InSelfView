import * as React from "react";

const Loader = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="ezCrXJn2kcG1"
      viewBox="100 100 500 500"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      {...props}
    >
      <style>
        {
          "@keyframes ezCrXJn2kcG4_tr__tr{0%{transform:translate(254.598862px,252.120583px) rotate(0deg)}}@keyframes ezCrXJn2kcG5_tr__tr{0%{transform:translate(250.89922px,253.658642px) rotate(0deg);animation-timing-function:cubic-bezier(.85,.2,.235,.835)}33.333333%{transform:translate(250.89922px,253.658642px) rotate(360deg);animation-timing-function:cubic-bezier(.85,.2,.235,.835)}66.666667%{transform:translate(250.89922px,253.658642px) rotate(720deg);animation-timing-function:cubic-bezier(.85,.2,.235,.835)}}@keyframes ezCrXJn2kcG7_s_p{0%,13.333333%,33.333333%,46.666667%,66.666667%,80%{stroke:#40a2f5}16.666667%,50%,83.333333%{stroke:#17daff;animation-timing-function:cubic-bezier(.55,.085,.94,.415)}}@keyframes ezCrXJn2kcG11-fill-0__c{0%,13.333333%,33.333333%,46.666667%,66.666667%,80%{stop-color:#40a2f5}16.666667%,50%,83.333333%{stop-color:#17daff;animation-timing-function:cubic-bezier(.55,.085,.94,.415)}}@keyframes ezCrXJn2kcG11-fill-1__c{0%,13.333333%,33.333333%,46.666667%,66.666667%,80%{stop-color:#40a2f5}16.666667%,50%,83.333333%{stop-color:#40a2f5;animation-timing-function:cubic-bezier(.55,.085,.94,.415)}}"
        }
      </style>
      <defs>
        <linearGradient
          id="ezCrXJn2kcG9-fill"
          x1={0.775}
          y1={0.072}
          x2={0.221}
          y2={0.548}
          spreadMethod="pad"
          gradientUnits="objectBoundingBox"
        >
          <stop id="ezCrXJn2kcG9-fill-0" offset="0%" stopColor="#000" />
          <stop id="ezCrXJn2kcG9-fill-1" offset="100%" stopColor="#FFF" />
        </linearGradient>
        <linearGradient
          id="ezCrXJn2kcG11-fill"
          x1={0.463}
          y1={0.884}
          x2={0.491}
          y2={0.017}
          spreadMethod="pad"
          gradientUnits="objectBoundingBox"
        >
          <stop
            offset="0%"
            stopColor="#40A2F5"
            style={{
              animation:
                "ezCrXJn2kcG11-fill-0__c 6000ms linear infinite normal forwards",
            }}
          />
          <stop
            offset="100%"
            stopColor="#40A2F5"
            style={{
              animation:
                "ezCrXJn2kcG11-fill-1__c 6000ms linear infinite normal forwards",
            }}
          />
        </linearGradient>
      </defs>
      <g
        transform="translate(254.599 252.12)"
        style={{
          animation:
            "ezCrXJn2kcG4_tr__tr 6000ms linear infinite normal forwards",
        }}
      >
        <g
          transform="translate(6.923)"
          style={{
            animation:
              "ezCrXJn2kcG5_tr__tr 6000ms linear infinite normal forwards",
          }}
          id="ezCrXJn2kcG4"
        >
          <g id="ezCrXJn2kcG5" transform="translate(-250.9 -253.659)">
            <g id="ezCrXJn2kcG6" mask="url(#ezCrXJn2kcG8)">
              <path
                d="M-176.502 0c0-97.48 79.023-176.502 176.502-176.502C97.48-176.502 176.502-97.48 176.502 0S97.48 176.502 0 176.502-176.502 97.48-176.502 0Z"
                transform="rotate(14.745 -854.62 1097.702) scale(.5931)"
                fill="none"
                stroke="#40A2F5"
                strokeWidth={50}
                strokeLinecap="round"
                strokeDasharray="0,80"
                style={{
                  animation:
                    "ezCrXJn2kcG7_s_p 6000ms linear infinite normal forwards",
                }}
              />
              <mask id="ezCrXJn2kcG8" mask-type="luminance">
                <path
                  id="ezCrXJn2kcG9"
                  d="m131.08 246.526 42.09 2.004 176.376-84.847q43.426 42.09 42.758 92.864c-.669 50.775-52.78 138.295-152.325 129.61-99.546-8.685-128.942-94.2-108.9-139.631Z"
                  fill="url(#ezCrXJn2kcG9-fill)"
                  stroke="none"
                  strokeWidth={1}
                />
              </mask>
            </g>
            <g
              id="ezCrXJn2kcG10"
              transform="rotate(16.827 -324.368 480.386) scale(.99606)"
            >
              <path
                id="ezCrXJn2kcG11"
                fill="url(#ezCrXJn2kcG11-fill)"
                stroke="none"
                strokeWidth={1}
                d="m111 115-41.087-6.198L59 104l-10.98 4.868L8 115 59 5l52 110z"
              />
              <path
                id="ezCrXJn2kcG12"
                style={{
                  mixBlendMode: "soft-light",
                }}
                opacity={0.6}
                fill="#000"
                stroke="none"
                strokeWidth={1}
                d="M59 104V5L47.988 108.802 59 104z"
              />
              <path
                id="ezCrXJn2kcG13"
                style={{
                  mixBlendMode: "soft-light",
                }}
                opacity={0.6}
                fill="#DEEDFF"
                stroke="none"
                strokeWidth={1}
                d="M59 104V5l10.946 103.802L59 104z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Loader;
