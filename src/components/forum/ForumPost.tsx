import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Reply, Trash2 } from 'lucide-react';
import { ForumPost as IForumPost } from '../../types';
import { useAuthStore } from '../../store/authStore';
import { useForumStore } from '../../store/ForumStore.ts';
import { format } from 'date-fns';

interface ForumPostProps {
  post: IForumPost;
}

export function ForumPost({ post }: ForumPostProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const { user } = useAuthStore();
  const { createReply, deletePost, deleteReply } = useForumStore();

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyContent.trim()) return;

    await createReply(post.id, {
      postId: post.id,
      userId: user!.id,
      content: replyContent,
    });
    setReplyContent('');
    setIsReplying(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Posted by {post.userId} on {format(new Date(post.createdAt), 'MMM d, yyyy')}
          </p>
        </div>
        {user?.id === post.userId && (
          <button
            onClick={() => deletePost(post.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        )}
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>

      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={() => setIsReplying(!isReplying)}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <Reply className="h-4 w-4 mr-1" />
          Reply
        </button>
      </div>

      {isReplying && (
        <form onSubmit={handleReply} className="mb-4">
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Write your reply..."
            rows={3}
          />
          <div className="flex justify-end space-x-2 mt-2">
            <button
              type="button"
              onClick={() => setIsReplying(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Post Reply
            </button>
          </div>
        </form>
      )}

      {post.replies.length > 0 && (
        <div className="ml-8 space-y-4">
          {post.replies.map((reply) => (
            <div key={reply.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {reply.userId} replied on {format(new Date(reply.createdAt), 'MMM d, yyyy')}
                </p>
                {user?.id === reply.userId && (
                  <button
                    onClick={() => deleteReply(post.id, reply.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{reply.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}