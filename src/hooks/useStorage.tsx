import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';

export const useStorage = (file: any) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<any>(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // References
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentUploaded = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentUploaded);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url: url, createdAt: createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};
