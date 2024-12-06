import React, { useState } from 'react';
import { Question } from '../../types';
import { CodeEditor } from '../editor/CodeEditor';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: string | string[]) => void;
}

export function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    if (question.type === 'coding') {
      onAnswer(code);
    } else {
      onAnswer(selectedAnswers);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{question.text}</h3>

      {question.type === 'multiple-choice' ? (
        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <label key={index} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedAnswers.includes(option)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedAnswers([...selectedAnswers, option]);
                  } else {
                    setSelectedAnswers(selectedAnswers.filter(a => a !== option));
                  }
                }}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      ) : (
        <div className="mb-4">
          <CodeEditor
            value={code}
            onChange={setCode}
            language="java"
            height="300px"
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit Answer
      </button>
    </div>
  );
}