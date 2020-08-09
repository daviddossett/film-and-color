import React, { useEffect } from 'react';
import { useStorage } from '../../hooks/useStorage';
import './ProgressBar.css';

interface ProgressBarProps {
  file: any;
  setFile: any;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className={'progressBar'} style={{ width: progress + '%' }} />;
};
