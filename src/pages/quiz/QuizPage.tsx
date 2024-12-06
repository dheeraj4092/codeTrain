import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuizStore } from '../../store/quizStore';
import { QuizCard } from '../../components/quiz/QuizCard';
import { QuizQuestion } from '../../components/quiz/QuizQuestion';

export function QuizPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const { quizzes, currentQuiz, loading, error, fetchQuizzes, startQuiz, submitAnswer } = useQuizStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (courseId) {
      fetchQuizzes(courseId);
    }
  }, [courseId, fetchQuizzes]);

  if (loading) return <div>Loading quizzes...</div>;
  if (error) return <div>Error: {error}</div>;

  if (currentQuiz) {
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{currentQuiz.title}</h2>
          <p className="text-gray-600">
            Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}
          </p>
        </div>

        <QuizQuestion
          question={currentQuestion}
          onAnswer={async (answer) => {
            await submitAnswer(currentQuestion.id, answer);
            if (currentQuestionIndex < currentQuiz.questions.length - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
          }}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
            onStart={() => startQuiz(quiz.id)}
          />
        ))}
      </div>
    </div>
  );
}