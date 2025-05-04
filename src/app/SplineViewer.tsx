import React, { useEffect } from 'react';

export default function SplineViewer() {
  useEffect(() => {
    // @ts-expect-error: No types for @splinetool/viewer
    import('@splinetool/viewer');
  }, []);
  // @ts-expect-error: 'spline-viewer' is a custom element
  return (
    <spline-viewer url="https://prod.spline.design/UWoeqiir20o49Dah/scene.splinecode"></spline-viewer>
  );
} 