import { Brain, Code} from 'lucide-react';
import { TbChartInfographic, TbTargetArrow, TbSum, TbActivity, TbClock, TbGauge, TbSearch, TbLock, TbDatabase, TbEyeCheck, TbFileZip, TbClockBolt, TbLockCode, TbApi, TbTemplate, TbFileDownload, TbCode, TbCloudUpload, TbTerminal2, TbSitemap, TbCpu, TbSpeedboat, TbDatabaseStar } from 'react-icons/tb';

// Category order and labels for filter toggler (customize as needed)
export const categoryOrder: { id: string; label: string }[] = [
  { id: 'ai', label: 'AI/ML' }, // Category Code: 1
  { id: 'fullstack', label: 'Full Stack' }, // Category Code: 2
  { id: 'cybersecurity', label: 'Cybersecurity' }, // Category Code: 3
  { id: 'cppcli', label: 'C++ & CLI'}, // Category Code: 4
];

// Project Data Schema
export interface ProjectData {
  id: number;
  category: string;
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
  github: string;
  live: string;
  liveDemo?: string;
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

  1101: {
    id: 1101,
    category: 'ai',
    title: "INSIGHT ENGINE",
    subtitle: "An Intelligent Query-Retrieval System for Unstructured Documents",
    description: "Built for the Bajaj Finserv HackRx 6.0 challenge, this API uses a sophisticated RAG pipeline to answer natural language questions from large documents. The system successfully passed Level 4 testing, demonstrating its capability under demanding performance benchmarks.",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
    previewOption: "apiTesting",
    apiTesting: {
      header: "Interactive API Endpoint",
      endpoint: "https://your-hosted-api-url.com/hackrx/run",
      authentication: {
        heading: "Authentication",
        method: "Bearer Token",
        bearerToken: "b7be0d0c6cb51a6c84e190a66d4542526361d32d3df9035b4c8a00b9198df85"
      },
      demoData: {
        portal: {
          heading: "Test on My Portal",
          description: "Authenticate, Paste the JSON below into request body, and feel free to modify the document URL and questions.",
          requestBody: `{
            "documents": "https://hackrx.blob.core.windows.net/assets/policy.pdf?sv=2023-01-03&st=2025-07-04T09%3A11%3A24Z&se=2027-07-05T09%3A11%3A00Z&sr=b&sp=r&sig=N4a9OU0w0QXO6AOIBiu4bpl7AXvEZogeT%2FjUHNO7HzQ%3D",
            "questions": [
              "What is the grace period for premium payment?",
              "What is the waiting period for pre-existing diseases?",
              "Does this policy cover maternity expenses?"
            ]
          }`,
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
    github: "https://github.com/Coder-Kartikey/HACKRX6.0-1",
    live: "https://hackrx-bajaj-api.onrender.com/docs",
    liveDemo: "https://hackrx-bajaj-api.onrender.com/docs",
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
      "Advanced Fusion Retrieval",
      "Dynamic Key Rotation",
      "High-Throughput API",
      "PDF Document Processing",
      "Async API Design"
    ]
  },
  2102: {
    id: 2102,
    category: 'ai',
    title: "Warden AI",
    subtitle: "A CNN-based Image Classifier for Early Wildfire Detection",
    description: "This project leverages a custom-built Convolutional Neural Network (CNN) to accurately classify fire and non-fire images from aerial and ground-level sources. It's designed as a scalable proof-of-concept for early warning systems to aid in rapid disaster response.",
    image: "https://images.unsplash.com/photo-1643744527019-f50b31e1517a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aWxkZmlyZSUyMGRldGVjdGlvbiUyMGZvcmVzdCUyMGZpcmUlMjBzdXJ2ZWlsbGFuY2V8ZW58MXx8fHwxNzU2Mzg0NDQxfDA&ixlib=rb-4.1.0&q=80&w=1200",
    previewOption: "previewImages",
    previewImages: [
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
    ],
    animatedPreview: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2RtaHhlZnZidmR2OXlscHk3dDVoaDk2bHV1Z3p6aW9wOWJmaHczNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L8yQ02hI2w5sQ/giphy.gif",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Deep Learning", "CNN"],
    github: "https://github.com/Coder-Kartikey/Forest_Fire_Detection_using_DL",
    live: "https://colab.research.google.com/drive/1ugrVWwZfleiuaGTRFmLWQE07k_d987Jv?usp=sharing",
    icon: Brain,
    timeline: "2 Weeks",
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
      "Robust Image Preprocessing",
      "Data Augmentation",
      "Binary Image Classification",
      "Custom CNN",
      "End-to-End Evaluation",
      "Scalable Data Pipeline"
    ]
  },
  3201: {
    id: 3201,
    category: 'fullstack',
    title: "SmartContent Studio",
    subtitle: "An AI-Powered Resume Generator Web Application",
    description: "A full-stack web application that leverages the Gemini 1.5 Pro API to generate customized, professional resumes. Built with a user-friendly Streamlit interface, users can input their details, choose from various templates, and download the final resume in DOCX format.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
    previewImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
    ],
    animatedPreview: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Zua3dha3Nwc3BzaDExcm5kZzh6cGl4Mnl4dW40aWJ3dHJucHhkaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbPG1c33d2Soo/giphy.gif",
    tags: ["Python", "Streamlit", "Gemini", "Generative AI", "API", "UI/UX", "Pandas"],
    github: "https://github.com/Coder-Kartikey/SmartContent-Studio",
    live: "https://coder-kp-smartcontent-studio.hf.space",
    liveDemo: "https://coder-kp-smartcontent-studio.hf.space",
    icon: Code,
    timeline: "2 Weeks",
    team: "Team Project",
    status: "Completed",
    overview: "A Streamlit web app using the Gemini API to instantly generate and format professional resumes.",
    highlights: [
      "AI-Powered Content Generation",
      "Multiple Template Options",
      "DOCX Document Export",
      "Fast Response Time (<3s)"
    ],
    technicalDetails: {
      CoreFramework: "Built with Streamlit for a reactive, user-friendly frontend and Python for backend logic.",
      AIIntegration: "Utilized the Google Gemini 1.5 Pro API for all generative text and resume formatting tasks.",
      FileHandling: "Engineered a reliable file export feature using the `python-docx` library to generate downloadable DOCX resumes.",
      APIandSecurity: "Managed API interactions with the `google-generativeai` library and secured API keys using environment variables.",
      UserInterface: "Designed a clean and intuitive UI with components for text input, dropdowns, and progress bars for a smooth user experience.",
      Testing: "Conducted functional and performance tests, achieving an average content generation time of 2.8 seconds."
    },
    challenges: [
      {
        problem: "Crafting effective and consistent prompts for the Gemini API was crucial to ensure high-quality resume formatting across different templates and user inputs.",
        solution: "I developed a dynamic prompt engineering system. The backend logic constructs detailed prompts by combining user data with template-specific formatting instructions, guiding the AI to produce accurate results."
      },
      {
        problem: "Implementing a reliable and user-friendly file download feature for the generated resume directly from the Streamlit application.",
        solution: "I integrated the `python-docx` library to programmatically create a Word document from the AI-generated text. This document is then converted to a byte stream, enabling a seamless 'Download as DOCX' button for the user."
      }
    ],
    metrics: [
      {
        label: "Avg. Generation Time",
        value: "2.8s",
        icon: TbClock
      },
      {
        label: "API Calls Handled",
        value: "50+",
        icon: TbApi
      },
      {
        label: "Template Options",
        value: "10+",
        icon: TbTemplate
      },
      {
        label: "Download Formats",
        value: "1",
        icon: TbFileDownload
      }
    ],
    keyFeatures: [
      "AI Resume Generation",
      "Template Customization",
      "DOCX Export",
      "User-Friendly UI",
      "Custom Prompts",
      "Secure API Handling"
    ],
    previewOption: 'previewImages',
  },
  4301: {
    id: 4301,
    title: "InvisiData",
    category: 'cybersecurity',
    subtitle: "A Python-based Steganography Tool for Hiding Data in Images",
    description: "InvisiData is a command-line tool that encodes and decodes secret text messages within PNG images using the Least Significant Bit (LSB) steganography technique. This project showcases algorithmic thinking and low-level data manipulation with Python.",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
    previewImages: [
      "https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1964&auto=format&fit=crop",
    ],
    animatedPreview: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Zua3dha3Nwc3BzaDExcm5kZzh6cGl4Mnl4dW40aWJ3dHJucHhkaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbPG1c33d2Soo/giphy.gif",
    tags: ["Python", "OpenCV", "NumPy", "Steganography", "Algorithms", "Cyber Security"],
    github: "https://github.com/Coder-Kartikey/InvisiData",
    live: "https://invisi-data.onrender.com",
    liveDemo: "https://invisi-data.onrender.com",
    icon: TbLockCode,
    timeline: "1 Week",
    team: "Individual Project",
    status: "Completed",
    overview: "An algorithmic tool that manipulates image pixels at the binary level to secretly embed and extract text data.",
    highlights: [
      "Pixel-Level Data Manipulation",
      "LSB Encoding & Decoding",
      "Custom Binary Conversion",
      "Clear Algorithmic Logic"
    ],
    technicalDetails: {
      Language: "Implemented entirely in Python for its strong data handling capabilities.",
      CoreLibraries: "Utilized OpenCV for image I/O operations and NumPy for efficient array manipulation.",
      Algorithm: "Embedded a binary string of the message into the least significant bits of each pixel's color channels.",
      DataHandling: "Engineered a decoding function that reconstructs the binary string and converts it back to readable text.",
      Delimiter: "Used a special end-of-message bit sequence to signal the decoder where the hidden message stops.",
      Environment: "Developed and tested within a standard Python environment using Jupyter Notebooks for visualization.",
    },
    challenges: [
      {
        problem: "The primary challenge was understanding and correctly manipulating data at the bit level within a multi-dimensional NumPy array representing the image.",
        solution: "I overcame this by breaking the problem down: first, converting text to a pure binary string, then iterating through each pixel and color channel to replace only the final bit, ensuring the visual integrity of the image was maintained."
      },
      {
        problem: "The decoded message would often include random garbage characters after the intended secret text.",
        solution: "I implemented a robust end-of-message delimiter (a sequence of bits unlikely to appear naturally). The decoding function now stops reading as soon as it encounters this delimiter, resulting in a clean, accurate output."
      }
    ],
    metrics: [
      {
        label: "Data Capacity",
        value: "3 bits/pixel",
        icon: TbDatabase
      },
      {
        label: "Visual Distortion",
        value: "Imperceptible",
        icon: TbEyeCheck
      },
      {
        label: "File Size Overhead",
        value: "None",
        icon: TbFileZip
      },
      {
        label: "Algorithm Efficiency",
        value: "O(n)",
        icon: TbClockBolt
      }
    ],
    keyFeatures: [
      "Text Encoding",
      "Data Extraction",
      "Binary Manipulation",
      "Image Integrity",
      "Variable-Length Messages",
      "Algorithmic Logic",
    ],
    previewOption: 'previewImages',
  },
  5202: {
    id: 5202,
    category: 'fullstack',
    title: "WonderLust",
    subtitle: "A Backend-Focused Vacation Rental Platform inspired by Airbnb",
    description: "A robust backend system for a vacation rental platform, built on the MVC pattern. This project features a complete user authentication system, cloud-based image uploading via a RESTful API, and comprehensive data validation, with basic EJS templates for demonstrating functionality.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    previewImages: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    ],
    animatedPreview: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Zua3dha3Nwc3BzaDExcm5kZzh6cGl4Mnl4dW40aWJ3dHJucHhkaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbPG1c33d2Soo/giphy.gif",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "MVC", "RESTful APIs"],
    github: "https://github.com/Coder-Kartikey/WonderLust",
    live: "https://wonderlust-o9ym.onrender.com/",
    liveDemo: "https://wonderlust-o9ym.onrender.com/",
    icon: Code,
    timeline: "1 Month",
    team: "Individual Project",
    status: "Backend Complete",
    overview: "A robust, web application demonstrating core backend development skills.",
    highlights: [
      "Full CRUD Functionality",
      "Secure User Authentication",
      "Cloud Image Storage",
      "Data Validation & Security"
    ],
    technicalDetails: {
      BackendFramework: "Built with Node.js and Express.js, following RESTful API conventions and the MVC architectural pattern.",
      Database: "Utilized MongoDB as the database with Mongoose as the ODM for schema creation and data modeling.",
      Authentication: "Implemented a secure, session-based user authentication system from scratch using Passport.js.",
      Frontend: "Rendered dynamic views using EJS for server-side templating and styled with Bootstrap 5 for a responsive design.",
      ImageHandling: "Integrated Cloudinary for cloud-based image storage, using Multer for handling file uploads.",
      Security: "Ensured data integrity with JOI for schema validation and protected against common vulnerabilities using security best practices."
    },
    challenges: [
      {
        problem: "Implementing a secure and persistent user authentication system from the ground up, including session management and password hashing.",
        solution: "I integrated Passport.js, which provided a flexible authentication strategy. I learned to use middleware to protect routes and stored sessions in MongoDB to ensure users remained logged in across browser sessions."
      },
      {
        problem: "Managing image uploads, storage, and retrieval efficiently without storing them directly in the database.",
        solution: "I used the Multer middleware to handle multipart/form-data for uploads and integrated the Cloudinary API. This offloaded image storage to the cloud, providing a scalable solution and keeping the database lightweight."
      }
    ],
    metrics: [
      {
        label: "Database",
        value: "MongoDB",
        icon: TbDatabase
      },
      {
        label: "Authentication",
        value: "Passport.js",
        icon: TbLock
      },
      {
        label: "Templating",
        value: "EJS",
        icon: TbCode
      },
      {
        label: "Image Storage",
        value: "Cloudinary",
        icon: TbCloudUpload
      }
    ],
    keyFeatures: [
      "User Signup & Login",
      "Property CRUD",
      "Image Uploads",
      "User Reviews",
      "Data Validation",
      "Responsive Design"
    ],
    previewOption: 'previewImages',
  },
  6401: {
  id: 6401,
  category: 'cppcli',
  title: "Campus ERP Portal",
  subtitle: "A C++ based Command-Line Interface for Student Management",
  description: "A comprehensive CLI application designed to streamline student and administrative tasks within a college. This project demonstrates core software engineering principles, including Object-Oriented Programming (OOP), multi-user roles, and direct database interaction.",
  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  previewImages: [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
  ],
  animatedPreview: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Zua3dha3Nwc3BzaDExcm5kZzh6cGl4Mnl4dW40aWJ3dHJucHhkaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbPG1c33d2Soo/giphy.gif",
  tags: ["C++", "OOP", "Data Structures", "Software Development", "SQL", "CLI"],
  github: "https://github.com/Coder-Kartikey/ERP_Portal",
  live: "",
  icon: TbTerminal2,
  timeline: "15 Days",
  team: "Individual Project",
  status: "Completed",
  overview: "A CLI application built with C++ and OOP principles to manage student and admin data via an SQL database.",
  highlights: [
    "Object-Oriented Design",
    "Dual-Role System",
    "Direct SQL Integration",
    "Secure Authentication"
  ],
  technicalDetails: {
    Language: "Developed entirely in C++ for performance and low-level system control.",
    Paradigm: "Strictly followed Object-Oriented Programming (OOP) principles, using classes for Admin and Student entities with inheritance.",
    DataStorage: "Utilized a raw SQL database for all data persistence, demonstrating foundational database management skills.",
    UserInterface: "Created a text-based Command-Line Interface (CLI) for all user interactions, including menus and data entry.",
    Authentication: "Implemented a secure login system from scratch for both admin and student roles based on credentials stored in the database.",
    CodeStructure: "Organized the application into modular files (ADMIN.cpp, STUDENT.cpp) for clarity and maintainability."
  },
  challenges: [
    {
      problem: "Designing a logical and secure class structure using OOP principles, including the correct use of inheritance and access specifiers (public, protected).",
      solution: "I designed a base ADMIN class to handle core authentication logic and inherited it in the STUDENT class, allowing for code reuse while maintaining a clear separation of roles and permissions."
    },
    {
      problem: "Ensuring data integrity and preventing unauthorized access between the two distinct user portals (Admin and Student).",
      solution: "I implemented separate authentication methods for each class. The main application logic routes the user to the correct portal only after their credentials have been successfully verified against the database."
    }

  ],
  metrics: [
    {
      label: "Execution Speed",
      value: "High",
      icon: TbSpeedboat
    },
    {
      label: "Memory Usage",
      value: "Low",
      icon: TbCpu
    },
    {
      label: "Code Complexity",
      value: "Optimized",
      icon: TbSitemap
    },
    {
      label: "Data Integrity",
      value: "Validated",
      icon: TbDatabaseStar
    }
  ],
  keyFeatures: [
    "Admin Portal",
    "Student Portal",
    "OOP Architecture",
    "SQL Database",
    "Role-Based Access",
    "Secure Login"
  ],
  previewOption: 'previewImages',
}

// Next Projects to Add - CrowdFundHub, Face Detection, 
};



// Stock Images 
// https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop
// https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2UlMjBtb2JpbGV8ZW58MXx8fHwxNzU1Nzg0OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080
// https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBhbmltYXRpb24lMjBzY3JlZW58ZW58MXx8fHwxNzU1Nzg3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080
// https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop
// https://images.unsplash.com/photo-1629963918958-1b62cfe3fe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU1NjkyODYxfDA&ixlib=rb-4.1.0&q=80&w=1080
// https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHR5cGluZ3xlbnwxfHx8fDE3NTU3ODcxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080
// https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop
// https://images.unsplash.com/photo-1717583191083-cd82ed7f217e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc1NTY5Mzg3Mnww&ixlib=rb-4.1.0&q=80&w=1080
// https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1714846201670-1c5721196c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJtaW5hbCUyMGNvZGluZyUyMG1vbml0b3J8ZW58MXx8fHwxNzU1Nzg3MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080
// https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop
// https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop
// https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop
// https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop

// Stock Gif's
// https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXd0anR5OHppM3l1Zzd3aGo3MGVncXQ1MWJjeXY5cDhzcWo4YmJ0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBsOjMOcdeGJIU8/giphy.gif
// https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamM1YjV6OGV4YWRmMWRnOGZxbms0cHJ2dzlmN3dvMDFoeW5pcGoyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif
// https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif
// https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif
// https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif