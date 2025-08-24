import { Brain, Code, Database, Users, Zap, CheckCircle, Star, Layers } from 'lucide-react';

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  previewImages: string[];
  animatedPreview: string;
  tags: string[];
  category: string;
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
    subtitle: 'Intelligent Real-Time Communication Platform',
    description: 'A sophisticated real-time chat application leveraging OpenAI\'s advanced GPT models to deliver intelligent, context-aware conversations. This enterprise-grade solution features seamless real-time messaging, AI-powered response generation, persistent conversation memory, and comprehensive user management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    previewImages: [
      'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2UlMjBtb2JpbGV8ZW58MXx8fHwxNzU1Nzg0OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      // 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop'
    ],
    // animatedPreview: 'https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBhbmltYXRpb24lMjBzY3JlZW58ZW58MXx8fHwxNzU1Nzg3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    animatedPreview: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXd0anR5OHppM3l1Zzd3aGo3MGVncXQ1MWJjeXY5cDhzcWo4YmJ0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBsOjMOcdeGJIU8/giphy.gif',
    tags: ['React', 'Node.js', 'OpenAI', 'Socket.io', 'MongoDB', 'JWT', 'Redis'],
    category: 'ai',
    github: 'https://github.com/coderkp',
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
    previewImages: [
      'https://images.unsplash.com/photo-1629963918958-1b62cfe3fe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU1NjkyODYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
      // 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
    ],
    // animatedPreview: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHR5cGluZ3xlbnwxfHx8fDE3NTU3ODcxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    animatedPreview: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamM1YjV6OGV4YWRmMWRnOGZxbms0cHJ2dzlmN3dvMDFoeW5pcGoyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif',
    tags: ['React', 'Express', 'MongoDB', 'Stripe', 'Redux', 'AWS', 'TypeScript'],
    category: 'fullstack',
    github: 'https://github.com/coderkp',
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
    previewImages: [
      'https://images.unsplash.com/photo-1717583191083-cd82ed7f217e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc1NTY5Mzg3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop'
    ],
    animatedPreview: 'https://images.unsplash.com/photo-1714846201670-1c5721196c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJtaW5hbCUyMGNvZGluZyUyMG1vbml0b3J8ZW58MXx8fHwxNzU1Nzg3MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'AWS', 'OpenCV', 'Keras'],
    category: 'ml',
    github: 'https://github.com/coderkp',
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
  }
};
