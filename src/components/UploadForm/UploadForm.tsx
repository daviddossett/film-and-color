import React, { useState } from 'react';
import './UploadForm.css';
import { ProgressBar } from '../ProgressBar/ProgressBar';

interface UploadFormProps {
  className?: string;
}

export const UploadForm: React.FC<UploadFormProps> = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const allowedImageTypes = ['image/png', 'image/jpeg'];

  function handleChange(e: any) {
    let selectedFile = e.target.files[0];

    if (selectedFile && allowedImageTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      setFile(null);
      setError('Please upload a PNG or JPEG file');
    }
  }

  return (
    <form>
      <input type={'file'} onChange={handleChange} />
      {error && <p>{error}</p>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </form>
  );
};
