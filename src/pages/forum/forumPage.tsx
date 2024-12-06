import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForumStore } from '../../store/ForumStore';
import { ForumPost as ForumPostComponent } from '../../components/forum/ForumPost';
import { Plus } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export function ForumPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const { posts, loading, error, fetchPosts, createPost } = useForumStore();
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  useEffect(() => {
    if (courseId) {
      fetchPosts(courseId);
    }
  }, [courseId, fetchPosts]);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    await createPost({
      courseId: courseId!,
      userId: 'current-user', // This should come from auth store
      title: newPostTitle,
      content: newPostContent,
    });
    setIsNewPostOpen(false);
    setNewPostTitle('');
    setNewPostContent('');
  };

  if (loading) return <div>Loading forum...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Course Forum</h1>
        <button
          onClick={() => setIsNewPostOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Post
        </button>
      </div>

      <Dialog.Root open={isNewPostOpen} onOpenChange={setIsNewPostOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <Dialog.Title className="text-xl font-semibold mb-4">Create New Post</Dialog.Title>
            <form onSubmit={handleCreatePost}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  rows={5}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsNewPostOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Create Post
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="space-y-6">
        {posts.map((post) => (
          <ForumPostComponent key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}