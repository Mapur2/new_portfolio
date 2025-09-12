const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true // allow frontend to access cookies
}));

const resumeData = {
  personal_info: {
    name: "Rupam Modak",
    email: "rupammodak1@gmail.com",
    phone: "+917439578474",
    linkedin: "linkedin.com/in/rupam-modak-a87066251",
    portfolio: "mapur2.github.io/new",
    github: "github.com/Mapur2",
    leetcode: "leetcode.com/u/rupam_modak"
  },
  education: [
    {
      institution: "Calcutta Institute Of Engineering And Management",
      degree: "B.Tech in Computer Science and Engineering",
      cgpa: 8.17,
      duration: "Sept 2022 – June 2026"
    },
    {
      institution: "National Gems Higher Secondary School",
      degree: "Higher Secondary Education",
      score: { 
        class_xii: "87%", 
        class_x: "92.4%" 
      },
      duration: "April 2007 – May 2022"
    }
  ],
  experience: [
    {
      title: "Software Engineer Intern",
      company: "Gobdu Corporation",
      duration: "June 2025 – Present",
      responsibilities: [
        "Contributed to React.js frontend and Node.js backend development with AWS services",
        "Wrote unit tests, debugged APIs, supported deployments",
        "Gained exposure to fintech, compliance, and real-world product development"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Lilyport Global",
      duration: "April 2025 – May 2025",
      responsibilities: [
        "Developed and integrated responsive user interfaces using React.js",
        "Integrated GraphQL APIs for efficient data querying and mutation"
      ]
    }
  ],
  technical_skills: {
    languages: ["C", "Java", "Python", "JavaScript", "HTML/CSS"],
    developer_tools: ["VS Code", "Git", "Github"],
    libraries_frameworks: ["React JS", "Express Js", "Next Js", "Mongoose", "Spring Boot"],
    databases: ["MongoDB", "MySQL"],
    technologies: ["Supabase", "RESTful APIs", "Groq AI"],
    dsa: "Solved 400+ problems on Leetcode and Codechef"
  },
  projects: [
    {
      name: "The Square",
      description: "A strategic, turn-based multiplayer game where each player assumes a unique role",
      tools: ["React Js", "Express js", "Socket.io"],
      github: "https://github.com/Mapur2/TheSquare",
      link: "https://the-square-omega.vercel.app/"
    },
    {
      name: "Algorithm Visualizers",
      description: "Helps visualize sorting, stack, queue, and graph algorithms",
      tools: ["React Js"],
      sub_projects: [
        {
          name: "Sorting Visualizer",
          link: "https://sorting-visualizer-jade-delta.vercel.app/",
          github: "https://github.com/Mapur2/sorting_visualizer"
        },
        {
          name: "Stack Queue Visualizer",
          link: "https://mapur2.github.io/stack-queue_visualizer/index.html",
          github: "https://github.com/Mapur2/stack-queue_visualizer"
        },
        {
          name: "Graph Traversal Visualizer",
          link: "https://traverse-viz.vercel.app/",
          github: "https://github.com/Mapur2/traverseViz"
        }
      ]
    },
    {
      name: "URL shorter",
      description: "A hassle free url shortner",
      tools: ["Express Js", "Mongo DB"],
      github: "https://github.com/Mapur2/url_shortner"
    },
    {
      name: "IPL Search",
      description: "Users can search and get information about their favourite IPL players",
      tools: ["Express Js", "MongoDB", "Mongoose"],
      github: "https://github.com/Mapur2/iplsearch",
      link: "https://iplsearch.onrender.com/"
    },
    {
      name: "Seaside Hotel Management",
      description: "Java-based hotel management system with GUI built with AWT",
      tools: ["Java", "MySQL", "AWT"],
      github: "https://github.com/Mapur2/java-hotel-mananagement"
    },
    {
      name: "FitLife - Fitness App",
      description: "Full-stack, microservices-based fitness application",
      tools: ["SpringBoot", "RabbitMQ", "React.js"]
    },
    {
      name: "Inventory Management",
      description: "MERN stack application to manage inventory",
      tools: ["MERN Stack"]
    },
    {
      name: "ThinkBack – Backend",
      description: "Backend for productivity and memory-augmentation app",
      tools: ["Groq API", "Node.js", "Express.js", "MongoDB", "Cron"]
    }
  ],
  certifications: [
    "Introduction to MongoDB – coursera.org/account/accomplishments/verify/GFEM4PP7DS8V",
    "Java Essentials – udemy.com/certificate/UC-fc11854d-a1c8-4332-a970-9330ef066a66",
    "JavaScript Basics – coursera.org/account/accomplishments/verify/HK2939VM6W6S"
  ]
};

// Function to call Groq API
async function callGroqAPI(userMessage) {
  try {
    const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant that has access to Rupam Modak's resume information. 
                   Here is the resume data in JSON format: ${JSON.stringify(resumeData, null, 2)}
                   
                   Use this information to answer questions about Rupam's skills, experience, education, 
                   projects, and any other relevant information from his resume. Be precise and helpful.
                   Do not start with resume's reference, give a natural answer`
        },
        {
          role: 'user',
          content: userMessage
        }
      ],
      temperature: 0.4,
      max_tokens: 500
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling Groq API:', error.response?.data || error.message);
    throw new Error('Failed to get response from Groq API');
  }
}

// API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({ error: 'GROQ_API_KEY environment variable is not set' });
    }

    const response = await callGroqAPI(message);
    res.json({ response });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Endpoint to get resume data
app.get('/resume', (req, res) => {
  res.json(resumeData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});