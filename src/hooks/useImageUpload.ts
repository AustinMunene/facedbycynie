import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../config/firebase';

export function useImageUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File, path: string): Promise<string> => {
    setIsUploading(true);
    setError(null);
    
    try {
      const storageRef = ref(storage, `${path}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (err) {
      setError('Failed to upload image');
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  const deleteImage = async (url: string) => {
    try {
      const imageRef = ref(storage, url);
      await deleteObject(imageRef);
    } catch (err) {
      setError('Failed to delete image');
      throw err;
    }
  };

  return { uploadImage, deleteImage, isUploading, error };
}