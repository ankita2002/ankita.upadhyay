export const projectsData = [
  {
    slug: "saathi",
    title: "Saathi",
    subtitle: "Your AI Companion",
    date: "July 2022",
    shortDescription:
      "AI driven mental health support platform using deep learning, NLP, Flask API, and React.",

    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "Flask API",
      "React",
      "Material UI",
      "NLP",
      "Web Scraping",
      "Logistic Regression",
      "CountVectorizer",
      "Seq2Seq",
      "Attention Model",
    ],

    github: "https://github.com/Major-Project-BE-SLRTCE",   // 🔥 ADD THIS
    publication: "https://ssgmjournal.in/index.php/ssgm/article/view/79", // 🔥 ADD THIS

    details: [
      "Web scraped real data from over 1 lakh Reddit posts from forums related to Depression, Anxiety, and Bipolar Disorder.",
      "Trained CNN models using Keras and TensorFlow and achieved accuracies of 86.76% for Depression, 89.79% for Anxiety, and 95.51% for Bipolar Disorder.",
      "Built an emotion detection pipeline using Logistic Regression and CountVectorizer with 60% accuracy.",
      "Developed a seq2seq encoder decoder attention model to generate unique and human like responses using the CounselChat dataset.",
      "Created a platform for users to contact psychiatrists and for professionals to analyze ML predictions for patients.",
      "Engineered and deployed a Flask API to receive messages and run them through ML models.",
      "Designed the user interface using React and Material UI.",
      "Won 4th Rank at IIT Bombay Research Conclave RESCON competition at the national level.",
      "https://github.com/ankita2002/Mental-Heath-Disease-Detection "
    ],
  },

  {
    slug: "luxa",
    title: "Luxa",
    subtitle: "E Commerce Platform",
    date: "2023",
  
    shortDescription:
      "A modern e commerce web application built using React with focus on clean UI, product browsing, and smooth user experience.",
  
    skills: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive Design",
      "Component Based Architecture",
      "State Management",
      "Routing",
      "UI Design",
    ],
  
    github: "https://github.com/ankita2002/Luxa-Ecommerce-Website/tree/main/client",
    demo: "https://luxa-ecommerce-website.vercel.app/",
  
    details: [
      "Developed a responsive e commerce web application using React with a focus on clean UI and user friendly navigation.",
      "Implemented product listing to allow users to explore items efficiently.",
      "Built reusable React components to ensure scalability and maintainability of the frontend architecture.",
      "Designed intuitive product cards and layout to enhance user interaction and visual appeal.",
      "Integrated routing for seamless navigation between different pages without reloads.",
      "Focused on responsive design to ensure compatibility across mobile, tablet, and desktop devices.",
      "Optimized UI performance by structuring components efficiently and minimizing unnecessary re renders.",
      "Deployed the application on Vercel for fast and reliable hosting.",
    ],
  },
  {
    slug: "bitcoin-price-prediction",
    title: "Bitcoin Price Prediction",
    subtitle: "Time Series Forecasting using LSTM",
    date: "2023",
  
    shortDescription:
      "A deep learning project that predicts Bitcoin price trends using LSTM based time series modeling.",
  
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "LSTM",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Time Series Analysis",
      "Deep Learning",
    ],
  
    github: "https://www.kaggle.com/code/ankita2002/bitcoin-price-prediction",
  
    details: [
      "Worked with historical Bitcoin price data to analyze trends over time.",
      "Preprocessed time series data and created sequential input windows for modeling.",
      "Built an LSTM based neural network using TensorFlow and Keras.",
      "Reshaped input data into 3D format required for LSTM models.",
      "Trained the model to predict future Bitcoin price movements.",
      "Evaluated model performance using predicted vs actual price comparison.",
      "Visualized results using line plots to analyze prediction accuracy.",
    ],
  },
  {
    slug: "sarcasm-detection",
    title: "Sarcasm Detection",
    subtitle: "Text Classification using TensorFlow",
    date: "2023",
  
    shortDescription:
      "A deep learning based NLP project that detects sarcasm in text using TensorFlow and sequence based modeling.",
  
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "NLP",
      "Text Classification",
      "Tokenization",
      "Padding",
      "Deep Learning",
    ],
  
    github: "https://www.kaggle.com/code/ankita2002/sarcasm-detection-tf",
  
    details: [
      "Built a text classification model to detect sarcasm in sentences.",
      "Preprocessed text data using tokenization and sequence padding.",
      "Converted text into numerical sequences suitable for model training.",
      "Implemented a neural network using TensorFlow and Keras.",
      "Trained the model on labeled sarcasm dataset.",
      "Evaluated model performance on validation data.",
      "Used embedding and sequence based learning for understanding context in text.",
      "Generated predictions to classify input text as sarcastic or not.",
    ],
  },
  {
    slug: "nltk-summarizer",
    title: "Text Summarizer",
    subtitle: "NLTK based Text Summarization Tool",
    date: "2022",
  
    shortDescription:
      "A Flask based web application that summarizes text using NLP techniques with adjustable summary length.",
  
    skills: [
      "Python",
      "NLTK",
      "Flask",
      "Sumy",
      "NLP",
      "Text Processing",
    ],
  
    github: "https://github.com/ankita2002/nltk-summarizer",
  
    details: [
      "Developed a web application that accepts user input text and generates a summarized version.",
      "Implemented text summarization using the Sumy library with LSA summarizer.",
      "Used NLTK for sentence tokenization and preprocessing.",
      "Allowed users to control summary length using a parameter between 0 and 1.",
      "Parsed input text into sentences and selected a subset based on the given length.",
      "Built backend using Flask with routes for handling text input and returning summaries.",
      "Rendered results dynamically using HTML templates.",
      "Handled both paragraph based and sentence based summarization flows.",
    ],
  }, 
  {
    slug: "invisible",
    title: "Invisible",
    subtitle: "Color Based Invisibility Effect using OpenCV",
    date: "2022",
  
    shortDescription:
      "A computer vision project that creates an invisibility effect by detecting a selected cloth color and replacing it with the captured background in real time.",
  
    skills: [
      "Python",
      "OpenCV",
      "NumPy",
      "Computer Vision",
      "Image Processing",
      "HSV Color Space",
      "Real Time Video Processing",
    ],
  
    github: "https://github.com/ankita2002/Invisible",
  
    details: [
      "Developed a real time computer vision application using OpenCV and Python.",
      "Captured live video input from the webcam and stored the background frame before processing.",
      "Converted video frames from BGR to HSV color space for color based detection.",
      "Created masks to detect the selected cloth color and isolate that region from the frame.",
      "Used morphological operations such as opening and dilation to refine the detected mask.",
      "Applied bitwise operations to replace the detected cloth region with the background image.",
      "Generated a final output frame that creates an invisibility effect in real time.",
      "Displayed the processed output continuously until the user exits the application.",
    ],
  },
];