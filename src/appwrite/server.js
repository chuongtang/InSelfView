import dotenv from 'dotenv';

export const Server = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  project: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  collectionID: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  bucketID: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};