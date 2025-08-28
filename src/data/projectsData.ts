import { Brain, Code, Database, Users, Zap, CheckCircle, Star, Layers, Smartphone } from 'lucide-react';
import { TbChartInfographic, TbTargetArrow, TbSum, TbActivity, TbClock, TbGauge, TbSearch, TbLock } from 'react-icons/tb';

// Category order and labels for filter toggler (customize as needed)
export const categoryOrder: { id: string; label: string }[] = [
  { id: 'ai', label: 'AI/ML' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'mobile', label: 'Mobile' },
];

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  previewOption: string;
  apiTesting?: {
    header: string;
    endpoint: string;
    authentication: {
      heading: string;
      method: string;
      bearerToken: string;
    };
    demoData: {
      portal: {
        heading: string;
        description: string;
        requestBody: string;
      };
      curl: {
        heading: string;
        description: string;
        requestBody: string;
      };
    };
  };
  previewImages: string[];
  animatedPreview: string;
  tags: string[];
  category: string; // Currently Available Categories: ai, fullstack
  github: string;
  live: string;
  icon: any;
  timeline: string;
  team: string;
  status: string;
  overview: string;
  highlights: string[];
  technicalDetails: Record<string, string>;
  challenges: Array<{
    problem: string;
    solution: string;
  }>;
  metrics: Array<{
    label: string;
    value: string;
    icon: any;
  }>;
  keyFeatures: string[];
}

export const projectsData: Record<number, ProjectData> = {
  1: {
    id: 1,
    title: 'AI-Powered Chat Application',
    subtitle: 'Artificial Intelligence-Powered Real-Time Communication Platform',
    description: 'A sophisticated real-time chat application leveraging OpenAI\'s advanced GPT models to deliver intelligent, context-aware conversations. This enterprise-grade solution features seamless real-time messaging, AI-powered response generation, persistent conversation memory, and comprehensive user management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    previewOption: "previewImages",
    previewImages: [
      'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2UlMjBtb2JpbGV8ZW58MXx8fHwxNzU1Nzg0OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      // 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop'
    ],
    // animatedPreview: 'https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBhbmltYXRpb24lMjBzY3JlZW58ZW58MXx8fHwxNzU1Nzg3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    animatedPreview: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXd0anR5OHppM3l1Zzd3aGo3MGVncXQ1MWJjeXY5cDhzcWo4YmJ0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBsOjMOcdeGJIU8/giphy.gif',
    tags: ['React', 'Node.js', 'OpenAI', 'Socket.io', 'MongoDB', 'JWT', 'Redis'],
    category: 'ai',
    github: 'https://github.com/Coder-Kartikey/',
    live: 'https://wonderlust-o9ym.onrender.com/',
    icon: Brain,
    timeline: '3 months',
    team: 'Solo Project',
    status: 'Production Ready',
    overview: 'Built to handle enterprise-scale communication needs with AI enhancement',
    highlights: [
      'Real-time messaging with sub-100ms latency using Socket.io',
      'GPT-4 integration with intelligent context management',
      'Advanced conversation memory with semantic search',
      'JWT-based authentication with role-based access control',
      'Responsive design optimized for mobile and desktop',
      'Redis caching for optimal performance at scale'
    ],
    technicalDetails: {
      'Frontend Architecture': 'React 18 with TypeScript, Redux Toolkit for state management, Socket.io-client for real-time updates, Tailwind CSS for responsive design',
      'Backend Infrastructure': 'Node.js with Express framework, Socket.io server for WebSocket connections, OpenAI API integration with rate limiting, JWT authentication middleware',
      'Database & Caching': 'MongoDB with optimized indexing for message retrieval, Redis for session management and real-time user presence',
      'AI Integration': 'OpenAI GPT-4 API with custom prompt engineering, conversation context management, intelligent response filtering',
      'DevOps & Deployment': 'Docker containerization, AWS EC2 with auto-scaling, Nginx reverse proxy, CI/CD pipeline with GitHub Actions'
    },
    challenges: [
      {
        problem: 'Managing conversation context while respecting OpenAI token limits',
        solution: 'Implemented intelligent context windowing with semantic importance scoring to retain the most relevant conversation history'
      },
      {
        problem: 'Maintaining real-time performance during AI processing delays',
        solution: 'Added optimistic UI updates, typing indicators, and progressive message loading to enhance perceived performance'
      },
      {
        problem: 'Scaling WebSocket connections for concurrent users',
        solution: 'Implemented Redis adapter for Socket.io clustering and horizontal scaling across multiple server instances'
      }
    ],
    metrics: [
      { label: 'Response Time', value: '<500ms', icon: Zap },
      { label: 'Uptime', value: '99.9%', icon: CheckCircle },
      { label: 'User Satisfaction', value: '4.8/5', icon: Star },
      { label: 'Concurrent Users', value: '1000+', icon: Users }
    ],
    keyFeatures: [
      'Intelligent AI Responses',
      'Real-time Messaging',
      'Context-Aware Conversations',
      'Multi-device Sync',
      'Advanced User Management',
      'Enterprise Security'
    ]
  },
  2: {
    id: 2,
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack E-Commerce Solution with Advanced Analytics',
    description: 'A comprehensive, scalable e-commerce platform featuring modern UI/UX design, secure payment processing, intelligent inventory management, and powerful admin analytics dashboard. Built with performance, security, and user experience as core priorities.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
    previewOption: "previewImages",
    previewImages: [
      'https://images.unsplash.com/photo-1629963918958-1b62cfe3fe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU1NjkyODYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
      // 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
    ],
    // animatedPreview: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHR5cGluZ3xlbnwxfHx8fDE3NTU3ODcxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    animatedPreview: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamM1YjV6OGV4YWRmMWRnOGZxbms0cHJ2dzlmN3dvMDFoeW5pcGoyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif',
    tags: ['React', 'Express', 'MongoDB', 'Stripe', 'Redux', 'AWS', 'TypeScript'],
    category: 'fullstack',
    github: 'https://github.com/Coder-Kartikey/',
    live: 'https://wonderlust-o9ym.onrender.com/',
    icon: Code,
    timeline: '4 months',
    team: 'Solo Project',
    status: 'Production Ready',
    overview: 'Enterprise-grade e-commerce solution with advanced analytics and automation',
    highlights: [
      'Secure Stripe payment integration with fraud protection',
      'Advanced inventory management with automated restocking alerts',
      'Comprehensive admin dashboard with real-time analytics',
      'Order tracking system with automated notifications',
      'Mobile-first responsive design with PWA capabilities',
      'SEO optimized with server-side rendering'
    ],
    technicalDetails: {
      'Frontend Technology': 'React with Redux for state management, React Router for navigation, Styled Components for theming, Progressive Web App features',
      'Backend Services': 'Express.js REST API with middleware authentication, Stripe webhook handling, automated email notifications, file upload processing',
      'Database Design': 'MongoDB with optimized schema design, compound indexing for fast queries, data validation with Mongoose ODM',
      'Payment & Security': 'Stripe payment processing with PCI compliance, JWT tokens with refresh mechanism, rate limiting and request validation',
      'Cloud Infrastructure': 'AWS S3 for image storage with CDN, CloudFront for global content delivery, EC2 with load balancing, automated backups'
    },
    challenges: [
      {
        problem: 'Handling concurrent inventory updates and preventing overselling',
        solution: 'Implemented optimistic locking with database transactions and real-time inventory synchronization across all instances'
      },
      {
        problem: 'Ensuring payment security and PCI compliance',
        solution: 'Integrated Stripe\'s secure payment processing with webhook verification and comprehensive error handling for failed transactions'
      },
      {
        problem: 'Optimizing performance for large product catalogs',
        solution: 'Implemented pagination, image lazy loading, search indexing, and caching strategies to maintain fast load times'
      }
    ],
    metrics: [
      { label: 'Page Load Speed', value: '<2s', icon: Zap },
      { label: 'Conversion Rate', value: '3.2%', icon: CheckCircle },
      { label: 'Mobile Performance', value: '95/100', icon: Database },
      { label: 'Customer Rating', value: '4.7/5', icon: Star }
    ],
    keyFeatures: [
      'Secure Payment Processing',
      'Inventory Management',
      'Order Tracking',
      'Admin Analytics',
      'Mobile Optimization',
      'SEO Friendly'
    ]
  },
  3: {
    id: 3,
    title: 'ML Image Classifier',
    subtitle: 'Advanced Deep Learning Image Recognition System',
    description: 'A sophisticated machine learning application utilizing state-of-the-art deep neural networks for high-accuracy image classification. Features include real-time prediction capabilities, comprehensive model training interface, and detailed analytics dashboard for performance monitoring.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop',
    previewOption: "previewImages",
    previewImages: [
      'https://images.unsplash.com/photo-1717583191083-cd82ed7f217e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc1NTY5Mzg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      // 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop'
    ],
    animatedPreview: 'https://images.unsplash.com/photo-1714846201670-1c5721196c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJtaW5hbCUyMGNvZGluZyUyMG1vbml0b3J8ZW58MXx8fHwxNzU1Nzg3MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'AWS', 'OpenCV', 'Keras'],
    category: 'ai',
    github: 'https://github.com/Coder-Kartikey/',
    live: 'https://wonderlust-o9ym.onrender.com/',
    icon: Brain,
    timeline: '3 months',
    team: 'Solo Project',
    status: 'Production Ready',
    overview: 'Production-ready ML system with 95%+ accuracy for image classification tasks',
    highlights: [
      'Custom CNN architecture achieving 95.2% accuracy on validation data',
      'Real-time image processing with sub-100ms inference time',
      'Interactive model training interface with hyperparameter tuning',
      'Comprehensive analytics dashboard with performance metrics',
      'Scalable deployment architecture with Docker containerization',
      'Transfer learning implementation using ResNet50 pre-trained weights'
    ],
    technicalDetails: {
      'Machine Learning Stack': 'TensorFlow 2.0 with Keras high-level API, custom CNN architecture with residual connections, transfer learning with ResNet50',
      'API & Backend': 'FastAPI for high-performance async API endpoints, background task processing, real-time model inference, automatic API documentation',
      'Image Processing': 'OpenCV for advanced image preprocessing, PIL for image manipulation, data augmentation pipeline for training enhancement',
      'Model Deployment': 'TensorFlow Serving for model versioning, Docker containers for consistent deployment, Kubernetes orchestration for scaling',
      'Cloud & Storage': 'AWS ECS for container orchestration, S3 for model artifact storage, CloudWatch for monitoring and logging'
    },
    challenges: [
      {
        problem: 'Achieving high accuracy with limited training data',
        solution: 'Applied advanced data augmentation techniques and transfer learning with fine-tuning to maximize performance with smaller datasets'
      },
      {
        problem: 'Optimizing inference speed for real-time applications',
        solution: 'Implemented model quantization, TensorFlow Lite optimization, and intelligent caching to achieve sub-100ms response times'
      },
      {
        problem: 'Managing model versions and deployment pipeline',
        solution: 'Built automated MLOps pipeline with model versioning, A/B testing capabilities, and automated rollback mechanisms'
      }
    ],
    metrics: [
      { label: 'Model Accuracy', value: '95.2%', icon: CheckCircle },
      { label: 'Inference Speed', value: '<100ms', icon: Zap },
      { label: 'Model Size', value: '23MB', icon: Database },
      { label: 'Throughput', value: '500 req/s', icon: Layers }
    ],
    keyFeatures: [
      'Deep Learning Models',
      'Real-time Inference',
      'Transfer Learning',
      'Model Analytics',
      'Scalable Deployment',
      'Performance Monitoring'
    ]
  },
  4: {
    id: 4,
    title: 'Task Management App',
    subtitle: 'Collaborative Mobile Task Management',
    description: 'A mobile-first task management application with real-time sync, collaborative features, and push notifications. Built for productivity on the go.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
    previewOption: "previewImages",
    previewImages: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop'
    ],
    animatedPreview: 'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
    tags: ['React Native', 'Firebase', 'Redux'],
    category: 'fullstack',
    github: 'https://github.com/Coder-Kartikey/',
    live: 'http://wonderlust-o9ym.onrender.com/',
    icon: Smartphone,
    timeline: '2 months',
    team: 'Solo Project',
    status: 'Production Ready',
    overview: 'Designed for teams and individuals to manage tasks efficiently across devices.',
    highlights: [
      'Real-time task updates with Firebase Firestore',
      'Push notifications for task deadlines and updates',
      'Offline support with local data caching',
      'Intuitive drag-and-drop task organization',
      'User authentication with Firebase Auth'
    ],
    technicalDetails: {
      'Frontend': 'React Native with Expo, Redux for state management, React Navigation for routing',
      'Backend': 'Firebase Firestore for real-time database, Firebase Auth for user authentication, Firebase Cloud Functions for serverless backend logic',
      'Push Notifications': 'Firebase Cloud Messaging for cross-platform push notifications',
      'Offline Support': 'Redux Persist for local data caching and offline functionality'
    },
    challenges: [
      {
        problem: 'Ensuring real-time data synchronization across devices',
        solution: 'Utilized Firebase Firestore real-time capabilities to sync data instantly'
      },
      {
        problem: 'Managing user authentication and authorization',
        solution: 'Implemented Firebase Auth with email/password and social login options'
      },
      {
        problem: 'Optimizing app performance for mobile devices',
        solution: 'Applied best practices for React Native performance optimization, including lazy loading and memoization'
      }
    ],
    metrics: [
      { label: 'User Engagement', value: '85%', icon: CheckCircle },
      { label: 'Task Completion Rate', value: '90%', icon: CheckCircle },
      { label: 'App Load Time', value: '<200ms', icon: Zap },
      { label: 'Offline Sync Success', value: '100%', icon: CheckCircle }
    ],
    keyFeatures: [
      'Real-time Collaboration',
      'Push Notifications',
      'Offline Support',
      'Cross-platform',
      'Task Reminders',
      'Drag-and-Drop UI'
    ]
  },
  5: {
    id: 5,
    title: 'Data Analytics Dashboard',
    subtitle: 'Interactive Data Visualization Platform',
    description: 'An interactive dashboard for data visualization and analytics with real-time updates and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    previewOption: "previewImages",
    previewImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
    ],
    animatedPreview: 'https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif',
    tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    category: 'ai',
    github: 'https://github.com/Coder-Kartikey/',
    live: 'http://wonderlust-o9ym.onrender.com/',
    icon: Database,
    timeline: '3 months',
    team: 'Solo Project',
    status: 'Production Ready',
    overview: 'Empowering users to visualize and analyze data in real time.',
    highlights: [
      'Real-time data updates with WebSocket',
      'Customizable dashboard widgets',
      'Interactive charts and graphs with D3.js',
      'User authentication and role-based access',
      'Data export options (CSV, PDF)'
    ],
    technicalDetails: {
      'Frontend': 'React with D3.js for data visualization, Redux for state management',
      'Backend': 'Python Flask API, PostgreSQL for database management',
      'Real-time Updates': 'WebSocket for real-time data push',
      'Authentication': 'JWT-based authentication with role management'
    },
    challenges: [
      {
        problem: 'Handling large datasets efficiently',
        solution: 'Implemented server-side pagination and data caching'
      },
      {
        problem: 'Ensuring real-time data accuracy',
        solution: 'Utilized WebSocket for instant data updates'
      },
      {
        problem: 'Creating a responsive and intuitive UI',
        solution: 'Applied best practices in UX design and testing'
      }
    ],
    metrics: [
      { label: 'User Engagement', value: '80%', icon: CheckCircle },
      { label: 'Data Load Time', value: '<100ms', icon: Zap },
      { label: 'Dashboard Customization', value: '95%', icon: CheckCircle },
      { label: 'Real-time Update Success', value: '100%', icon: CheckCircle }
    ],
    keyFeatures: [
      'Customizable Dashboards',
      'Real-time Data Visualization',
      'Interactive Charts',
      'User Authentication',
      'Data Export Options'
    ]
  },
  6: {
    id: 6,
    title: 'AI Content Generator',
    subtitle: 'Automated Content Creation Tool',
    description: 'A powerful AI-driven tool for generating high-quality content in various formats, including articles, blogs, and social media posts.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
    previewOption: "previewImages",
    previewImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
    ],
    animatedPreview: 'https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif',
    tags: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    category: 'ai',
    github: 'https://github.com/Coder-Kartikey/',
    live: 'http://wonderlust-o9ym.onrender.com/',
    icon: Code,
    timeline: '4 months',
    team: 'Solo Project',
    status: 'Production Ready',
    overview: 'Empowering users to create content effortlessly with AI.',
    highlights: [
      'AI-driven content generation with GPT-3',
      'Supports multiple content formats (text, image, video)',
      'User-friendly interface with real-time previews',
      'Customizable templates for different content types'
    ],
    technicalDetails: {
      'Frontend': 'React with Tailwind CSS for styling',
      'Backend': 'Node.js with Express, MongoDB for database management',
      'AI Integration': 'OpenAI API for content generation',
      'Authentication': 'JWT-based authentication with role management'
    },
    challenges: [
      {
        problem: 'Ensuring content quality and relevance',
        solution: 'Implemented user feedback loop and content moderation tools'
      },
      {
        problem: 'Handling diverse content formats',
        solution: 'Developed modular architecture for content processing'
      },
      {
        problem: 'Scaling AI model for real-time usage',
        solution: 'Utilized serverless functions for on-demand processing'
      }
    ],
    metrics: [
      { label: 'User Engagement', value: '75%', icon: CheckCircle },
      { label: 'Content Generation Speed', value: '<5s', icon: Zap },
      { label: 'Template Customization', value: '90%', icon: CheckCircle },
      { label: 'AI Accuracy', value: '85%', icon: CheckCircle }
    ],
    keyFeatures: [
      'AI-Powered Content Generation',
      'Multi-Format Support',
      'Real-time Previews',
      'Customizable Templates',
      'User Feedback Integration'
    ]
  },
  7: {
    id: 7,
    title: "Warden AI",
    subtitle: "A CNN-based Image Classifier for Early Wildfire Detection",
    description: "This project leverages a custom-built Convolutional Neural Network (CNN) to accurately classify fire and non-fire images from aerial and ground-level sources. It's designed as a scalable proof-of-concept for early warning systems to aid in rapid disaster response.",
    image: "https://images.unsplash.com/photo-1628197768574-e1b1e9b6f1a8?q=80&w=1953&auto=format&fit=crop",
    previewOption: "previewImages",
    previewImages: [
      "https://images.unsplash.com/photo-1562285116-235a9f244195?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628197768574-e1b1e9b6f1a8?q=80&w=1953&auto=format&fit=crop"
    ],
    animatedPreview: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2RtaHhlZnZidmR2OXlscHk3dDVoaDk2bHV1Z3p6aW9wOWJmaHczNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L8yQ02hI2w5sQ/giphy.gif",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Deep Learning", "CNN"],
    category: 'ai',
    github: "https://github.com/Coder-Kartikey/Forest_Fire_Detection_using_DL",
    live: "",
    // https://colab.research.google.com/drive/1EsyB40L9MNr62ahhmZXAaC_f1hLIrIvi?usp=sharing
    icon: Brain,
    timeline: "3 Months",
    team: "Individual Project",
    status: "Completed",
    overview: "A high-accuracy image classifier designed for early wildfire detection from aerial imagery to enable rapid disaster response.",
    highlights: [
      "Custom CNN Model",
      "High Classification Accuracy",
      "Robust Image Preprocessing",
      "Scalable Data Pipeline"
    ],
    technicalDetails: {
      CoreFrameworks: "TensorFlow backend with the Keras API for rapid model prototyping and training.",
      Language: "Python, chosen for its extensive data science and machine learning ecosystem.",
      KeyLibraries: "NumPy for data handling, OpenCV for image processing, and Matplotlib for visualization.",
      ModelArchitecture: "Custom Sequential CNN with Conv2D, MaxPooling, and Dropout layers for classification.",
      Environment: "Developed in Jupyter Notebooks and trained on Google Colab with GPU acceleration.",
      Dataset: "Trained on a diverse, open-source dataset of labeled fire & non-fire images."
    },
    challenges: [
      {
        problem: "The initial model struggled with false positives, often misclassifying sunsets or fog as fires.",
        solution: "I solved this by implementing targeted data augmentation—adjusting brightness, contrast, and adding varied non-fire examples—to help the model learn more robust and distinguishing features."
      },
      {
        problem: "Overfitting was a significant issue due to the limited size of the initial dataset.",
        solution: "To combat this, I introduced Dropout layers in the CNN architecture, which randomly deactivates neurons during training to prevent over-reliance on specific features and improve generalization."
      }
    ],
    metrics: [
      {
        label: "Validation Accuracy",
        value: "92%",
        icon: TbChartInfographic
      },
      {
        label: "Precision",
        value: "91%",
        icon: TbTargetArrow
      },
      {
        label: "Recall",
        value: "90%",
        icon: TbActivity
      },
      {
        label: "F1-Score",
        value: "90.5%",
        icon: TbSum
      }
    ],
    keyFeatures: [
      "Binary Image Classification",
      "Data Augmentation",
      "Custom CNN",
      "End-to-End Evaluation"
    ]
  },
  8: {
    id: 8,
    title: "INSIGHT ENGINE",
    subtitle: "An Intelligent Query-Retrieval System for Unstructured Documents",
    description: "Built for the multi-level Bajaj Finserv HackRx 6.0 challenge, this high-throughput API uses a sophisticated RAG pipeline to answer natural language questions from large documents. The system successfully passed Level 4 testing, demonstrating its capability under demanding performance benchmarks.",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
    previewOption: "apiTesting",
    // apiTesting: {
    //   header: "API Testing",
    //   bearerTocken: "b7be0d0c6cb51a6c84e190a66d4542526361d32d3df9035b4c8a00b9198df385",
    //   demoData: {
    //     default: {
    //       heading: "Testing on My portal",
    //       requests: `{
    //            "documents": "https://hackrx.blob.core.windows.net/assets/policy.pdf?sv=2023-01-03&st=2025-07-04T09%3A11%3A24Z&se=2027-07-05T09%3A11%3A00Z&sr=b&sp=r&sig=N4a9OU0w0QXO6AOIBiu4bpl7AXvEZogeT%2FjUHNO7HzQ%3D",
    //            "questions": [
    //                "What is the grace period for premium payment under the National Parivar Mediclaim Plus Policy?",
    //                "What is the waiting period for pre-existing diseases (PED) to be covered?",
    //                "Does this policy cover maternity expenses, and what are the conditions?",
    //                "What is the waiting period for cataract surgery?",
    //                "Are the medical expenses for an organ donor covered under this policy?",
    //                "What is the No Claim Discount (NCD) offered in this policy?",
    //                "Is there a benefit for preventive health check-ups?",
    //                "How does the policy define a 'Hospital'?",
    //                "What is the extent of coverage for AYUSH treatments?",
    //                "Are there any sub-limits on room rent and ICU charges for Plan A?"
    //            ]
    //       }`
    //       note: "Use Baerer token for authentication then use demo this in post request body. You can change Document address and questions."
    //     }
    //     custom: {
    //       heading: "Testing on Other API Testing Platforms",
    //       requests: `curl -X POST "https://your-hosted-api-url.com/hackrx/run" \
    //            -H "Content-Type: application/json" \
    //            -H "Authorization: Bearer b7be0d0c6cb51a6c84e190a66d4542526361d32d3df9035b4c8a00b9198df385" \
    //            -d '{
    //              "documents": "https://hackrx.blob.core.windows.net/assets/policy.pdf?sv=2023-01-03&st=2025-07-04T09%3A11%3A24Z&se=2027-07-05T09%3A11%3A00Z&sr=b&sp=r&sig=N4a9OU0w0QXO6AOIBiu4bpl7AXvEZogeT%2FjUHNO7HzQ%3D",
    //              "questions": [
    //                "What is the grace period for premium payment under the National Parivar Mediclaim Plus Policy?",
    //                "What is the waiting period for pre-existing diseases (PED) to be covered?",
    //                "Does this policy cover maternity expenses, and what are the conditions?",
    //                "What is the waiting period for cataract surgery?",
    //                "Are the medical expenses for an organ donor covered under this policy?",
    //                "What is the No Claim Discount (NCD) offered in this policy?",
    //                "Is there a benefit for preventive health check-ups?",
    //                "How does the policy define a 'Hospital'?",
    //                "What is the extent of coverage for AYUSH treatments?",
    //                "Are there any sub-limits on room rent and ICU charges for Plan A?"
    //              ]
    //       }'`
    //       note: "Use this cURL for testing api in other Plateforms like Postman, Hoppscotch. You can change Document address and questions."
    //     }
    //   }
    // },
    apiTesting: {
      header: "Interactive API Endpoint",
      endpoint: "https://your-hosted-api-url.com/hackrx/run", // Add your deployed API URL here
      authentication: {
        heading: "Authentication",
        method: "Bearer Token",
        bearerToken: "b7be0d0c6cb51a6c84e190a66d4542526361d32d3df9035b4c8a00b9198df85" // Corrected token from your code
      },
      demoData: {
        portal: {
          heading: "Test on My Portal",
          description: "Use the Bearer Token above for authentication and paste the JSON below into your request body. Feel free to change the document URL or the questions to test the pipeline with your own data.",
          requestBody: `{
  "documents": "https://hackrx.blob.core.windows.net/assets/policy.pdf?sv=2023-01-03&st=2025-07-04T09%3A11%3A24Z&se=2027-07-05T09%3A11%3A00Z&sr=b&sp=r&sig=N4a9OU0w0QXO6AOIBiu4bpl7AXvEZogeT%2FjUHNO7HzQ%3D",
  "questions": [
    "What is the grace period for premium payment?",
    "What is the waiting period for pre-existing diseases?",
    "Does this policy cover maternity expenses?"
  ]
}`
        },
        curl: {
          heading: "Test with cURL",
          description: "Use this cURL command in your terminal for a quick test. This is also a great starting point for testing with other tools like Postman or Hoppscotch.",
          requestBody: `curl -X POST "https://your-hosted-api-url.com/hackrx/run" \\
-H "Authorization: Bearer b7be0d0c6cb51a6c84e190a66d4542526361d32d3df9035b4c8a00b9198df85" \\
-H "Content-Type: application/json" \\
-d '{
  "documents": "https://hackrx.blob.core.windows.net/assets/policy.pdf?sv=2023-01-03&st=2025-07-04T09%3A11%3A24Z&se=2027-07-05T09%3A11%3A00Z&sr=b&sp=r&sig=N4a9OU0w0QXO6AOIBiu4bpl7AXvEZogeT%2FjUHNO7HzQ%3D",
  "questions": ["What is the No Claim Discount (NCD)?"]
}'`
        }
      }
    },
    previewImages: [
      // "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop"
    ],
    animatedPreview: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDBkYmRja2Y0dDNxd3l5ZW85a3pxNTF0b250bmNqZ2o0dXZ1NXd0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L8yQ02hI2w5sQ/giphy.gif",
    tags: ["Python", "FastAPI", "LangChain", "Gemini", "RAG", "Vector Database", "Faiss", "BM25"],
    category: 'ai',
    github: "https://github.com/Coder-Kartikey/HACKRX6.0-1",
    live: "https://hackrx-bajaj-api.onrender.com/docs", // Add the link to your Hugging Face Space demo here
    icon: Brain,
    timeline: "Hackathon Project",
    team: "Solo Contribution",
    status: "Completed",
    overview: "A robust RAG API that passed Level 4 of the HackRx 6.0 hackathon, proving its high accuracy and performance under pressure.",
    highlights: [
      "Advanced Fusion Retrieval",
      "High-Throughput API",
      "Hackathon Level 4",
      "Async API Design"
    ],
    technicalDetails: {
      CoreFramework: "A robust REST API built with FastAPI for high-performance, asynchronous capabilities.",
      Language: "Developed entirely in Python, leveraging its powerful AI and web service ecosystem.",
      AIIntegration: "Utilized Google's Gemini Pro for answer generation and `embedding-001` for text embeddings.",
      RetrievalMethod: "A hybrid 'Fusion Retrieval' strategy combining BM25Retriever with Faiss vector search.",
      CoreLibraries: "LangChain for RAG orchestration, PyMuPDF for PDF parsing, and aiohttp for async API calls.",
      KeyFeature: "Engineered a dynamic API key rotation to manage rate limits and maximize throughput."
    },
    challenges: [
      {
        problem: "The primary challenge was rapidly learning and implementing a full RAG pipeline with unfamiliar technologies like FastAPI and vector databases to meet the hackathon's competitive benchmarks.",
        solution: "I adopted a focused, modular approach, mastering each component—document parsing, embedding, and the API server—iteratively. This strategy allowed me to build a functional and high-performing prototype."
      },
      {
        problem: "The API began to fail under the increasing load of the higher-level tests due to rate limits on a single Gemini API key.",
        solution: "I engineered a creative solution by implementing a pool of API keys. The system dynamically cycles through keys for each request using `aiohttp`, ensuring high availability and successfully passing the hackathon's stress tests."
      }
    ],
    metrics: [
      {
        label: "Avg. Response Time",
        value: "<1200ms",
        icon: TbClock
      },
      {
        label: "Retrieval Accuracy",
        value: "High",
        icon: TbSearch
      },
      // {
      //   label: "Auth Bearer Code",
      //   value: "b7be0d0c6cb51a6c84e190a66d4542526361d32d3df9035b4c8a00b9198df385",
      //   icon: TbLock
      // },
      {
        label: "API Security Authentication",
        value: "Bearer Token",
        icon: TbLock
      },
      {
        label: "API Throughput",
        value: "Optimized",
        icon: TbGauge
      }
    ],
    keyFeatures: [
      "RAG Pipeline API",
      "Fusion Retrieval",
      "Dynamic Key Rotation",
      "PDF Document Processing"
    ]
  }
};
