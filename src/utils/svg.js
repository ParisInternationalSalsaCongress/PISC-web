import React from 'react';

// const Svg = ({ }) => <svg />;

export const WorldMap = ({
  width = '24px',
  height = '24px',
  ...svgAttributes
}) => (
  <svg
  width={width}
  height={height}
  {...svgAttributes}
  viewBox="0 0 50 50"
  xmlns="http://www.w3.org/2000/svg"
  >
      <path d="M25 1.92C12.265 1.92 1.92 12.265 1.92 25c0 12.735 10.345 23.08 23.08 23.08 12.735 0 23.08-10.345 23.08-23.08C48.08 12.265 37.735 1.92 25 1.92zm-1 2.117v9.934a40.22 40.22 0 0 1-7.26-.819 25.03 25.03 0 0 1 1.348-3.318C19.74 6.528 21.838 4.516 24 4.037zm2 0c2.163.479 4.26 2.491 5.912 5.797a24.928 24.928 0 0 1 1.352 3.33 40.536 40.536 0 0 1-7.264.807V4.037zm-6.828.703c-1.086 1.137-2.053 2.56-2.873 4.2a27.253 27.253 0 0 0-1.51 3.748c-1.963-.53-3.738-1.196-5.271-1.97 2.58-2.795 5.893-4.9 9.654-5.978zm11.656 0c3.757 1.077 7.068 3.179 9.647 5.97-1.51.789-3.284 1.462-5.258 1.993A27.269 27.269 0 0 0 33.7 8.94c-.82-1.64-1.787-3.062-2.873-4.199zm10.955 7.533c2.497 3.29 4.067 7.324 4.272 11.727h-9.041c-.073-3.357-.502-6.527-1.237-9.367 2.244-.607 4.267-1.403 6.006-2.36zm-33.578.016c1.759.934 3.784 1.72 6.022 2.326-.737 2.845-1.168 6.02-1.24 9.385H3.944c.205-4.397 1.77-8.424 4.26-11.71zm7.97 2.797c2.433.517 5.062.826 7.825.887V24h-9.014c.075-3.213.495-6.238 1.19-8.914zm17.653.014c.693 2.673 1.111 5.693 1.186 8.9H26v-8.027c2.764-.06 5.396-.36 7.828-.873zM3.945 26h9.041c.073 3.357.502 6.527 1.237 9.367-2.244.607-4.267 1.403-6.006 2.36C5.72 34.437 4.15 30.403 3.945 26zm11.041 0H24v8.027c-2.764.06-5.396.36-7.828.873-.693-2.673-1.111-5.693-1.186-8.9zM26 26h9.014c-.075 3.213-.495 6.238-1.19 8.914A42.166 42.166 0 0 0 26 34.027V26zm11.014 0h9.04c-.204 4.397-1.769 8.424-4.26 11.71-1.758-.933-3.783-1.719-6.02-2.325.736-2.845 1.167-6.02 1.24-9.385zM24 36.03v9.933c-2.163-.48-4.26-2.491-5.912-5.797a24.928 24.928 0 0 1-1.352-3.33A40.536 40.536 0 0 1 24 36.029zm2 0a40.22 40.22 0 0 1 7.26.818 24.912 24.912 0 0 1-1.348 3.318c-1.653 3.306-3.75 5.318-5.912 5.797v-9.934zm-11.217 1.267c.439 1.35.942 2.616 1.516 3.764.82 1.64 1.787 3.062 2.873 4.199-3.757-1.077-7.068-3.179-9.647-5.97 1.51-.789 3.284-1.462 5.258-1.993zm20.428.016c1.963.529 3.738 1.195 5.271 1.968-2.58 2.796-5.893 4.901-9.654 5.979 1.086-1.137 2.053-2.56 2.873-4.2a27.253 27.253 0 0 0 1.51-3.748z"  />
    </svg>
  );

export const LocationMarket = ({
  width = '24px',
  height = '24px',
  ...svgAttributes
}) => (
    <svg
      width={width}
      height={height}
      {...svgAttributes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
);

export const Facebook = ({
  width = '24px',
  height = '24px',
  ...svgAttributes
}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...svgAttributes}
      viewBox="0 0 24 24"
    >
      <path d="M17.525 9H14V7c0-1.032.084-1.682 1.563-1.682h1.868v-3.18A26.065 26.065 0 0 0 14.693 2C11.98 2 10 3.657 10 6.699V9H7v4l3-.001V22h4v-9.003l3.066-.001L17.525 9z" />
    </svg>
  );

export const FacebookGroup = ({
  width = '24px',
  height = '24px',
  ...svgAttributes
}) => (
    <svg
      width={width}
      height={height}
      {...svgAttributes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path d="M26.906 5c-8.867 0-12.16 6.852-9.625 12.656-.316.211-.824.871-.718 2.032.21 2.109 1.16 2.613 1.687 2.718.21 2.004 1.48 4.34 2.219 4.657 0 1.37-.02 2.519-.125 4-1.617 4.246-11.953 3.261-13.282 10.875-.058.332.286 1.062.97 1.062H42c1.016 0 .996-.75.938-1.094-1.352-7.582-11.665-6.601-13.282-10.843a54.013 54.013 0 0 1-.125-4c.739-.317 1.914-2.758 2.125-4.657.528 0 1.371-.636 1.688-2.75.105-1.16-.328-1.894-.75-2 1.687-2.11 1.383-10.75-4.844-10.75zm-11.75 5c-6.676.113-9.601 5.426-7.594 9.969-.214.105-.636.664-.53 1.625.214 1.71.85 2.125 1.28 2.125.211 1.601 1.157 3.398 1.688 3.718 0 1.067.012 1.036-.094 2.313C9.04 32.484 0 32.281 0 39c0 0 0 1 1 1h4.531c1.528-4.32 5.68-5.984 8.813-7.219 1.726-.68 3.496-1.367 4.031-2.218.059-.93.09-1.72.094-2.594-.95-1.086-1.657-2.778-2-4.219-.813-.602-1.692-1.758-1.907-3.906-.093-1.02.122-1.867.47-2.532-.794-2.464-.743-5.039.124-7.312zM38 10c-.957 0-2.086.078-3.156.25.8 2.348.832 5.152.125 7.156.312.688.457 1.524.375 2.438l-.032.062v.063c-.296 1.965-1.019 3.16-1.874 3.812-.325 1.352-.985 3.059-1.907 4.157.004.859.035 1.632.094 2.625.535.851 2.309 1.539 4.031 2.218 3.13 1.23 7.282 2.899 8.813 7.219H49c1 0 1-.969 1-.969.004-7.734-8.559-5.902-9.844-9.437-.11-1.18-.125-1.07-.125-2.25.535-.32 1.52-2.121 1.625-3.625.43 0 1.067-.442 1.282-2.157.105-.855-.211-1.488-.532-1.593 1.29-1.715 1.078-8.469-3.75-8.469z" />
    </svg>
  );

export const Instagram = ({
  width = '24px',
  height = '24px',
  ...svgAttributes
}) => (
    <svg
      width={width}
      height={height}
      {...svgAttributes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm0 2h8c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3zm9 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z" />
    </svg>
  );

export const Youtube = ({
  width = '24px',
  height = '24px',
  ...svgAttributes
}) => (
    <svg
      width={width}
      height={height}
      {...svgAttributes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path d="M44.898 14.5c-.398-2.2-2.296-3.8-4.5-4.3C37.102 9.5 31 9 24.398 9c-6.597 0-12.796.5-16.097 1.2-2.2.5-4.102 2-4.5 4.3C3.398 17 3 20.5 3 25s.398 8 .898 10.5c.403 2.2 2.301 3.8 4.5 4.3 3.5.7 9.5 1.2 16.102 1.2s12.602-.5 16.102-1.2c2.199-.5 4.097-2 4.5-4.3.398-2.5.898-6.102 1-10.5-.204-4.5-.704-8-1.204-10.5zM19 32V18l12.2 7z" />
    </svg>
  );

export const MouazeProd = ({
  width = '24px',
  height = '24px',
  ...svgAttributes
}) => (
    <svg
      width={width}
      height={height}
      {...svgAttributes}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9836.2 5669.3"
    >
      <g id="XMLID_5273_">
        <g id="XMLID_5274_">
          <path
            id="XMLID_5275_"
            d="M4192.5 2725.9c38.9-141.5 93.4-281.8 162.9-411.5 37.6-70.2 85.7-137.3 149.7-185.8 48.2-36.6 143.2-68.6 186.2-5.3 29.3 43.1 18.7 95.1 15.7 143.6-1.2 20.3 2.6 148.8 46.8 101.2 45.4-48.9 60.3-112.2 85.9-171.9 37.5-87.3 81-175.9 140.7-250.3 36.5-45.5 106-92.5 167-93.3 103.3-1.4 92.4 141.4 81.6 210.3-11.1 70.6-24.6 141.3-39.5 211.3-13.2 61.5-54.4 134.9-41.7 199.2 2.2 11.4 10.5 22.4 21.9 24.1 71.8 10.9 154-260.6 175.3-311.4 42.8-102.6 89.9-200.6 142.3-298.4 26.6-49.6 58.3-99.6 107.1-127.8s118.8-26.9 154.3 16.8c37.6 46.3 22.2 114.2 5.8 171.5-37.3 130.4-70 262.1-98.2 394.8-14.4 67.8-27.6 135.8-39.6 204-11.5 65.1-38 133.5-29 200.3 36.3-13.7 52.5-57.7 62.9-92.3 66.1-220.8 165-429.5 303.1-614.4 145.1-194.3 310.3-372.4 475-550 44.4-47.9 88.9-95.9 136.7-140.5 36.8-34.3 98.3-106.6 157.3-85.3 112.7 40.6-81.8 225.2-118.6 256.8-195.8 168-358.9 372-497.6 588.7-139 217.1-268.4 450.2-346.7 696.6-10 31.4-19.9 63.2-27.5 95.3-22.4 94.2-37.7 195.4-99.7 269.7-62.1 74.3-192.5 101.4-251.9 25-28.7-36.9-33.1-86.8-34.1-133.6-2.8-140.6 15.4-281.6 54-416.8 16.1-56.3 35.6-111.6 49.8-168.5 8-32.2 47.6-117.9 24.9-148-27.6-36.4-122.8 150.1-131.2 165.9-100.6 189.9-162.2 401.4-155 617.5 1.2 36.5 3.2 76.2-17.9 106-39.3 55.4-134.1 33.8-171.5-22.9-37.3-56.7-34.3-130-29.8-197.7 14.5-222.2 29.1-444.4 43.6-666.6 1.2-18.7-1.6-43.3-19.9-47.4-20-4.5-32.7 20.4-37.7 40.3-51 200.6-101.9 401.3-152.9 601.9-16.9 66.5-35.7 136.5-84.5 184.8-48.7 48.3-137.8 62.9-183.4 11.6-54.8-61.5-35.6-180.7-33.3-256.6 2.7-88.5 11.3-176.8 25.4-264.2 10.3-63.6 42.7-140.4 9.2-201-40.4-67.4-112.8 143.4-120 164.4-26.7 77.6-45.4 157.5-67.1 236.5-44.4 162-74.2 327.7-97.5 493.9-5.2 37.3-12 78.3-40.9 102.6-40.9 34.3-153.4 26.8-160.6-38.2-2.3-20.2 4.1-40.4 10.2-59.8 30.9-98.2 43.2-201.7 66-302 19.6-87.6 40.5-180.5 66-273.1z"
          />
        </g>
      </g>
      <g id="XMLID_4099_">
        <path
          id="XMLID_212_"
          d="M2059.7 4363.9c19.1-75.8 36.3-138.9 59-218.3 10.9-38.8 21.8-79.4 34.5-121.8 11.8-43.3 19.1-66.8 27.2-93.8l46.3-154.3 7.3-24.3h130.7c34.5 0 49 9 57.2 39.7 2.8 10.8 8.2 37.9 12.7 62.3 3.6 21.6 9.1 51.4 16.4 95.6 10 60.4 23.6 149.7 27.2 185 3.6 27.9 4.6 52.3 4.6 78.4 0 19-.9 46-1.8 81.2 24.5-82.9 30.9-98.3 82.6-190.3 19.9-36.1 40.8-72.2 89.9-154.3 33.6-56.9 54.5-92 73.5-123.6 21.8-35.2 29.1-45.1 38.2-54.1 14.5-13.5 33.6-19.8 59-19.8h133.4l-2.7 24.3c-13.6 107.3-25.4 194.8-42.6 311.2-16.4 107.4-32.7 207.5-45.4 276.9l-5.5 31.6h-142.6l2.8-16.2c3.6-19.9 6.4-37.9 13.6-77.6 5.5-29.7 10.9-62.2 17.3-101.9 6.4-38.8 9.9-56 12.7-75.8 22.7-137.1 34.5-183.1 73.5-287.8h-3.6c-21.8 50.5-31.8 74-46.3 101.9-16.4 34.3-49.1 95.6-70.8 134.4l-56.3 97.4c-33.6 57.7-80.8 144.3-109.9 198.5l-14.5 27h-158.9l-2.7-26.2c-9.1-75.8-13.6-111.8-26.4-202.9l-13.6-96.5c-15.5-112.8-17.3-135.3-17.3-208.3v-25.3h-3.6c-6.4 107.3-13.6 150.7-50.9 287.8-8.2 29.7-19.1 73.1-32.7 126.3-13.6 52.3-25.4 96.5-33.6 129l-3.6 16.2h-142.6l8.3-31.6z"
        />
        <path
          id="XMLID_209_"
          d="M3267.6 3907.4c140.7 0 231.6 89.3 231.6 228.2 0 82.1-30.9 157.8-83.6 206.6-45.4 42.4-105.3 64-179.7 64-146.2 0-235.2-84.8-235.2-225.5-.1-160.5 109.8-273.3 266.9-273.3zm-28.2 392.4c72.6 0 122.6-67.7 122.6-165.1 0-75.8-36.3-120.9-98-120.9-74.5 0-126.2 67.7-126.2 164.1-.1 76.8 37.1 121.9 101.6 121.9z"
        />
        <path
          id="XMLID_207_"
          d="M3785.3 3914.6l-60.8 285.1c-1.8 12.6-3.6 26.2-3.6 37 0 38.8 25.4 60.4 71.8 60.4 51.8 0 79-27.1 92.6-88.4l62.7-294.1h133.4l-67.2 310.3c-12.8 60.4-33.6 100.1-67.2 129-41.8 35.2-99 54.1-167 54.1-120.8 0-196.1-56.9-196.1-148.9 0-14.4 1.8-34.3 5.5-48.7l63.5-295.9h132.4z"
        />
        <path
          d="M4053.3 4375.6c75.3-130.8 169.8-280.5 279.7-444.7l10.9-16.2h138l3.6 17.2c12.7 61.3 26.4 132.6 39.9 213.8 13.6 78.5 20 121.8 33.6 227.3l2.8 22.5h-134.4l-.9-11.7c-1.8-11.8-2.8-23.5-4.6-36.1l-4.5-35.2-.9-9.9h-179.8l-6.4 10.8-20 34.3c-6.4 10.8-13.6 22.6-20.9 36.1l-6.4 11.7h-141.6l11.9-19.9zm353.2-177.7l-16.4-175.9-95.3 175.9h111.7z"
          id="XMLID_204_"
        />
        <path
          id="XMLID_202_"
          d="M4738.1 3916.5h402.2c-7.2 92-19.1 108.2-168 231.8-46.3 39.7-59.9 50.5-97.1 83.9-22.7 19.9-30.9 27-49.9 45.1l-8.2 7.2h252.4l-22.7 110.9h-428.5c5.4-92 18.1-109.1 168-237.2 68.1-56.9 108-92 149.8-129.9l7.2-7.2h-228.8l23.6-104.6z"
        />
        <path
          id="XMLID_200_"
          d="M5257.6 3916.5h333.2l-22.7 104.6h-201.6l-17.2 79.4h197l-22.7 104.6h-197l-18.2 85.7h209.7l-21.8 104.6H5155l102.6-478.9z"
        />
        <path
          id="XMLID_197_"
          d="M5744.3 3755l20-.9c67.2-4.5 98-5.4 138.9-5.4 92.6 0 151.6 12.6 198.8 43.3 49.9 33.4 77.2 87.5 77.2 154.3 0 73.1-31.8 136.2-89 175-53.6 37.9-116.2 52.3-221.6 52.3-22.7 0-39.1-.9-66.3-1.8l-47.2 223.7h-148l137.2-640.5zm82.7 293.2c32.7.9 49 .9 69 .9 39.9 0 67.2-5.4 88-17.1 26.4-14.5 42.7-44.2 42.7-78.5 0-56.9-37.2-86.6-111.7-86.6-11.8 0-22.7 0-49.9 1.8l-38.1 179.5z"
        />
        <path
          id="XMLID_194_"
          d="M6286.6 3915.5c45.3-2.7 88.9-4.5 118.9-4.5 72.6 0 123.4 9 161.6 29.7 42.6 22.6 68.1 68.5 68.1 121.8 0 72.2-40 120.9-118 146.2 37.2 59.6 88 128.1 132.6 182.2l4.5 4.5h-158.9c-7.2-9.9-9.1-13.5-19.1-27.9l-16.4-24.4c-19.1-28.9-48.1-77.5-69-115.5l-3.6-6.3c-2.7.9-7.2.9-7.2.9-8.2 0-13.6-.9-27.2-1.8l-37.2 175H6184l102.6-479.9zm84.4 210.2c20.9.9 32.7 1.8 45.4 1.8 59.9 0 89-20.8 89-63.1 0-37-27.2-57.7-79-57.7-7.3 0-15.4 1.8-30.9 4.5l-24.5 114.5z"
        />
        <path
          id="XMLID_191_"
          d="M6986.8 3907.4c140.7 0 231.6 89.3 231.6 228.2 0 82.1-30.9 157.8-83.6 206.6-45.4 42.4-105.3 64-179.7 64-146.2 0-235.2-84.8-235.2-225.5-.1-160.5 109.8-273.3 266.9-273.3zm-28.2 392.4c72.6 0 122.6-67.7 122.6-165.1 0-75.8-36.3-120.9-98-120.9-74.5 0-126.2 67.7-126.2 164.1-.1 76.8 37.1 121.9 101.6 121.9z"
        />
        <path
          id="XMLID_188_"
          d="M7375.5 3915.5c44.5-3.6 81.7-4.5 115.3-4.5 105.3 0 173.4 18.9 225.1 62.2 44.5 38.8 69 95.7 69 161.5 0 93.8-45.3 173.2-122.6 217.4-56.3 31.6-128 45.1-244.2 45.1-40.9 0-76.3-.9-129.9-4.5l-14.5-.9 101.8-476.3zm54.5 368.1l11.8.9c18.2.9 31.8 1.8 41.8 1.8 106.2 0 164.3-53.3 164.3-148 0-76.7-44.5-116.3-130.7-116.3h-31.8l-55.4 261.6z"
        />
      </g>
    </svg>
  );

export const YoshiProd = ({
  width = '24px',
  height = '24px',
  ...svgAttributes
}) => (
    <svg
      width={width}
      height={height}
      {...svgAttributes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9836.2 5669.3"
    >
      <path d="M3850 3312.9h-85c-63.1 0-98.7-30.2-112.4-90.5l-82.3-389.3h-419.5l-82.3 389.3c-13.7 60.3-49.3 90.5-109.7 90.5h-87.7c-71.3 0-106.9-41.1-90.5-112.4l364.6-1667c13.7-57.6 49.4-90.5 112.4-90.5h205.6c63.1 0 98.7 32.9 112.4 90.5l367.4 1667c14 71.2-21.7 112.4-93 112.4zm-334.5-732.1l-30.2-142.6c-90.5-427.7-112.4-578.5-123.4-712.8-13.7 131.6-38.4 290.6-126.1 712.8l-30.2 142.6h309.9zM5430.7 1547.2v1332.5c0 268.7-167.2 460.6-518.2 460.6-350.9 0-515.4-191.9-515.4-460.6V1547.2c0-65.8 35.6-104.2 101.4-104.2h93.2c65.8 0 101.4 38.4 101.4 104.2v1321.5c0 120.6 63.1 202.9 219.3 202.9 159 0 222.1-79.5 222.1-202.9V1547.2c0-65.8 35.6-104.2 101.4-104.2h93.2c65.9 0 101.6 38.4 101.6 104.2zM6216.7 1895.4s41.1 219.3 41.1 690.9v625.1c0 65.8-35.6 101.4-101.4 101.4h-87.7c-65.8 0-101.4-35.6-101.4-101.4V1547.2c0-65.8 35.6-104.2 101.4-104.2h120.6c57.6 0 95.9 27.4 117.9 82.3l285.1 723.8c161.8 411.3 219.4 605.9 219.4 605.9s-43.9-194.7-43.9-696.4v-611.4c0-65.8 38.4-104.2 104.2-104.2h87.7c65.8 0 101.4 38.4 101.4 104.2v1664.2c0 65.8-35.6 101.4-101.4 101.4h-117.9c-54.8 0-96-24.7-115.2-79.5l-290.6-732c-145.2-375.6-219.3-605.9-219.3-605.9zM2997.9 4226.8h-137.1c-10.3 0-16.6-5.7-16.6-16.6v-351.9c0-10.8 6.3-16.5 16.6-16.5h137.1c10.8 0 16.6 5.7 16.6 16.5v6.9c0 10.3-5.7 16.6-16.6 16.6h-108.5v130.8h92.5c10.3 0 16 6.3 16 16.6v6.9c0 10.9-5.7 16.6-16 16.6h-92.5v134.8h108.5c10.8 0 16.6 5.7 16.6 16v6.8c-.1 10.8-5.8 16.5-16.6 16.5zM3204.9 3913.2s5.1 44.6 5.1 129.1v167.9c0 10.9-5.7 16.6-16 16.6h-12c-10.3 0-16.6-5.7-16.6-16.6v-351.9c0-10.8 6.3-16.5 16.6-16.5h20.6c9.1 0 15.4 4.6 18.9 13.1l70.8 179.4c32.6 83.4 45.1 121.1 45.1 121.1s-5.1-33.7-5.1-129.7v-167.4c0-10.8 5.7-16.5 16.6-16.5h12c10.3 0 16 5.7 16 16.5v351.9c0 10.9-5.7 16.6-16 16.6h-20.6c-9.1 0-15.4-4.6-18.8-13.1l-70.8-179.3c-28.1-70.9-45.8-121.2-45.8-121.2zM3711.8 3858.4v6.9c0 10.3-5.7 16.6-16.6 16.6h-55.4v328.4c0 10.9-6.3 16.6-16.6 16.6h-12.6c-10.3 0-16.6-5.7-16.6-16.6v-328.4h-55.4c-10.8 0-16.6-6.3-16.6-16.6v-6.9c0-10.8 5.7-16.5 16.6-16.5h156.5c11-.1 16.7 5.6 16.7 16.5zM4010.2 4226.8h-137.1c-10.3 0-16.6-5.7-16.6-16.6v-351.9c0-10.8 6.3-16.5 16.6-16.5h137.1c10.8 0 16.6 5.7 16.6 16.5v6.9c0 10.3-5.7 16.6-16.6 16.6h-108.5v130.8h92.5c10.3 0 16 6.3 16 16.6v6.9c0 10.9-5.7 16.6-16 16.6h-92.5v134.8h108.5c10.8 0 16.6 5.7 16.6 16v6.8c0 10.8-5.7 16.5-16.6 16.5zM4360.1 4226.8H4347c-10.3 0-17.7-4.6-22.3-16.6l-47.4-135.4H4223v135.4c0 10.9-5.7 16.6-16.6 16.6h-12c-10.3 0-16.6-5.7-16.6-16.6v-351.9c0-10.8 6.3-16.5 16.6-16.5h76c68 0 99.4 38.3 99.4 90.8v52c0 36.6-15.4 66.8-49.1 81.1l52 141.1c4.5 12-.6 20-12.6 20zm-89.7-192.5c38.8 0 54.3-18.9 54.3-50.3v-51.4c0-30.8-15.4-50.8-54.3-50.8H4223v152.5h47.4zM4694.6 3858.4v6.9c0 10.3-5.7 16.6-16.6 16.6h-55.4v328.4c0 10.9-6.3 16.6-16.6 16.6h-12.6c-10.3 0-16.6-5.7-16.6-16.6v-328.4h-55.4c-10.8 0-16.6-6.3-16.6-16.6v-6.9c0-10.8 5.7-16.5 16.6-16.5h156.5c11-.1 16.7 5.6 16.7 16.5zM5002.3 4226.8h-12c-9.7 0-16-5.1-17.7-14.3l-20.6-91.4h-97.7l-20.6 91.4c-2.3 9.1-8 14.3-17.7 14.3h-12c-11.4 0-17.1-6.9-14.9-17.7l80-353c2.3-9.1 8-14.3 17.7-14.3h32c9.7 0 15.4 5.1 17.7 14.3l80 353c3 10.8-2.8 17.7-14.2 17.7zm-59.4-144.5l-13.1-59.4c-21.1-97.1-25.7-127.9-26.8-141.1-1.1 13.1-5.7 44.6-26.8 141.1l-13.1 59.4h79.8zM5167.2 4210.2v-351.9c0-10.8 6.3-16.5 16.6-16.5h12.6c10.3 0 16.6 5.7 16.6 16.5v351.9c0 10.9-6.3 16.6-16.6 16.6h-12.6c-10.3 0-16.6-5.7-16.6-16.6zM5416.5 3913.2s5.1 44.6 5.1 129.1v167.9c0 10.9-5.7 16.6-16 16.6h-12c-10.3 0-16.6-5.7-16.6-16.6v-351.9c0-10.8 6.3-16.5 16.6-16.5h20.6c9.1 0 15.4 4.6 18.9 13.1l70.8 179.4c32.6 83.4 45.1 121.1 45.1 121.1s-5.2-33.7-5.2-129.7v-167.4c0-10.8 5.7-16.5 16.6-16.5h12c10.3 0 16 5.7 16 16.5v351.9c0 10.9-5.7 16.6-16 16.6h-20.6c-9.1 0-15.4-4.6-18.8-13.1l-70.8-179.3c-28-70.9-45.7-121.2-45.7-121.2zM5794.5 3920.7s1.7 37.7 1.7 98.2v191.4c0 10.9-5.7 16.6-16 16.6H5770c-10.3 0-16.6-5.7-16.6-16.6v-351.9c0-10.8 6.3-16.5 16.6-16.5h21.7c9.7 0 15.4 4.6 18.3 13.1l48 142.2c15.4 46.3 27.4 87.4 27.4 87.4s10.9-38.3 28-88l47.4-141.6c2.9-8.6 9.1-13.1 18.3-13.1h22.3c10.3 0 16 5.7 16 16.5v351.9c0 10.9-5.7 16.6-16 16.6H5991c-10.8 0-16.6-5.7-16.6-16.6v-191.4c0-57.1 1.2-97.7 1.2-97.7s-12 40-31.4 97.1l-30.3 93.7c-2.8 8.6-9.1 12.6-18.3 12.6h-20c-9.1 0-15.4-4-18.3-13.1L5827 4019c-21.1-61.2-32.5-98.3-32.5-98.3zM6336 4226.8h-137.1c-10.3 0-16.6-5.7-16.6-16.6v-351.9c0-10.8 6.3-16.5 16.6-16.5H6336c10.9 0 16.6 5.7 16.6 16.5v6.9c0 10.3-5.7 16.6-16.6 16.6h-108.5v130.8h92.5c10.3 0 16 6.3 16 16.6v6.9c0 10.9-5.7 16.6-16 16.6h-92.5v134.8H6336c10.9 0 16.6 5.7 16.6 16v6.8c-.1 10.8-5.8 16.5-16.6 16.5zM6543 3913.2s5.1 44.6 5.1 129.1v167.9c0 10.9-5.7 16.6-16 16.6h-12c-10.3 0-16.6-5.7-16.6-16.6v-351.9c0-10.8 6.3-16.5 16.6-16.5h20.6c9.1 0 15.4 4.6 18.9 13.1l70.8 179.4c32.6 83.4 45.1 121.1 45.1 121.1s-5.2-33.7-5.2-129.7v-167.4c0-10.8 5.7-16.5 16.6-16.5h12c10.3 0 16 5.7 16 16.5v351.9c0 10.9-5.7 16.6-16 16.6h-20.6c-9.1 0-15.4-4.6-18.8-13.1l-70.8-179.3c-28-70.9-45.7-121.2-45.7-121.2zM7049.9 3858.4v6.9c0 10.3-5.7 16.6-16.6 16.6H6978v328.4c0 10.9-6.3 16.6-16.6 16.6h-12.6c-10.3 0-16.6-5.7-16.6-16.6v-328.4h-55.4c-10.8 0-16.5-6.3-16.5-16.6v-6.9c0-10.8 5.7-16.5 16.5-16.5h156.5c10.9-.1 16.6 5.6 16.6 16.5z" />
    </svg>
  );

export const Envelope = ({
  width = '24px',
  height = '24px',
  ...svgAttributes
}) => (
  <svg
    width={width}
    height={height}
    {...svgAttributes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <path d="M0 7v2.781c3.012 2.621 20.29 17.684 21.656 18.875C23.063 29.883 24.465 30 25 30c.535 0 1.938-.117 3.344-1.344C29.762 27.422 48.047 11.48 50 9.781V7zm0 5.438V37.53l15.125-11.937C10.223 21.328 3.23 15.25 0 12.437zm50 0c-3.05 2.656-10.152 8.828-15.125 13.156L50 37.5zm-33.344 14.5L0 40.063V43h50v-2.969L33.344 26.938c-1.938 1.687-3.332 2.91-3.688 3.218C27.738 31.824 25.758 32 25 32c-.758 0-2.738-.172-4.656-1.844-.352-.304-1.746-1.527-3.688-3.218z" />
  </svg>
);
export const Phone = ({
  width = '24px',
  height = '24px',
  ...svgAttributes
}) => (
  <svg
    width={width}
    height={height}
    {...svgAttributes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <path d="M24.984 4C14.676 4 7.602 5.629 3.937 8.86c-1.68 1.484-.593 7.695-.585 7.753.32 1.7 1.742 2.551 2.878 2.36.387-.063 1.926-.453 4.235-1.043a161.34 161.34 0 0 1 2.445-.617c.887-.2 1.637-1.008 2.012-2.153.164-.488 1.105-2.7 1.805-4.312C17.789 10.594 20.734 10 25 10h.004c4.262 0 7.207.594 8.27.844.699 1.617 1.64 3.828 1.8 4.312.383 1.168 1.14 1.973 2.031 2.16.329.07 1.403.352 2.586.657 2.2.566 3.672.941 4.09 1.007.098.012.192.02.293.02 1.067 0 2.281-.844 2.57-2.379.012-.062 1.098-6.273-.585-7.762l-.016-.015C42.398 5.629 35.32 4 25 4zM18 15a1 1 0 0 0-1 1v2.566c-1.012.97-4.309 4.184-8.258 8.782-3.11 3.62-3.75 7.25-3.742 9.656.008 1.871.973 7.898 1.016 8.152A.992.992 0 0 0 7 46h5a1 1 0 0 0 1-1v-1h24v1a1 1 0 0 0 1 1h5c.492 0 .91-.355.984-.844.043-.254 1.012-6.27 1.016-8.156.004-2.41-.64-6.043-3.742-9.652-3.95-4.598-7.246-7.813-8.258-8.782V16a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2h-6v-2a1 1 0 0 0-1-1zm-1 10h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm-12 4h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm-12 4h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4z" />
  </svg>
);

export const PISC_TOWER = ({ width = '24px', height = '24px', ...svgAttributes }) => (
  <svg
    width={width}
    height={height}
    {...svgAttributes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 107"
  >
    <g fillRule="evenodd">
      <path d="M11.877 65.846l-.03.061M11.877 65.846l-.03.061M28.566 80.922s-3.364-1.27-5.606-1.517c-.779-.093-1.277-.093-1.993-.124-.717 0-1.308-.062-1.994.031-.467 0-4.173-1.021-5.824-3.312-1.34-1.889-2.087-4.242-2.149-7.028.031-3.716 1.402-6.843 4.142-9.412 2.71-2.539 5.98-3.22 10.901-3.344 7.693.557 9.033-3.189 10.092-4.18.124-.123.685.093.654.28-.125 1.361-1.558 3.745-1.215 9.535.093 1.64.467 3.653.747 5.975l-1.65.372a19.101 19.101 0 0 0-2.96-6.75c-1.432-2.012-3.114-3.034-6.322-3.158-2.896.093-5.045.96-6.385 2.57-1.37 1.641-2.024 3.499-2.024 5.635.031 2.693.872 4.86 2.554 6.501s3.426 3.19 6.447 4.614c2.056.99 3.769 1.95 6.042 3.374 6.23 3.901 6.915 9.474 6.977 12.291-.062 4.056-1.557 6.812-4.547 9.474-1.464 1.3-3.395 2.57-5.98 3.251l1.339-3.715c.25-.217.311-.279.592-.558 1.557-1.61 2.367-3.808 2.398-6.594-.031-5.263-2.087-7.214-2.71-7.678-.093-.557-1.526-6.533-1.526-6.533z" />
      <path d="M28.603 84.31l-.497-2.863s-2.95-1.078-4.905-1.324c-.839-.092-1.367-.092-2.143-.123-.714 0-1.242.062-1.925.123-2.08.216-3.974.77-5.682 1.601-2.297 1.14-4.129 2.74-5.433 4.803C6.714 88.59 6.031 91.052 6 93.854c0 2.155.497 4.218 1.49 6.219.994 2.001 2.577 3.633 4.689 4.926 2.11 1.293 4.843 1.97 8.165 2.001 1.49-.03 2.95-.185 4.347-.431 1.397-.246 2.422-.462 3.011-.616.373-.739.777-1.693 1.211-2.894.435-1.2.777-2.278 1.087-3.232l-1.149-.4c-.962 1.97-2.08 3.478-3.353 4.525-1.273 1.047-2.887 1.57-4.906 1.57-3.104-.061-4.936-1.231-6.83-3.479-1.925-2.247-2.919-5.264-2.98-9.051 0-2.032.403-3.94 1.18-5.696a10.392 10.392 0 0 1 3.446-4.279c1.52-1.077 2.7-1.632 4.936-1.662 2.142-.031 3.85.43 5.123 1.385 1.273.924 2.173 2.463 2.701 4.556l1.025-.277c-.062-.246-.528-2.185-.59-2.709zM8.008 84.995c1.722-3.168 6.547-5.59 7.992-5.963-1.045-.497-5.348-3.354-5.102-10.032-1.045 6.957-3.043 16.244-2.89 15.995z" />
      <path d="M5.788 98.293v-.176L5.758 98c-1.053 5.597-1.3 5.187-1.487 5.392-.619.645-2.042.996-4.271 1.084V106h13v-.264c-1.702-.088-6.779-3.047-7.212-7.443zM35.87 51.134l.439-.61c1.096-1.65 1.66-3.696 1.691-6.17 0-1.863-.345-3.452-1.002-4.765C36.34 38.276 34.085 34 30.734 34H10v1.588c1.41.061 4.29-.458 4.949 1.497.438 1.282-.157 3.604-.157 4.49 0 0-1.817 10.414-3.758 23.425.532-2.596 1.973-4.795 4.04-6.72a11.258 11.258 0 0 1 3.038-1.984c2.13-.917 4.667-1.222 7.924-1.283 7.078.458 8.77-2.627 9.834-3.879zM20.21 39.162v-3.177c1.441-.305 2.944-.183 3.79-.183 2.474-.03 4.134.672 5.794 2.077 1.66 1.405 2.537 3.634 2.6 6.688-.032 2.383-.47 4.276-1.347 5.62-.877 1.344-1.942 2.29-3.226 2.84-1.284.55-8.3.58-8.676.428l1.065-14.293zM23.533 7l.067-.239h.867l.066.239.467-.58L24.5 4h-1.033L23 6.42z" />
      <path d="M24 4.231h1s-.23-.462-.5-.462-.5.462-.5.462z" />
      <path d="M23.97 0l-.155 4s.093-.103.216-.103c.061 0 .154.103.154.103l-.216-4zM23.67 22.06l-2.036 8.88h5.67l-1.88-8.88H23.67zM21.383 20h-.689v1.045l.47.983-2.099 8.882H18v.738L18.47 33h12.06l.47-1.352v-.738h-1.096l-2.1-8.882.47-.983V20h-6.891zM24.548 20H27L24.29 7h-.58L21 20h2.548L24 17.802zM33.279 106H32v-1.298c3.618-1.606 6.986-5.252 7.797-9.917.718-4.14-.967-8.187-2.277-10.596-.904-5.005-1.777-9.3-2.744-15.85L36.46 68c2.807 18.784 6.83 34.416 7.174 34.818.623.68 2.12 1.39 4.366 1.452V106H33.279z" />
    </g>
  </svg>
);


export const PISC = ({ width = '24px', height = '24px', ...svgAttributes }) => (
  <svg
    width={width}
    height={height}
    {...svgAttributes}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 774 587"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
  >
    <path d="M344.8 216.7l-.1.2M344.8 216.7l-.1.2M399.9 263.8s-10.8-4.1-18-4.9c-2.5-.3-4.1-.3-6.4-.4-2.3 0-4.2-.2-6.4.1-1.5 0-13.4-3.3-18.7-10.7-4.3-6.1-6.7-13.7-6.9-22.7.1-12 4.5-22.1 13.3-30.4 8.7-8.2 19.2-10.4 35-10.8 24.7 1.8 29-10.3 32.4-13.5.4-.4 2.2.3 2.1.9-.4 4.4-5 12.1-3.9 30.8.3 5.3 1.5 11.8 2.4 19.3l-5.3 1.2c-1.8-8-5-15.3-9.5-21.8-4.6-6.5-10-9.8-20.3-10.2-9.3.3-16.2 3.1-20.5 8.3-4.4 5.3-6.5 11.3-6.5 18.2.1 8.7 2.8 15.7 8.2 21 5.4 5.3 11 10.3 20.7 14.9 6.6 3.2 12.1 6.3 19.4 10.9 20 12.6 22.2 30.6 22.4 39.7-.2 13.1-5 22-14.6 30.6-4.7 4.2-10.9 8.3-19.2 10.5l4.3-12c.8-.7 1-.9 1.9-1.8 5-5.2 7.6-12.3 7.7-21.3-.1-17-6.7-23.3-8.7-24.8-.3-1.8-4.9-21.1-4.9-21.1z" />
    <path d="M399 274.9l-1.6-9.3s-9.5-3.5-15.8-4.3c-2.7-.3-4.4-.3-6.9-.4-2.3 0-4 .2-6.2.4-6.7.7-12.8 2.5-18.3 5.2-7.4 3.7-13.3 8.9-17.5 15.6-4.2 6.7-6.4 14.7-6.5 23.8 0 7 1.6 13.7 4.8 20.2 3.2 6.5 8.3 11.8 15.1 16 6.8 4.2 15.6 6.4 26.3 6.5 4.8-.1 9.5-.6 14-1.4 4.5-.8 7.8-1.5 9.7-2 1.2-2.4 2.5-5.5 3.9-9.4 1.4-3.9 2.5-7.4 3.5-10.5l-3.7-1.3c-3.1 6.4-6.7 11.3-10.8 14.7-4.1 3.4-9.3 5.1-15.8 5.1-10-.2-15.9-4-22-11.3-6.2-7.3-9.4-17.1-9.6-29.4 0-6.6 1.3-12.8 3.8-18.5 2.5-5.7 6.2-10.3 11.1-13.9 4.9-3.5 8.7-5.3 15.9-5.4 6.9-.1 12.4 1.4 16.5 4.5 4.1 3 7 8 8.7 14.8l3.3-.9c-.2-.8-1.7-7.1-1.9-8.8z" />
    <path d="M332.2 278.7c5.6-10.2 21.3-18 26-19.2-3.4-1.6-17.4-10.8-16.6-32.3-3.4 22.4-9.9 52.3-9.4 51.5zM326 320.9v-.6l-.1-.4c-3.4 19.1-4.2 17.7-4.8 18.4-2 2.2-6.6 3.4-13.8 3.7v5.2h42v-.9c-5.5-.3-21.9-10.4-23.3-25.4zM422.7 168.2l1.4-2c3.5-5.4 5.3-12.1 5.4-20.2 0-6.1-1.1-11.3-3.2-15.6-2.1-4.3-9.3-18.3-20-18.3h-66.2v5.2c4.5.2 13.7-1.5 15.8 4.9 1.4 4.2-.5 11.8-.5 14.7 0 0-5.8 34.1-12 76.7 1.7-8.5 6.3-15.7 12.9-22 3-2.8 6.2-4.9 9.7-6.5 6.8-3 14.9-4 25.3-4.2 22.6 1.5 28-8.6 31.4-12.7zm-50-39.2v-10.4c4.6-1 9.4-.6 12.1-.6 7.9-.1 13.2 2.2 18.5 6.8 5.3 4.6 8.1 11.9 8.3 21.9-.1 7.8-1.5 14-4.3 18.4-2.8 4.4-6.2 7.5-10.3 9.3-4.1 1.8-26.5 1.9-27.7 1.4l3.4-46.8zM384.2 25.2l.2-.7h2.6l.2.7 1.4-1.7-1.5-7.1H384l-1.4 7.1 1.6 1.7zM384.3 15.6h2.6s-.6-1.5-1.3-1.5c-.7 0-1.3 1.5-1.3 1.5zM385.5 2l-.5 11.6s.3-.3.7-.3c.2 0 .5.3.5.3L385.5 2zM383.1 74.6l-6.5 28.9h18.1l-6-28.9h-5.6zm-7.3-6.7h-2.2v3.4l1.5 3.2-6.7 28.9H365v2.4l1.5 4.4H405l1.5-4.4v-2.4H403l-6.7-28.9 1.5-3.2v-3.4h-22zM387.4 66.8h7.6l-8.4-41.4h-1.8l-8.4 41.4h7.9l1.4-7 1.7 7zM415.3 347.1h-4.1v-4.2c11.6-5.2 22.4-17 25-32.1 2.3-13.4-3.1-26.5-7.3-34.3-2.9-16.2-5.7-30.1-8.8-51.3l5.4-1.1c9 60.8 21.9 111.4 23 112.7 2 2.2 6.8 4.5 14 4.7v5.6h-47.2z" />
    <path d="M103.4 457.5c0 41.6-25.3 57.3-66.2 57.3-12.4 0-21.9-1.9-29.9-5.5l1.9-31.5c5 2.3 12.6 4.1 22.1 4.1 20 0 30.2-7.6 30.2-24.8v-77.6h41.7v78h.2zM247.4 461c0 35.4-21 53.8-63.3 53.8-42.1 0-64-18.2-64-53.8v-81.5h41.4v81.4c0 13.4 6.5 20 22.6 20s22.1-6.2 22.1-20v-81.4h41.2V461zM363.9 512.2l-53.6-62.3-9-11.1-.4.2.2 14.3v58.9H264V379.5h34l47.9 57.7 9 11.1.4-.2-.4-14.2v-54.5h37v132.7h-28v.1zM526.1 507.7c-11.5 4.2-29.7 7.1-45.5 7.1-54.1 0-75-25.8-75-68.6 0-43.3 22.3-69.2 75.5-69.2 14.9 0 31 2.1 43.3 6l-3.9 32.9c-11.1-3.5-25.1-5.7-37.1-5.7-27.9 0-34.1 8.7-34.1 35.2 0 27.8 6.5 35.7 30.1 35.7 3.5 0 7.1-.2 10.4-.9V441h36.3v66.7zM643.2 478.2l-.7 34H542V379.5h41.6v98.7h59.6zM762.8 479.4l-.7 32.7H653.5V379.5h106l.7 33.1h-65.3v17.7h53.9v29h-53.9v20.2h67.9v-.1zM68.5 569.5h-5v8.1h-5.1V553h10.1c7.3 0 10.4 2.9 10.4 8.3-.1 5.1-3.1 8.2-10.4 8.2zm0-12.3h-5v8.4h5c3.5 0 5.1-1 5.1-4.2 0-3.1-1.5-4.2-5.1-4.2zM85.5 553.1h5.2v24.6h-5.2zM106.4 578.1c-3.3 0-6.3-.7-8.7-2l.7-4.4c2.5 1.3 5.1 2.1 8.1 2.1 3.5 0 5.2-1.3 5.2-3.2 0-4.4-13.8-1.9-13.8-10.5 0-4 2.8-7.5 9.8-7.5 2.8 0 5.7.5 7.9 1.4l-.6 4.2c-2.5-.8-4.8-1.2-7.1-1.2-3.9 0-5.1 1.4-5.1 2.8 0 4.3 13.7 1.7 13.7 10.4 0 4.8-3.7 7.9-10.1 7.9zM140.7 558.1c-1.6-.6-3.7-1-6-1-5.8 0-7.8 2.2-7.8 8.2 0 6.3 2.1 8.5 7.9 8.5 2.3 0 4.3-.5 6-1.2l.6 4c-2 .9-4.7 1.6-7.2 1.6-8.5 0-12.6-4.4-12.6-12.9 0-8 4-12.6 13-12.6 2.4 0 5.1.5 6.8 1.2l-.7 4.2zM176.4 572.8v4.8h-4.5v-4.8H159l-.4-2.9 11.9-16.8h5.9v15.6h3.2l-.1 4.1h-3.1zm-4.2-13l.1-2.7h-.1l-1.5 2.2-5 7.3-1.5 2.1v.1h7.8l.2-9zM190.8 555v11.7h-3V555H183l.1-2.6h12.4l.1 2.6h-4.8zM208.7 566.8v-6h-7v6h-3v-14.3h3v5.7h7v-5.7h3v14.3h-3zM249.3 573.3l-.1 4.3h-19.1V553h18.5l.1 4.4h-13.6v5.6h11.5v3.9h-11.5v6.4h14.2zM266.4 577.7h-10.6v-24.6h10.5c8.8 0 12.5 4.1 12.5 12.2 0 8.6-4.3 12.4-12.4 12.4zm-.2-20.1h-5.3v15.6h5.3c5 0 7.2-1.7 7.2-7.9 0-5.8-2-7.7-7.2-7.7zM286 553.1h5.2v24.6H286zM310.2 557.6v20.1h-5.1v-20.1H297l.1-4.5h21.2l.1 4.5h-8.2zM324.3 553.1h5.2v24.6h-5.2zM349 578.1c-8.8 0-12.3-4.4-12.3-12.7 0-8.3 3.5-12.7 12.3-12.7 8.9 0 12.3 4.4 12.3 12.7 0 8.4-3.4 12.7-12.3 12.7zm0-21c-5.1 0-7 2-7 8.3 0 6.2 1.9 8.3 7 8.3s7-2.1 7-8.3c0-6.3-1.8-8.3-7-8.3zM387.1 577.7l-12.7-15.1-1.7-2.1h-.1v17.2H368v-24.6h4.4l13.6 16.5h.1l-.1-2.6v-13.9h4.6v24.6h-3.5zM426.6 574.1h4.7V559l-5.6 3.2-.5-4.2 8.1-5.1h3V574h4.6v3.5h-14.2v-3.4h-.1zM458.6 578c-6.7 0-10.4-3.7-10.4-12 0-8.4 4.2-13.2 12.1-13.2 2.5 0 4.5.3 6.6 1.1l-.4 4.1c-1.9-.7-3.5-.9-5.6-.9-5 0-7.5 2.2-8 6.5l.1.1c1.9-1 4.1-1.7 6.4-1.7 6.1 0 9 2.5 9 7.3 0 5.6-3.5 8.7-9.8 8.7zm0-12.5c-1.8 0-4.3.7-5.5 1.9.1 4.5 1.6 6.5 5.5 6.5 3.3 0 5-1.7 5-4.7 0-2.4-1.4-3.7-5-3.7zM486.8 563.8h15.1v3.2h-15.1zM527.9 573.3l12 .1-.1 4.2h-18.6v-3.3c7.3-6 13.6-9.8 13.6-13.8 0-1.9-1.6-3.5-5.3-3.5-2.7 0-5.1 1-7.2 2.4l-1.2-4c2.4-1.7 5.6-2.8 9.3-2.8 6.3 0 9.5 3 9.5 7.3-.1 5.2-4.9 8.6-12 13.4zM554 573.3l12 .1-.1 4.2h-18.6v-3.3c7.3-6 13.6-9.8 13.6-13.8 0-1.9-1.6-3.5-5.3-3.5-2.7 0-5.1 1-7.2 2.4l-1.2-4c2.4-1.7 5.6-2.8 9.3-2.8 6.3 0 9.5 3 9.5 7.3-.1 5.2-5 8.6-12 13.4zM614.7 572.5h-12l-2 5.1h-5.4l10.5-24.6h5.9l10.6 24.6h-5.7l-1.9-5.1zm-6.9-13.3l-3.5 9.3h8.9l-3.5-9.3-.9-2.5h-.1l-.9 2.5zM637.7 569.5h-5v8.1h-5.1V553h10.1c7.3 0 10.4 2.9 10.4 8.3 0 5.1-3.1 8.2-10.4 8.2zm0-12.3h-5v8.4h5c3.5 0 5.1-1 5.1-4.2 0-3.1-1.5-4.2-5.1-4.2zM669.2 567.3l7.1 10.3h-6.1l-5.6-9.3h-5.2v9.3h-5.1V553h10.4c6.4 0 9.7 2.6 9.7 7.5 0 3.6-1.9 6.2-5.2 6.8zm-4.5-10.1h-5.2v7.5h5.1c3.2 0 4.6-1 4.6-3.8-.1-2.7-1.4-3.7-4.5-3.7zM682.1 553.1h5.2v24.6h-5.2zM713.7 573.2l-.1 4.5h-17.8v-24.6h5.1v20.1h12.8zM49.9 261h-8v19.6H28.3v-60.2h21.6c16.7 0 23.5 6.6 23.5 20.6 0 12.7-6.7 20-23.5 20zm0-29.3h-8v18.5h8c6.7 0 9.6-1.7 9.6-9.2 0-7.3-2.6-9.3-9.6-9.3zM118 268.9H96.2l-3.4 11.7H78.5l20.8-60.2h16.1l21 60.2h-15.1l-3.3-11.7zm-12.6-32l-6 20.6h15.3l-5.8-20.6-1.6-6.3h-.2l-1.7 6.3zM183.4 255.4l14 25.1h-15.8L171.1 258h-8.5v22.5H149v-60.2h22.1c14.9 0 22.4 5.9 22.4 18.7 0 8.5-3.6 14.4-10.1 16.4zm-12.2-23.8h-8.6V248h8.3c6 0 8.4-1.8 8.4-8.3 0-6.2-2.2-8.1-8.1-8.1zM210.9 220.4h13.8v60.2h-13.8zM259.4 281.7c-7 0-13.4-1.7-18.6-4.5l1.8-11.6c5.3 2.8 10.8 4.4 16.7 4.4 6.6 0 9.5-2.4 9.5-6.6 0-9.5-27.7-5.5-27.7-25.6 0-10.2 6.6-18.5 21.8-18.5 5.9 0 12.2 1.2 16.9 3.1l-1.7 11.4c-5-1.6-10-2.6-14.5-2.6-7.5 0-9.5 2.6-9.5 5.8 0 9.4 27.7 5.1 27.7 25.4-.1 12-8.3 19.3-22.4 19.3zM28.7 304.3h4.1v22.1h-4.1zM54 326.4l-9.4-13.5-1.3-2h-.1v15.5h-3.6v-22.1h3.5l8.8 12.9 1.3 2h.1l-.1-2.4v-12.5h3.6v22.1H54zM71.5 308.1v18.3h-4.1v-18.3h-6.2l.1-3.8h16.4l.1 3.8h-6.3zM96.7 322.8l-.1 3.6H82v-22.1h14.2l.1 3.7H86.2v5.3h8.6v3.3h-8.6v6.1h10.5v.1zM113.4 316.9l5.5 9.5H114l-4.4-8.7h-3.8v8.7h-4.1v-22.1h7.8c5.2 0 7.7 2.1 7.7 6.6.1 3.3-1.3 5.4-3.8 6zm-3.7-9.1h-3.8v6.8h3.7c2.5 0 3.6-.8 3.6-3.5-.1-2.5-1.1-3.3-3.5-3.3zM137.5 326.4l-9.4-13.5-1.3-2h-.1v15.5h-3.6v-22.1h3.5l8.8 12.9 1.3 2h.1l-.1-2.4v-12.5h3.6v22.1h-2.8zM159.3 321.7h-8.8l-1.5 4.7h-4.3l7.9-22.1h4.9l7.9 22.1h-4.6l-1.5-4.7zm-5.1-12.1l-2.7 8.6h6.7l-2.7-8.6-.6-2.3h-.1l-.6 2.3zM176.1 308.1v18.3H172v-18.3h-6.2l.1-3.8h16.4l.1 3.8h-6.3zM187 304.3h4.1v22.1H187zM206.4 326.8c-6.7 0-9.5-3.5-9.5-11.5s2.7-11.4 9.5-11.4 9.4 3.4 9.4 11.4c0 8.2-2.7 11.5-9.4 11.5zm-.1-19.1c-3.8 0-5.2 1.6-5.2 7.7s1.4 7.7 5.2 7.7c3.8 0 5.2-1.7 5.2-7.7 0-6.2-1.3-7.7-5.2-7.7zM235.7 326.4l-9.4-13.5-1.3-2h-.1v15.5h-3.6v-22.1h3.5l8.8 12.9 1.3 2h.1l-.1-2.4v-12.5h3.6v22.1h-2.8zM257.4 321.7h-8.8l-1.5 4.7h-4.3l7.9-22.1h4.9l7.9 22.1h-4.6l-1.5-4.7zm-5.1-12.1l-2.7 8.6h6.7l-2.7-8.6-.6-2.3-.7 2.3zM281.4 322.7l-.1 3.7h-13.7v-22.1h4.1v18.4h9.7zM506.3 281.7c-7 0-13.4-1.7-18.6-4.5l1.8-11.6c5.3 2.8 10.8 4.4 16.7 4.4 6.6 0 9.5-2.4 9.5-6.6 0-9.5-27.7-5.5-27.7-25.6 0-10.2 6.6-18.5 21.8-18.5 5.9 0 12.2 1.2 16.9 3.1l-1.7 11.4c-5-1.6-10-2.6-14.5-2.6-7.5 0-9.5 2.6-9.5 5.8 0 9.4 27.7 5.1 27.7 25.4-.1 12-8.4 19.3-22.4 19.3zM575 268.9h-21.8l-3.4 11.7h-14.3l20.8-60.2h16.1l21 60.2h-15.1l-3.3-11.7zm-12.5-32l-6 20.6h15.3l-5.8-20.6-1.6-6.3h-.2l-1.7 6.3zM643.7 268.4l-.3 12.2h-38.1v-60.2h13.6v48h24.8zM672.5 281.7c-7 0-13.4-1.7-18.6-4.5l1.8-11.6c5.3 2.8 10.8 4.4 16.7 4.4 6.6 0 9.5-2.4 9.5-6.6 0-9.5-27.7-5.5-27.7-25.6 0-10.2 6.6-18.5 21.8-18.5 5.9 0 12.2 1.2 16.9 3.1l-1.7 11.4c-5-1.6-10-2.6-14.5-2.6-7.5 0-9.5 2.6-9.5 5.8 0 9.4 27.7 5.1 27.7 25.4 0 12-8.3 19.3-22.4 19.3zM741.3 268.9h-21.8l-3.4 11.7h-14.3l20.8-60.2h16.1l21 60.2h-15.1l-3.3-11.7zm-12.5-32l-6 20.6h15.3l-5.8-20.6-1.6-6.3h-.2l-1.7 6.3z" fillRule="nonzero" />
    <g>
      <path d="M515 308.5c-1.2-.4-2.8-.8-4.5-.8-4.3 0-5.9 1.8-5.9 7.5 0 6.1 1.7 7.9 6 7.9 1.7 0 3.2-.4 4.5-.9l.5 3.4c-1.4.7-3.5 1.2-5.5 1.2-6.6 0-9.8-3.7-9.8-11.6 0-7.5 3.1-11.3 10-11.3 1.8 0 3.9.4 5.1 1l-.4 3.6z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M528.5 326.8c-6.7 0-9.5-3.5-9.5-11.5s2.7-11.4 9.5-11.4 9.4 3.4 9.4 11.4c0 8.2-2.6 11.5-9.4 11.5zm0-19.1c-3.8 0-5.2 1.6-5.2 7.7s1.4 7.7 5.2 7.7c3.8 0 5.2-1.7 5.2-7.7 0-6.2-1.4-7.7-5.2-7.7z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M557.8 326.4l-9.4-13.5-1.3-2h-.1v15.5h-3.6v-22.1h3.5l8.8 12.9 1.3 2h.1l-.1-2.4v-12.5h3.6v22.1h-2.8z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M582.9 325.6c-1.6.7-4.1 1.2-6.5 1.2-7.3 0-10.3-3.7-10.3-11.4 0-7.9 3.2-11.5 10.4-11.5 2.1 0 4.4.4 6 1l-.4 3.6c-1.5-.6-3.5-1-5.4-1-4.6 0-6.3 1.8-6.3 7.8s1.6 7.7 5.9 7.7c1.2 0 2.2-.1 3-.4v-8.1h3.6v11.1z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M600 316.9l5.5 9.5h-4.8l-4.4-8.7h-3.8v8.7h-4.1v-22.1h7.8c5.2 0 7.7 2.1 7.7 6.6.1 3.3-1.3 5.4-3.9 6zm-3.7-9.1h-3.8v6.8h3.7c2.5 0 3.6-.8 3.6-3.5 0-2.5-1-3.3-3.5-3.3z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M624.4 322.8l-.1 3.6h-14.6v-22.1h14.2l.1 3.7h-10.1v5.3h8.6v3.3h-8.6v6.1h10.5v.1z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M635.1 326.8c-2.5 0-4.8-.6-6.7-1.7l.6-3.6c1.9 1.1 3.8 1.7 6.1 1.7 2.7 0 4-1.1 4-3 0-4.2-10.5-2.4-10.5-9.8 0-3.6 2.3-6.5 7.7-6.5 2.2 0 4.4.4 6 1.2l-.5 3.5c-1.8-.6-3.5-1-5.3-1-3 0-4 1.2-4 2.6 0 4 10.5 2.2 10.5 9.7 0 4.3-2.9 6.9-7.9 6.9z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M653.1 326.8c-2.5 0-4.8-.6-6.7-1.7l.6-3.6c1.9 1.1 3.8 1.7 6.1 1.7 2.7 0 4-1.1 4-3 0-4.2-10.5-2.4-10.5-9.8 0-3.6 2.3-6.5 7.7-6.5 2.2 0 4.4.4 6 1.2l-.5 3.5c-1.8-.6-3.5-1-5.3-1-3 0-4 1.2-4 2.6 0 4 10.5 2.2 10.5 9.7 0 4.3-2.9 6.9-7.9 6.9z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M680.8 322.7l9.3.1-.1 3.6h-14.5v-2.7c5.5-5.3 10.4-9.4 10.4-13 0-1.8-1.2-3.1-4-3.1-2 0-3.9.8-5.5 2l-1-3.3c1.8-1.4 4.2-2.4 7.2-2.4 4.9 0 7.4 2.5 7.4 6.3.1 4.4-3.7 8-9.2 12.5z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M703.2 326.8c-5.7 0-8.1-3.3-8.1-11.3 0-8.3 2.4-11.4 8.1-11.4 5.6 0 8.1 3 8.1 11.4 0 8-2.5 11.3-8.1 11.3zm0-19.2c-2.9 0-4.2 1.4-4.2 7.8 0 6.6 1.3 7.8 4.2 7.8 2.9 0 4.2-1.3 4.2-7.9 0-6.4-1.3-7.7-4.2-7.7z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M719.2 323.5h3.6v-11.8l.1-2.4-.1-.1-2 1.3-2.3 1.4-.4-3.4 6.4-4.2h2.4v19.2h3.5v2.9h-11.1v-2.9h-.1z" fillRule="nonzero" />
    </g>
    <g>
      <path d="M742.9 326.7c-2.2 0-3.7-.3-5.4-1l.6-3.3c1.4.6 2.8.9 4.5.9 3.8 0 5.4-2 5.7-6.7l-.1-.1c-1.3 1-2.9 1.4-4.9 1.4-4.8 0-7-2.7-7-6.7 0-4.4 2.4-7.2 7.6-7.2 5.2 0 8.1 3.4 8.1 10.4 0 8.7-3 12.3-9.1 12.3zm.9-19.2c-2.5 0-3.8 1.2-3.8 3.6 0 2.4 1.2 3.7 4 3.7 1.7 0 3.2-.5 4.1-1.7-.1-4.2-1.7-5.6-4.3-5.6z" fillRule="nonzero" />
    </g>
  </svg>
);