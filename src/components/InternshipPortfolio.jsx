import { Calendar, Code, ExternalLink, Github, Mail } from 'lucide-react';
import React, { useState } from 'react';


const InternshipPortfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Recipe Page",
      image: "/assets/gifs/recipe.gif",

      description: "A beginner-friendly recipe page built using HTML and CSS. Includes ingredients and instructions.",
      topics: ["HTML", "CSS", "Flexbox"],
      date: "2 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Recipe-Page",
      liveUrl: "https://recipe-page-three-chi.vercel.app/"
    },
    {
      id: 2,
      title: "Bento Grid",
      image: "/assets/gifs/bento.gif",
      description: "An aesthetic bento grid layout using CSS Grid for showcasing UI cards.",
      topics: ["HTML", "CSS Grid", "Animations"],
      date: "3 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Bento-Grid",
      liveUrl: "https://bento-grid-tau-dusky.vercel.app/"
    },
    {
      id: 3,
      title: "Vanilla JS Form",
      image: "/assets/gifs/form.gif",
      description: "A dynamic form built using vanilla JavaScript with input validation and error handling.",
      topics: ["JavaScript", "HTML5", "Validation"],
      date: "4 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Vanilla-JS-Forms",
      liveUrl: "https://vanilla-js-forms.vercel.app/"
    },
    {
      id: 4,
      title: "Calculator WebApp",
      image: "/assets/gifs/calculator.gif",
      description: "Built a functional calculator app with basic arithmetic operations and a clean UI.",
      topics: ["JavaScript", "DOM", "CSS"],
      date: "5 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Calculator-Webapp",
      liveUrl: "https://calculator-webapp-mu.vercel.app/"
    },
    {
      id: 5,
      title: "Movie Vault",
      image: "/assets/gifs/movie.gif",
      description: "A simple web-based movie gallery built using JavaScript arrays, showcasing a curated list of my favorite movies.",
      topics: ["HTML", "CSS", "Javascript"],
      date: "9 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Movie-Vault",
      liveUrl: "https://movie-vault-chi.vercel.app/"
    },
   
    {
      id: 6,
      title: "Report Generator",
      image: "/assets/gifs/report.gif",
      description: "Generate downloadable PDF reports from form inputs using client-side scripting.",
      topics: ["JavaScript", "iterations", "htmls-css"],
      date: "10 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Report-Generator",
      liveUrl: "https://report-generator-liart.vercel.app/"
    },
     {
      id: 7,
      title: "Mood Tracker",
      image: "/assets/gifs/mood.gif",
      description: "Track daily mood entries and display analytics with local storage support.",
      topics: ["async", "arrow-functions", "LocalStorage"],
      date: "11 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Mood-Tracker",
      liveUrl: "https://mood-tracker-ten-cyan.vercel.app/"
    },
    {
      id: 8,
      title: "Flags and Facts",
      image: "/assets/gifs/flags.gif",
      description: "Display world flags and facts fetched from a REST API using vanilla JS.",
      topics: ["JavaScript", "REST API", "Async/Await"],
      date: "12 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Flags-and-Facts",
      liveUrl: "https://flags-and-facts.vercel.app/"
    },
    {
      id: 9,
      title: "Trendora Ecommerce Site",
      image: "/assets/gifs/trendora.gif",
      description: " A responsive product listing web app using async/await and the DummyJSON API. Features category filtering, star-based ratings, error handling, and clean modular JavaScript.",
      topics: ["API", "async/await", "es6-js"],
      date: "13 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Trendora-Ecommerce-Site",
      liveUrl: "https://trendora-ecommerce-site.vercel.app/"
    },
    {
      id: 10,
      title: "Internship Portfolio",
      image: "/assets/gifs/work.gif",
      description: " A curated showcase of web development projects built during the Design WebTech internship using React.",
      topics: ["React", "tailwind-css", "vite"],
      date: "16 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Internship-Portfolio",
      liveUrl: "https://internship-portfolio-pearl.vercel.app/"
    },
    {
      id: 11,
      title: "Order Summary Page",
      image: "/assets/gifs/order.gif",
      description: " A responsive and elegant Order Summary card built with React, TypeScript, and Tailwind CSS .",
      topics: ["props", "components", "react-ts"],
      date: "17 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Order-Summary",
      liveUrl: "https://order-summary-snowy.vercel.app/"
    },
    {
      id: 12,
      title: "Counter App",
      image: "/assets/gifs/counter.gif",
      description: " A responsive counter app built with React, TypeScript, and Tailwind CSS, featuring  basic state handling.",
      topics: ["hooks", "useState", "useEffect"],
      date: "18 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/Counter-App",
      liveUrl: "https://counter-app-steel-pi.vercel.app/"
    },
    {
      id: 13,
      title: "Extension Manager",
      image: "/assets/gifs/extension.gif",
      description: "A modern React extension management UI demonstrating conditional rendering, list mapping, and parent-child component architecture.",
      topics: ["lists", "conditional rendering", "key-props"],
      date: "19 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/extension-manager",
      liveUrl: "https://extension-manager-blue.vercel.app/"
    },
     {
      id: 14,
      title: "To Do List",
      image: "/assets/gifs/todo.gif",
      description: "A React + TypeScript To-do List App using useEffect and localStorage to add, complete, delete, and persist tasks. ",
      topics: ["glassmorphism-css", "useState", "useEffect"],
      date: "20 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/to-do-list",
      liveUrl: "https://to-do-list-eight-peach-49.vercel.app/"
    },
     {
      id: 15,
      title: "Food Journal",
      image: "/assets/gifs/food.gif",
      description: "A vibrant recipe explorer app built with React and Tailwind, featuring animated UI, live search, and beautifully styled recipe detail pages.",
      topics: ["api-rest", "tailwind-animate", "useEffect"],
      date: "23 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/food-journal",
      liveUrl: "https://food-journal-nine.vercel.app/"
    },
    {
      id: 16,
      title: "Starlit useEffect Demo",
      image: "/assets/gifs/star.gif",
      description: "Visualize React’s useEffect lifecycle with stars, parallax, and a cosmic welcome UI built using Three.js + Tailwind",
      topics: ["three-.js", "tailwind-css", "useEffect"],
      date: "24 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/starlit-useeffect-demo",
      liveUrl: "https://bespoke-torte-7c7206.netlify.app/"
    },
    {
      id: 17,
      title: "Contact Form",
      image: "/assets/gifs/contact.gif",
      description: "A responsive and accessible contact form built with React, TypeScript, Tailwind CSS, and Vite , featuring controlled components, form validation, and reusable UI elements.",
      topics: ["form-validation", "controlled-components", "react-ts"],
      date: "25 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/contact-form",
      liveUrl: "https://contact-form-xgu3.vercel.app/"
    },
    {
      id: 18,
      title: "React Router Dom Demo",
      image: "/assets/gifs/router.gif",
      description: "A modern React app using React Router to demonstrate static & dynamic routing, 404 handling, API integration, and search functionality with a clean UI.",
      topics: ["react-router", "routing", "error-handling"],
      date: "26 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/react-router-dom-demo",
      liveUrl: "https://react-route-dom-demo-15bb.vercel.app/"
    },
      {
      id: 18,
      title: "React Router Dom (with theme)",
      image: "/assets/gifs/green.gif",
      description: "A modern React app using React Router to demonstrate static & dynamic routing, 404 handling, API integration, and search functionality with a clean UI.",
      topics: ["useContext", "routing", "error-handling"],
      date: "27 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/react-router-dom-demo",
      liveUrl: "https://react-route-dom-demo-15bb.vercel.app/"
    },
    {
      id: 19,
      title: "Stopwatch using useRef",
      image: "/assets/gifs/stopwatch.gif",
      description: "A minimalist and responsive stopwatch app , he core logic leverages useRef to track start time and accumulate elapsed time without causing unnecessary re-renders.",
      topics: ["useRef", "hooks", "react-ts"],
      date: "30 June 2025",
      githubUrl: "https://github.com/SanyaShresta25/stopwatch-using-useRef",
      liveUrl: "https://stopwatch-using-use-ref.vercel.app/"
    },
    {
      id: 20,
      title: "Multi Step Form",
      image: "/assets/gifs/multi.gif",
      description: "This project is a modern, multi-step job application form built with React, using useReducer and react-hook-form for seamless state management, validation, and a clean user experience.",
      topics: ["multi step form", "react hook form", "useReducer"],
      date: "1 July 2025",
      githubUrl: "https://github.com/SanyaShresta25/multi-step-form",
      liveUrl: "https://multi-step-form-rosy-eight.vercel.app/"
    },
{
      id: 21,
      title: "Dessert Cart",
      image: "/assets/gifs/dessert.gif",
      description: "A dessert cart app using React’s useContext and useReducer for global cart state,making cart actions and sweet treats accessible anywhere in the app.",
      topics: ["useContext", "folder management", "useReducer"],
      date: "2 July 2025",
      githubUrl: "https://github.com/SanyaShresta25/dessert-cart",
      liveUrl: "https://dessert-cart-phi.vercel.app/"
    },
    {
      id: 22,
      title: "Invoice Dashboard",
      image: "/assets/gifs/22.gif",
      description: "A clean, responsive invoice management dashboard built with React and TypeScript. Features include status-based filtering, amount/date sorting, revenue summaries, and performance-optimized rendering using useMemo",
      topics: ["useContext", "folder management", "useReducer"],
      date: "4 July 2025",
      githubUrl: "https://github.com/SanyaShresta25/invoice-dashboard-using-useMemo",
      liveUrl: "https://invoice-dashboard-using-use-memo.vercel.app/"
    },
    {
      id: 23,
      title: "Custom Hook Demo",
      image: "/assets/gifs/23.gif",
      description: "A minimal React app demonstrating a custom hook for undo and redo functionality in a text editor. Built with TypeScript, Tailwind CSS, and Vite, featuring responsive design and clean UI.",
      topics: ["best practices", "custom hook", "react js"],
      date: "7 July 2025",
      githubUrl: "https://github.com/SanyaShresta25/customhook-demo",
      liveUrl: "https://customhook-demo.vercel.app/"
    },
    {
      id: 24,
      title: "React Router Dom Demo",
      image: "/assets/gifs/24.gif",
      description: "A modern React app using React Router to demonstrate static & dynamic routing, 404 handling, API integration, and search functionality with a clean UI.",
      topics: ["react router", "error handling", "routing"],
      date: "8 July 2025",
      githubUrl: "https://github.com/SanyaShresta25/invoice-dashboard-using-useMemo",
      liveUrl: "https://react-route-dom-demo-15bb.vercel.app/"
    },
    {
      id: 25,
      title: "Next Js Demo",
      image: "/assets/gifs/25.gif",
      description: "Starting my practice program with Next.js and Shadcn.Focusing on building projects and learning modern web development.Exploring everything from components and styling to routing and optimization.",
      topics: ["next js", "tailwind css", "shadcn"],
      date: "9 July 2025",
      githubUrl: "https://github.com/SanyaShresta25/next-js-practice",
      liveUrl: "https://next-js-practice-mu-virid.vercel.app/"
    },
    {
      id: 26,
      title: "Marvel Three JS",
      image: "/assets/gifs/26.gif",
      description: "Simple 3D visualization using Three.js — includes a rotating object and animated text. Clean, lightweight, and easy to extend.",
      topics: ["three js", "animation css"],
      date: "18 July 2025",
      githubUrl: "https://github.com/SanyaShresta25/marvel-three.js",
      liveUrl: "https://marvel-three-js.vercel.app/"
    },
     {
      id: 27,
      title: "Routing in Next Js",
      image: "/assets/gifs/27.gif",
      description: "A clean, responsive UI built with Next.js and Tailwind CSS. It features a modern, card-based layout perfect for showcasing services, features, or team roles on a tech-oriented landing page.",
      topics: ["next js", "routing", "shadcn"],
      date: "21 July 2025",
      githubUrl: "https://github.com/SanyaShresta25/routing-in-next.js",
      liveUrl: "https://routing-in-next-js-five.vercel.app/en/login"
    },
     {
      id: 28,
      title: "State Management using Redux ",
      image: "/assets/gifs/28.gif",
      description: "A clean, responsive UI built with Next.js and Tailwind CSS. It features a modern, card-based layout perfect for showcasing services, features, or team roles on a tech-oriented landing page.",
      topics: ["redux thunk", "next js", "shadcn"],
      date: "29 July 2025",
      githubUrl: "https://github.com/SanyaShresta25/state-management-using-redux",
      liveUrl: "https://state-management-using-redux.vercel.app/"
    },
     {
      id: 29,
      title: "State Management using Zustand ",
      image: "/assets/gifs/29.gif",
      description: "A minimal todo app built with Next.js 15, Tailwind CSS, and Zustand. It fetches todos from a public API and displays them",
      topics: ["zustand", "next js", "shadcn"],
      date: "30 July 2025",
      githubUrl: "https://github.com/SanyaShresta25/state-management-using-zustand",
      liveUrl: "https://state-management-using-zustand.vercel.app/"
    },
    


  ];

  const glowColors = [
    'from-orange-200 to-pink-300',
    'from-pink-300 to-orange-300',
    'from-pink-300 to-yellow-200',
    'from-orange-300 to-pink-300'
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: ['#FCFFC1', '#FFE893', '#FBB4A5', '#FB9EC6'][Math.floor(Math.random() * 4)],
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-20 px-4">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-pink-300/30 to-transparent blur-3xl"></div>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 via-pink-300 to-pink-300 bg-clip-text text-transparent animate-pulse pb-2">
            Design WebTech
          </h1>
          <p className="text-xl md:text-2xl text-orange-300/90 font-light">
            Internship Projects Portfolio
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-300 via-pink-300 to-orange-200 rounded-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>

              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-5 border border-orange-300/20 hover:border-pink-300/40 transition-all duration-500 transform group-hover:scale-[1.02]">
                <div className="relative overflow-hidden rounded-lg mb-4 h-32 bg-gradient-to-br from-orange-300/10 to-pink-300/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-transparent"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${glowColors[index % glowColors.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-orange-200 group-hover:text-pink-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.topics.slice(0, 3).map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-orange-300/20 to-pink-300/20 text-orange-200 rounded-full border border-pink-300/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <a href={project.githubUrl} className="flex items-center space-x-1 text-orange-300 hover:text-pink-300 transition-colors group/link">
                      <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span className="text-xs font-medium">Code</span>
                    </a>
                    <a href={project.liveUrl} className="flex items-center space-x-1 text-pink-300 hover:text-orange-300 transition-colors group/link">
                      <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span className="text-xs font-medium">Demo</span>
                    </a>
                  </div>
                </div>

                {hoveredCard === project.id && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-300/5 via-pink-300/5 to-orange-200/5 pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

     

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 px-4 border-t border-orange-300/20 mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-300/10 to-pink-300/10 rounded-2xl p-8 border border-pink-300/20">
            <p className="text-lg text-gray-300 mb-2">Mentored by</p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <p className="text-xl font-semibold text-orange-200">Ms. Nishani</p>
                <p className="text-sm text-gray-400">Technical Mentor</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-pink-300/50 to-transparent"></div>
              <div className="text-center">
                <p className="text-xl font-semibold text-pink-300">Mr. Akhilesh Rao</p>
                <p className="text-sm text-gray-400">Project Supervisor</p>
              </div>
            </div>
          </div>
         
        </div>
        {/* Connect With Me Section */}
<section className="relative z-10 max-w-3xl mx-auto px-4 py-10 text-center mt-8">
  <h2 className="text-2xl md:text-3xl font-semibold text-orange-200 mb-8">Connect With Me</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 text-sm text-pink-200 justify-items-start sm:justify-items-center">
    <a href="mailto:shrestasanya@gmail.com" className="flex items-center gap-3 hover:text-orange-300 transition-colors">
      <Mail className="w-4 h-4" />
      <span>Email</span>
    </a>
    <a href="https://sanyashresta.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-300 transition-colors">
      <ExternalLink className="w-4 h-4" />
      <span>Portfolio</span>
    </a>
    <a href="https://github.com/SanyaShresta25" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-300 transition-colors">
      <Github className="w-4 h-4" />
      <span>GitHub</span>
    </a>
    <a href="https://leetcode.com/u/SanyaShresta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-300 transition-colors">
      <Code className="w-4 h-4" />
      <span>LeetCode</span>
    </a>
    <a href="https://linkedin.com/in/sanya-shresta-jathanna/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-300 transition-colors">
      <ExternalLink className="w-4 h-4" />
      <span>LinkedIn</span>
    </a>
    <a href="https://x.com/sanya_shresta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-300 transition-colors">
      <ExternalLink className="w-4 h-4" />
      <span>Twitter</span>
    </a>
  </div>
</section>

 <div className="mt-8 text-gray-500 text-sm">
            <p>© 2025 Design WebTech Internship Program</p>
          </div>
      </footer>
    </div>
  );
};

export default InternshipPortfolio;