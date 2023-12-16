import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    width={207}
    height={292}
    viewBox="0 0 207 292"
    backgroundColor="#cfcece"
    foregroundColor="#f3f2f2"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="200" height="145" />
    <rect x="-1" y="162" rx="5" ry="5" width="200" height="20" />
    <rect x="0" y="204" rx="2" ry="2" width="200" height="38" />
    <rect x="-3" y="255" rx="10" ry="10" width="91" height="36" />
    <rect x="222" y="253" rx="5" ry="5" width="56" height="27" />
    <rect x="152" y="261" rx="5" ry="5" width="51" height="28" />
  </ContentLoader>
);

export default Skeleton;
