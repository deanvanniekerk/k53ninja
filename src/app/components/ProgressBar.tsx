import { TEXT_COLOR } from '@/data';
import { hexToRgb } from '@/utils/color';
import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

type Props = {
  progress: number;
  backgroundColor?: string;
  backgroundOpacity?: number;
  foregroundColor?: string;
  foregroundOpacity?: number;
  height?: number;
};

const ProgressBar: React.FC<Props> = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(props.progress);
    }, 100);
  }, [props.progress]);

  return (
    <div className="container">
      <div
        className="progressBar"
        style={{
          backgroundColor: `rgba(${hexToRgb(props.backgroundColor || TEXT_COLOR).join(',')}, ${
            props.backgroundOpacity
          })`,
          height: props.height,
          borderRadius: props.height,
        }}
      >
        <div
          className="completeBar"
          style={{
            backgroundColor: `rgba(${hexToRgb(props.foregroundColor || TEXT_COLOR).join(',')}, ${
              props.foregroundOpacity
            })`,
            width: `${progress}%`,
            height: props.height,
            borderRadius: props.height,
            transition: 'width 0.3s ease',
          }}
        ></div>
      </div>
    </div>
  );
};
ProgressBar.defaultProps = {
  backgroundOpacity: 0.2,
  backgroundColor: '#000000',
  foregroundOpacity: 0.8,
  foregroundColor: TEXT_COLOR,
  height: 4,
};

export { ProgressBar };
