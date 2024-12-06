export interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'instructor' | 'admin' | 'moderator';
    enrolledCourses?: string[];
    preferences?: UserPreferences;
  }
  
  export interface UserPreferences {
    darkMode: boolean;
    notifications: boolean;
    emailReminders: boolean;
  }
  
  export interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    topics: string[];
    instructor: {
      id: string;
      name: string;
      title: string;
      image: string;
      bio: string;
    };
    price: number;
    image: string;
    schedule?: Schedule[];
  }
  
  export interface Schedule {
    id: string;
    courseId: string;
    title: string;
    startTime: Date;
    endTime: Date;
    meetingLink?: string;
    description?: string;
  }
  
  export interface Quiz {
    id: string;
    courseId: string;
    title: string;
    description: string;
    questions: Question[];
    timeLimit: number;
    passingScore: number;
  }
  
  export interface Question {
    id: string;
    text: string;
    type: 'multiple-choice' | 'coding';
    options?: string[];
    correctAnswer: string | string[];
    points: number;
  }
  
  export interface ForumPost {
    id: string;
    courseId: string;
    userId: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    replies: ForumReply[];
  }
  
  export interface ForumReply {
    id: string;
    postId: string;
    userId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }