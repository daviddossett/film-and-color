import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

export const useFirestore = (collection: string) => {
  const [documents, setDocuments] = useState<any>([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot: any) => {
        let documents: any[] = [];
        snapshot.forEach((doc: any) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(documents);
      });

    return () => unsub();
  }, [collection]);

  return { documents };
};
