import React from 'react';
import { Clock, Award } from 'lucide-react';
import { Quiz } from '../../types';
import { useQuizStore } from '../../store/quizStore';

interface QuizCardProps {
  quiz: Quiz;
  onStart: () => void;
}

export function QuizCard({ quiz, onStart }: QuizCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{quiz.title}</h3>
      <p className="text-gray-600 mb-4">{quiz.description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-gray-500">
          <Clock className="h-5 w-5 mr-2" />
          <span>{quiz.timeLimit} minutes</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Award className="h-5 w-5 mr-2" />
          <span>Pass: {quiz.passingScore}%</span>
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Start Quiz
      </button>
    </div>
  );
}