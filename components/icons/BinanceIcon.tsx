import * as React from 'react';
import { SVGProps } from 'react';
const BinanceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
    <g id="SVGRepo_iconCarrier">
      <style>{'\n      .st1{fill:#fff}\n    '}</style>
      <g id="Icon">
        <circle
          cx={512}
          cy={512}
          r={512}
          style={{
            fill: '#f3ba2f',
          }}
        />
        <path
          className="st1"
          d="M404.9 468 512 360.9l107.1 107.2 62.3-62.3L512 236.3 342.6 405.7zm-168.586 43.95 62.295-62.297 62.297 62.295-62.295 62.297zM404.9 556 512 663.1l107.1-107.2 62.4 62.3h-.1L512 787.7 342.6 618.3l-.1-.1zm258.17-43.944 62.296-62.297 62.297 62.295-62.295 62.297z"
        />
        <path
          className="st1"
          d="M575.2 512 512 448.7l-46.7 46.8-5.4 5.3-11.1 11.1-.1.1.1.1 63.2 63.2 63.2-63.3z"
        />
      </g>
    </g>
  </svg>
);

export default BinanceIcon;
