import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={450}
    viewBox="0 0 400 450"
    backgroundColor="#f9f6f6"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="67" y="8" rx="15" ry="15" width="276" height="209" />
    <rect x="118" y="229" rx="10" ry="10" width="173" height="26" />
    <rect x="80" y="267" rx="15" ry="15" width="247" height="81" />
  </ContentLoader>
);

export default Skeleton;
