import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={3}
    width={350}
    height={739}
    viewBox="0 0 350 739"
    backgroundColor="#f7f7f7"
    foregroundColor="#e1f5d6"
    {...props}
  >
    <rect x="122" y="215" rx="0" ry="0" width="1" height="1" />
    <rect x="144" y="208" rx="0" ry="0" width="1" height="0" />
    <rect x="392" y="71" rx="0" ry="0" width="1" height="6" />
    <rect x="169" y="706" rx="0" ry="0" width="5" height="0" />
    <rect x="0" y="0" rx="0" ry="0" width="350" height="738" />
    <rect x="41" y="33" rx="0" ry="0" width="244" height="170" />
  </ContentLoader>
)

export default Skeleton;