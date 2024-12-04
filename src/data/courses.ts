export interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    topics: string[];
    instructor: {
      name: string;
      title: string;
      image: string;
      bio: string;
    };
    price: number;
    image: string;
  }
  
  export const courses: Course[] = [
    {
      id: 'java-programming',
      title: 'Advanced Java Programming',
      description: 'Master Java programming with hands-on projects and real-world applications. Learn core concepts, design patterns, and best practices for enterprise development.',
      duration: '12 weeks',
      level: 'Intermediate to Advanced',
      topics: [
        'Core Java Fundamentals',
        'Object-Oriented Programming',
        'Design Patterns',
        'Spring Framework',
        'Microservices Architecture',
        'REST API Development',
        'Unit Testing with JUnit',
        'Database Integration'
      ],
      instructor: {
        name: 'Dr. James Wilson',
        title: 'Senior Java Developer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: '15+ years of experience in Java development and enterprise architecture. Former tech lead at major tech companies.'
      },
      price: 999,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 'automation-testing',
      title: 'Automation Testing Masterclass',
      description: 'Comprehensive course on automation testing covering Selenium, TestNG, and CI/CD integration. Learn to build robust test frameworks.',
      duration: '10 weeks',
      level: 'Beginner to Intermediate',
      topics: [
        'Selenium WebDriver',
        'TestNG Framework',
        'Page Object Model',
        'Data-Driven Testing',
        'CI/CD Integration',
        'API Testing',
        'Performance Testing Basics',
        'Test Reporting'
      ],
      instructor: {
        name: 'Emily Chen',
        title: 'QA Automation Lead',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: '10+ years of experience in test automation. Certified Scrum Master and automation specialist.'
      },
      price: 899,
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 'sql-mastery',
      title: 'SQL Database Mastery',
      description: 'Deep dive into SQL databases, optimization techniques, and advanced querying. Learn to design efficient database schemas and write complex queries.',
      duration: '8 weeks',
      level: 'All Levels',
      topics: [
        'Database Design',
        'Advanced SQL Queries',
        'Performance Optimization',
        'Indexing Strategies',
        'Stored Procedures',
        'Transaction Management',
        'Database Security',
        'Backup and Recovery'
      ],
      instructor: {
        name: 'Maria Garcia',
        title: 'Database Architect',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: '12+ years of experience in database administration and optimization. Oracle certified professional.'
      },
      price: 799,
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];