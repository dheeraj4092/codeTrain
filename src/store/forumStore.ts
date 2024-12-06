import { create } from 'zustand';
import { ForumPost, ForumReply } from '../types';

interface ForumState {
  posts: ForumPost[];
  loading: boolean;
  error: string | null;
  fetchPosts: (courseId: string) => Promise<void>;
  createPost: (post: Omit<ForumPost, 'id' | 'createdAt' | 'updatedAt' | 'replies'>) => Promise<void>;
  createReply: (postId: string, reply: Omit<ForumReply, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
  deleteReply: (postId: string, replyId: string) => Promise<void>;
}

export const useForumStore = create<ForumState>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async (courseId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/courses/${courseId}/forum`);
      if (!response.ok) throw new Error('Failed to fetch forum posts');
      const data = await response.json();
      set({ posts: data });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  createPost: async (post) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/forum/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(post),
      });
      if (!response.ok) throw new Error('Failed to create post');
      const newPost = await response.json();
      set(state => ({ posts: [newPost, ...state.posts] }));
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  createReply: async (postId, reply) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/forum/posts/${postId}/replies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(reply),
      });
      if (!response.ok) throw new Error('Failed to create reply');
      const newReply = await response.json();
      set(state => ({
        posts: state.posts.map(post =>
          post.id === postId
            ? { ...post, replies: [...post.replies, newReply] }
            : post
        ),
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  deletePost: async (postId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/forum/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Failed to delete post');
      set(state => ({
        posts: state.posts.filter(post => post.id !== postId),
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  deleteReply: async (postId: string, replyId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/forum/posts/${postId}/replies/${replyId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Failed to delete reply');
      set(state => ({
        posts: state.posts.map(post =>
          post.id === postId
            ? { ...post, replies: post.replies.filter(reply => reply.id !== replyId) }
            : post
        ),
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },
}));