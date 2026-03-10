import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="120" y="458" rx="0" ry="0" width="0" height="1" />
    <circle cx="141" cy="145" r="116" />
    <rect x="1" y="275" rx="15" ry="15" width="280" height="32" />
    <rect x="79" y="265" rx="0" ry="0" width="3" height="0" />
    <rect x="111" y="255" rx="0" ry="0" width="9" height="2" />
    <rect x="33" y="262" rx="0" ry="0" width="33" height="0" />
    <rect x="84" y="282" rx="0" ry="0" width="4" height="4" />
    <rect x="71" y="348" rx="0" ry="0" width="2" height="1" />
    <rect x="1" y="321" rx="11" ry="11" width="280" height="88" />
    <rect x="15" y="424" rx="10" ry="10" width="95" height="30" />
    <rect x="129" y="420" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
