import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { BlogPost } from '../types/blog';

export const blogService = {
  async createPost(post: Omit<BlogPost, 'id'>) {
    const docRef = await addDoc(collection(db, 'blog-posts'), post);
    return docRef.id;
  },

  async updatePost(id: string, post: Partial<BlogPost>) {
    await updateDoc(doc(db, 'blog-posts', id), post);
  },

  async deletePost(id: string) {
    await deleteDoc(doc(db, 'blog-posts', id));
  },

  async getAllPosts(): Promise<BlogPost[]> {
    const snapshot = await getDocs(collection(db, 'blog-posts'));
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BlogPost));
  }
};