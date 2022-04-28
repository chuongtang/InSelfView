import React from "react";

const Logo = (props) => {

  const logoSize = props.size || 50;

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      height: logoSize,
      width: logoSize,
    }}
    {...props}
  >
    <defs>
      <radialGradient id="a">
        <stop offset="0%" stopColor="#4fd1c5" />
        <stop offset="100%" stopColor="#338cf5" />
      </radialGradient>
      <filter id="b" height="300%" width="300%" x="-100%" y="-100%">
        <feFlood floodColor="rgba(121, 19, 19, 1)" result="flood" />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="out"
          result="composite"
        />
        <feGaussianBlur in="composite" stdDeviation={15} result="blur" />
        <feOffset dx={15} result="offset" />
        <feComposite in2="SourceGraphic" in="offset" operator="atop" />
      </filter>
    </defs>
    <path
      d="M256 23c-22.5 0-41 18.46-41 41s18.5 41 41 41 41-18.46 41-41-18.5-41-41-41zm0 82H41v270h430V105H256zm0-64c12.8 0 23 10.19 23 23s-10.2 23-23 23-23-10.19-23-23 10.2-23 23-23zM64 128h384v224H322.9c-.3-37.8-3.8-100.3-47.9-114a44.51 50 0 0 0 25.6-45.2 44.51 50 0 0 0-44.5-50 44.51 50 0 0 0-44.5 50 44.51 50 0 0 0 25.6 45.2c-44.1 13.7-47.6 76.2-47.9 114H64V128zm133.9 263.5-12.4 62h138l-12.4-62H197.9zM160 471v18h192v-18H160z"
      fill="url(#a)"
      filter="url(#b)"
    />
    <g transform="matrix(.6 0 0 .6 321.8 328.8)">
      <circle cx={128} cy={128} r={128} fill="#9ae6b4" />
      <circle
        stroke="#00a99d"
        fill="#9ae6b4"
        strokeWidth={18}
        cx={128}
        cy={128}
        r={101}
      />
      <path
        fill="#00a99d"
        d="m64 94 64-38 64 38c0 32-48 108-64 108-16 .25-64-76-64-108z"
      />
    </g>
  </svg>
  );
}

export default Logo;
